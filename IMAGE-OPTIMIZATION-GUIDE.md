# Image Optimization Guide

## Critical Issue: Large Carousel Images

The carousel images (`carousel-1.png` and `carousel-2.png`) are currently **4+ MB each**, which is causing:
- High LCP (Largest Contentful Paint) - 29.5s
- Large network payloads (10+ MB total)
- Slow page loads, especially on mobile

## Recommended Actions

### 1. Compress Images
Use one of these tools to compress the PNG images:
- **TinyPNG** (https://tinypng.com/) - Can reduce PNG size by 50-70%
- **ImageOptim** (Mac app) - https://imageoptim.com/
- **Squoosh** (Web app) - https://squoosh.app/

**Target size:** Each carousel image should be under **200-300 KB** after compression.

### 2. Convert to WebP Format
WebP format typically provides 25-35% better compression than PNG:
- Use **Squoosh** to convert PNG to WebP
- Or use command line: `cwebp carousel-1.png -q 80 -o carousel-1.webp`

**Target size:** Each carousel image should be under **150-250 KB** in WebP format.

### 3. Create Responsive Image Versions
Create multiple sizes for different screen sizes:
- **Desktop (1920px):** carousel-1-1920.webp (~200 KB)
- **Tablet (1280px):** carousel-1-1280.webp (~120 KB)
- **Mobile (768px):** carousel-1-768.webp (~80 KB)

### 4. Update Image References
After creating optimized images, update `assets/js/load-components.js`:

```html
<!-- Replace the srcset with actual optimized image paths -->
<img class="w-100" 
     src="assets/images/carousel-1.webp" 
     srcset="assets/images/carousel-1-1920.webp 1920w, 
             assets/images/carousel-1-1280.webp 1280w, 
             assets/images/carousel-1-768.webp 768w" 
     sizes="100vw" 
     alt="Creative Agency Slide 1" 
     width="1920" 
     height="1080" 
     fetchpriority="high" 
     loading="eager">
```

### 5. Logo Optimization
The logo (`logo_dark.webp` and `logo_light.webp`) is 617x404 but displayed at 350x140. Consider:
- Creating a smaller version (350x140) for the navbar
- Or using CSS to scale it properly

## Expected Results After Optimization

- **LCP:** Should drop from 29.5s to under 2.5s
- **Performance Score:** Should reach 100
- **Network Payload:** Should reduce from 10+ MB to under 2 MB
- **Page Load Time:** Should improve by 70-80%

## Quick Fix (If You Can't Optimize Images Now)

If you need a quick temporary fix, you can:
1. Remove the carousel temporarily
2. Use a solid color background with text overlay
3. Or use a much smaller placeholder image

This will immediately improve performance while you work on optimizing the full images.
