# Pingram Website

Multi-page marketing/demo website for Pingram messenger, built with pure HTML/CSS/JS.

## Stack

- HTML5
- CSS3
- Vanilla JavaScript

## Structure

- `index.html` - main landing page
- `features.html` - product features
- `premium.html` - premium plans page
- `security.html` - security overview
- `download.html` - install/build + binary links
- `contact.html` - contact page with demo form
- `glass-test.html` - isolated glassmorphism demo page
- `css/style.css` - default site theme (Telegram-inspired)
- `css/glassmorphism.css` - lightweight glassmorphism test theme
- `css/glassmorphism-full.css` - full glassmorphism theme (complete stylesheet)
- `js/main.js` - reveal animations + mobile nav toggle
- `js/contact.js` - demo contact form behavior

## Run Locally

From `website/` folder:

```bash
python3 -m http.server 8080
```

Open in browser:

- `http://127.0.0.1:8080/`
- `http://127.0.0.1:8080/glass-test.html`

## Theme Switching

By default, pages use:

```html
<link rel="stylesheet" href="css/style.css" />
```

To test full glassmorphism, switch to:

```html
<link rel="stylesheet" href="css/glassmorphism-full.css" />
```

## Binary Download Links

`download.html` includes placeholder links for binaries.
Replace them with real release artifacts (GitHub Releases, S3, or CDN):

- Linux `.tar.gz`
- Windows `.zip`
- macOS `.dmg`

## Notes

- The contact form is frontend-only (no backend submission).
- Animations are lightweight and mobile-friendly.
- Website is independent from server runtime; only static hosting is required.
