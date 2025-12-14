# Header & Footer Management Guide

This guide explains how to manage your header and footer in one place across all HTML pages.

## ✅ Solution 1: JavaScript Component Loader (IMPLEMENTED)

This is the **recommended solution** for static HTML sites. It works without any server-side processing.

### How It Works

1. **Component Files**: Header and footer are stored in separate HTML files:
   - `includes/header.html` - Contains navbar and spinner
   - `includes/footer.html` - Contains footer and copyright

2. **Loader Script**: `assets/js/load-components.js` automatically loads these components into each page

3. **Usage**: Simply add placeholder divs in your HTML and include the loader script

### How to Update Your Pages

Replace the header and footer sections in each HTML file with:

**In the `<body>` tag, replace the header section with:**
```html
<div id="header-container"></div>
```

**Before the closing `</body>` tag, replace the footer section with:**
```html
<div id="footer-container"></div>
```

**Add the loader script before your other scripts:**
```html
<script src="assets/js/load-components.js"></script>
```

### Example: Updated quote.html Structure

```html
<body>
    <div id="header-container"></div>
    
    <!-- Your page content here -->
    
    <div id="footer-container"></div>

    <!-- Libraries -->
    <script src="assets/js/jquery.min.js"></script>
    <script src="assets/js/bootstrap.min.js"></script>
    <!-- ... other scripts ... -->
    <script src="assets/js/load-components.js"></script>
    <script src="assets/js/master.js"></script>
</body>
```

### Adding New Pages

1. Add the page header content to `pageHeaders` object in `load-components.js`
2. Use the same structure with `header-container` and `footer-container` divs

### Pros
- ✅ Works with static hosting (no server required)
- ✅ No build process needed
- ✅ Easy to maintain
- ✅ Works with your existing jQuery setup

### Cons
- ⚠️ Requires JavaScript enabled
- ⚠️ Slight delay on page load (minimal)

---

## Alternative Solution 2: PHP Includes

If your hosting supports PHP, you can use server-side includes.

### Setup

1. Rename your HTML files to `.php` (e.g., `quote.html` → `quote.php`)
2. Create `includes/header.php` and `includes/footer.php`
3. Use PHP includes:

```php
<?php include 'includes/header.php'; ?>

<!-- Your page content -->

<?php include 'includes/footer.php'; ?>
```

### Pros
- ✅ No JavaScript required
- ✅ Works even if JS is disabled
- ✅ Faster (no fetch request)

### Cons
- ⚠️ Requires PHP support
- ⚠️ Files must be `.php` extension

---

## Alternative Solution 3: Build Tools (Gulp/Webpack)

For larger projects, you can use build tools to combine components during build time.

### Example with Gulp

```javascript
const gulp = require('gulp');
const fileinclude = require('gulp-file-include');

gulp.task('html', function() {
    return gulp.src(['src/*.html'])
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest('./'));
});
```

Then in your HTML:
```html
@@include('includes/header.html')
<!-- content -->
@@include('includes/footer.html')
```

### Pros
- ✅ No runtime overhead
- ✅ Works with any hosting
- ✅ Can minify/optimize during build

### Cons
- ⚠️ Requires build process
- ⚠️ More complex setup

---

## Alternative Solution 4: Server-Side Includes (SSI)

If your server supports SSI (Apache with mod_include), you can use:

```html
<!--#include file="includes/header.html" -->
<!-- content -->
<!--#include file="includes/footer.html" -->
```

### Pros
- ✅ No JavaScript required
- ✅ Server handles it automatically

### Cons
- ⚠️ Requires server configuration
- ⚠️ Not all hosts support SSI

---

## Recommendation

**Use Solution 1 (JavaScript Loader)** - It's already set up and works best for your static HTML site. It requires minimal changes and works everywhere.

---

## Quick Migration Checklist

- [ ] Update all HTML files to use `header-container` and `footer-container` divs
- [ ] Add `load-components.js` script to all pages
- [ ] Test each page to ensure header/footer load correctly
- [ ] Update `pageHeaders` in `load-components.js` for any custom page headers
- [ ] Remove old header/footer code from HTML files

---

## Need Help?

If you need to customize:
- **Header content**: Edit `includes/header.html`
- **Footer content**: Edit `includes/footer.html`
- **Page-specific headers**: Edit `pageHeaders` object in `load-components.js`
- **Active nav highlighting**: Already handled automatically by the loader
