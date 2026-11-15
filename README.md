# BibleEra Explorer — Interactive Bible Timeline

A starter website for a CMPA senior capstone. Explore 12 major Bible events in a broad narrative order, filter by testament, search events or people, and click cards for more information and Scripture references.

## Open locally

1. Download and unzip the project.
2. Open the `BibleEra-Explorer` folder in VS Code.
3. Open `index.html` in a browser (or use the **Live Server** extension).
4. Edit `index.html` (page content), `style.css` (design), and `script.js` (events and interactions).

## Publish on GitHub Pages

1. Create a repository named `BibleEra-Explorer` on GitHub.
2. Upload `index.html`, `style.css`, and `script.js` to the root of the repository (README is optional).
3. In the repository choose **Settings → Pages → Build and deployment → Deploy from a branch**.
4. Select `main` and `/ (root)`, then save.
5. Your site should appear at `https://josuejm61-cell.github.io/BibleEra-Explorer/` after GitHub finishes publishing.

## Add an event

Open `script.js` and add an object to the `events` array with `id`, `title`, `testament` (`old` or `new`), `era`, `summary`, `description`, `people`, `scripture`, and `keywords`.

## Scope and accuracy

BibleEra Explorer uses a broad narrative order, not a claim about exact historical dates. Scripture references should be verified during content review. Descriptions are educational summaries, not quotations from a specific Bible translation. No account, backend, or API key is required.

## Rename an existing GitHub repository

If your repository is still named `BibleVerse` or `BibleEra`, use **Settings → General → Repository name** to rename it to `BibleEra-Explorer`. Upload the updated website files, commit, and check **Settings → Pages**. If you previously set a custom domain, review it separately under Pages.
