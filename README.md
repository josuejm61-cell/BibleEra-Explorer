# BibleEra Explorer — Version 1.2

A student capstone project: explore major Bible events through an interactive timeline.

## Run locally

1. Extract the ZIP and open the `BibleEra-Explorer` folder in VS Code.
2. Open `index.html` with the Live Server extension (or open it directly in your browser).
3. Click a timeline event to open its quick summary, then choose **Explore this story** for a separate page.
4. Use the Old/New Testament filters and search field to find events.

## Files

- `index.html` — Homepage, timeline, filters, event dialog
- `style.css` — Responsive styling and illustrated event cards
- `script.js` — Timeline information and interactions
- `story.html` — Individual story page layout
- `story.js` — Loads the selected event and adds previous/next navigation

## Publish

Publish these files to the root of your `BibleEra-Explorer` GitHub repository. In **Settings → Pages**, use `main` and `/ (root)`. The expected URL is `https://josuejm61-cell.github.io/BibleEra-Explorer/` once published.

## Notes

- No login, database or AI API key required.
- Art is made from typography and CSS shapes; no external images or image licenses required.
- The event sequence is a simplified overview for learning, not an assertion of precise historical dates.
- To add events, edit the `events` array in `script.js`.
