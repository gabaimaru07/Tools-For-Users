# Plainly — Multilingual Web Tools

A single-page website with six free tools, built with plain HTML, CSS and vanilla JavaScript. It supports English, French and Arabic (with full RTL layout), and every tool runs inside the visitor's browser, so files and text are never uploaded.

## Files

| File | Purpose |
|---|---|
| `index.html` | Page structure: header, home cards, one page per tool, About, Contact, Privacy, Terms, footer. Loads the two CDN libraries. |
| `style.css` | Design: tokens, layout, liquid-glass surfaces, 3D effects, responsive rules, RTL support. |
| `script.js` | Translations, page routing, and the logic of all six tools. |

## Running it

Open `index.html` in a browser. Everything works locally except the **contact form**, which needs the site to be served over `http(s)` (see [Contact form](#contact-form)). To test locally with a server:

```
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Site structure

- **Home** shows six cards. Each card opens its own tool page.
- Every page has its own link (`#tool1` … `#tool6`, `#about`, `#contact`, `#privacy`, `#terms`), so the browser's Back button and direct links work.
- The header holds the navigation and the language switcher. The footer links to all legal pages.

## The six tools

### 1. Image Compressor (`#tool1`)

Reduces the file size of an image.

**How to use:** choose an image, move the **Quality** slider (5–100%), then press **Download**.

**Details:**
- Works with JPG, PNG and WebP.
- Shows the original size, the new size and the percentage saved. The preview updates every time the slider moves.
- The result is always saved as a JPEG named `<original-name>-compressed.jpg`. Transparent areas of a PNG become white.
- Technology: HTML5 Canvas (`canvas.toBlob` with the JPEG quality value).

### 2. PDF Merger (`#tool2`)

Combines several PDF files into one.

**How to use:** choose two or more PDFs (you can add files in several rounds), remove any you do not want, then press **Merge PDFs**. The merged file downloads as `merged.pdf`.

**Details:**
- Pages are merged in the order the files appear in the list.
- At least two files are required.
- Password-protected or damaged PDFs may fail; the tool shows an error message in that case.
- Technology: [`pdf-lib`](https://pdf-lib.js.org/) 1.17.1 from cdnjs.

### 3. QR Code Generator (`#tool3`)

Creates a QR code from text or a URL.

**How to use:** type or paste text or a link, press **Generate**, then **Download** to save a PNG.

**Details:**
- The code is 220 × 220 px with medium error correction.
- Technology: [`qrcode.js`](https://github.com/davidshimjs/qrcodejs) 1.0.0 from cdnjs. The PNG comes from the generated canvas.

### 4. Word & Character Counter (`#tool4`)

Counts text live as you type or paste.

**Details:**
- **Words:** groups of characters separated by whitespace.
- **Characters:** the total length, including spaces.
- **Sentences:** text segments split by `.`, `!`, `?`, `؟` or `…`.
- Works with Latin and Arabic text.

### 5. Unit Converter (`#tool5`)

Converts values instantly while you type.

**How to use:** pick a category (Length, Weight or Temperature), enter a value, and choose the *from* and *to* units.

| Category | Units |
|---|---|
| Length | m, km, cm, mm, mi, ft, in |
| Weight | kg, g, mg, lb, oz |
| Temperature | °C, °F, K |

**Details:** length and weight go through a base unit (metre, kilogram). Temperature uses its own formulas through Celsius. Results show up to 6 decimal places with trailing zeros removed.

### 6. Password Generator (`#tool6`)

Creates a strong random password.

**How to use:** set the length (6–64) and switch **Uppercase**, **Numbers** and **Symbols** on or off. A new password appears whenever a setting changes, or when you press **Generate**. Press **Copy** to copy it.

**Details:**
- Lowercase letters are always included.
- Each selected type is guaranteed to appear at least once, then the password is shuffled.
- Randomness comes from `crypto.getRandomValues` with bias-free selection, not `Math.random`.

## Languages (i18n)

- All text lives in the `I18N` object at the top of `script.js`, with one entry per language (`en`, `fr`, `ar`).
- In HTML, `data-i18n="key"` sets an element's text, and `data-i18n-ph="key"` sets a placeholder.
- Switching language updates everything instantly without reloading and is remembered with `localStorage`.
- Arabic sets `dir="rtl"` on the `<html>` element. The CSS uses logical properties (`margin-inline`, `text-align: start`, and so on), so the layout flips automatically. Arabic text uses the Cairo font.

**Adding a text:** add the same key to all three languages in `I18N`, then use it with `data-i18n` or `t('key')` in JavaScript.

## Contact form

The form sends real emails to the address set in `script.js` (search for `formsubmit.co/ajax/`) using the free [FormSubmit](https://formsubmit.co) service.

1. Host the site (or use a local server) — it will not send from a file opened directly from disk.
2. Send the first test message. FormSubmit emails the inbox once with an **activation** link.
3. Click the link. After that, every message arrives in the inbox, with the visitor's email set as the reply address.

A hidden honeypot field and FormSubmit's built-in filtering reduce spam. To change the receiving address, edit it in the `fetch(...)` URL in `script.js`.

## Design notes

- **Liquid glass:** translucent, blurred surfaces (`backdrop-filter`) over soft coloured blobs in the page background.
- **3D:** home cards tilt toward the pointer, a glass cube rotates in the hero, and buttons press down like physical keys.
- Motion is disabled for visitors who enable "reduce motion" in their system settings.
- Main colours and radius are CSS variables at the top of `style.css`.

## Before going live

- Replace the short Privacy Policy, Terms and About text with fuller versions that match your real site. Ad networks such as Google AdSense expect clear, detailed policies.
- Add your own domain, favicon and `<meta>` description in `index.html`.
- If you add ads or analytics, mention cookies and third-party services in the Privacy Policy.

## Browser support

Current versions of Chrome, Edge, Firefox and Safari. `backdrop-filter` is supported in all of them; in an older browser, the surfaces simply appear as semi-transparent white.
