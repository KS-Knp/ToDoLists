/* Shared, dependency-free task rules; also exercised by the Node test suite. */
(function(root){
'use strict';
const priorities={high:0,medium:1,low:2};
function today(now=new Date()){return `${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}-${String(now.getDate()).padStart(2,'0')}`;}
function validDate(s){if(!/^\d{4}-\d{2}-\d{2}$/.test(s))return false;const d=new Date(s+'T12:00:00');return !isNaN(d)&&today(d)===s&&s>='1900-01-01';}
function normalize(data,legacy=false){if(!Array.isArray(data)||data.length>10000)throw Error('Invalid task list.');const ids=new Set();return data.map((t,i)=>{if(!t||typeof t!=='object')throw Error('Invalid task.');let title=legacy?t.text:t.title;if(typeof title!=='string'||!title.trim()||title.length>200)throw Error('Invalid task title.');const id=typeof t.id==='string'&&t.id&&!ids.has(t.id)?t.id:`task-${Date.now()}-${i}`;ids.add(id);if(!legacy&&(typeof t.done!=='boolean'||!Object.hasOwn(priorities,t.priority)||typeof t.notes!=='string'||t.notes.length>3000||typeof t.due!=='string'||(t.due&&!validDate(t.due))))throw Error('Invalid task details.');return {id,title:title.trim(),notes:legacy?'':t.notes,due:legacy?'':t.due,priority:legacy?'medium':t.priority,done:legacy?Boolean(t.disabled):t.done,createdAt:Number.isFinite(t.createdAt)?t.createdAt:Date.now()+i};});}
function select(tasks,{view='all',query='',priority='all',sort='newest',date=today()}={}){return tasks.filter(t=>(view==='completed'?t.done:view==='today'?!t.done&&t.due===date:view==='upcoming'?!t.done&&t.due>date:true)&&(priority==='all'||t.priority===priority)&&`${t.title} ${t.notes}`.toLocaleLowerCase().includes(query.trim().toLocaleLowerCase())).sort((a,b)=>Number(a.done)-Number(b.done)||(sort==='priority'?priorities[a.priority]-priorities[b.priority]:sort==='due'?(a.due||'9999-12-31').localeCompare(b.due||'9999-12-31'):0)||b.createdAt-a.createdAt);}
const api={today,validDate,normalize,select};if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.TaskCore=api;
})(typeof window==='undefined'?globalThis:window);

