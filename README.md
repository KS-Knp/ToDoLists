# Taskdesk

A focused, responsive personal task manager by Arm K. Built with plain HTML, CSS and JavaScript. No installation, account, external fonts or build step required.

## Features

- Create, edit, complete and delete tasks; add notes, priorities and due dates.
- All tasks, Today, Upcoming and Completed views.
- Search titles and notes; filter priority; sort by newest, deadline or priority.
- Local browser persistence, with automatic migration of the original `todo` list on the same origin.
- Undo the most recent change for 10 seconds. Clearing completed tasks requires confirmation.
- Export and import validated JSON backups. Import replaces the current list after confirmation.
- Responsive layout, keyboard-accessible controls, native task dialog and readable empty states.
- Task content rendered as text, not executable HTML; invalid saved data is not automatically overwritten.

## Open locally

Open `index.html` in a modern browser. For a stable local storage origin during development, serve this folder with a local HTTP server. Moving the folder or switching browsers may change where browser-local data is stored: export a backup first.

## Publish to GitHub Pages

1. Open your `KS-Knp/App-to-do-list-project` repository.
2. Choose **Add file → Upload files**.
3. Upload `index.html`, `styles.css`, `core.js`, `script.js` and this `README.md` to the repository root. Replace the old files with matching names. The old `stayley.css` is no longer used and can be removed.
4. Commit the changes.
5. In **Settings → Pages**, choose **Deploy from a branch**, branch **main**, folder **/(root)**, then Save.
6. Open `https://ks-knp.github.io/App-to-do-list-project/` after deployment finishes. If you see an old version, reload without the browser cache.

Upload the extracted files, not the ZIP itself. There are no nested asset folders.

## Your data

Tasks are stored only in the current browser, under `taskdesk.v1`. They are not uploaded to GitHub and do not sync across devices. Export backups before clearing browser data or switching devices. Private browsing and restricted storage can prevent persistence; the app shows a warning when saving fails.

The original `todo` key is read only when no new-format data exists, and is left intact. Migration requires the same browser and website origin as the old app. Exported Taskdesk backups use `{ "version": 1, "tasks": [...] }`. Raw old-format backups must be migrated through the original browser first.

Use one tab for editing. If another tab changes the list, reload before making further edits. Dates are based on the device's local date. Due dates do not generate background notifications.

## Files

- `index.html` — accessible interface and task form
- `styles.css` — desktop and mobile layout
- `core.js` — task validation, migration, search, filter and sorting rules
- `script.js` — UI, local storage, backup and undo behavior

The initial list is empty. Preview tasks used during development are not shipped.
