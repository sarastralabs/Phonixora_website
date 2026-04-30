# Quick Guide: Update Website Images

## Files to Modify

### 1. Hero Section (`components/Hero.tsx`)

**Current line 48:**
```tsx
src="/images/Best Organic Fertilizers for Summer Growth.jpg"
```

**Change to:**
```tsx
src="/images/bio-polymer-manufacturing.jpg"
```

**Recommended image:** Manufacturing plant, sustainable production facility, or laboratory
- Download from: https://unsplash.com/s/photos/sustainable-manufacturing
- Save as: `public/images/bio-polymer-manufacturing.jpg`

---

### 2. Products Section (`components/Products.tsx`)

Currently using SVG placeholders. You can replace them with real images:

**Option A: Keep SVG placeholders** (current design)
- No changes needed
- SVGs are lightweight and load fast

**Option B: Add real product images**

Replace the SVG sections with:

```tsx
<div className="product-image">
  <img 
    src="/images/bio-polymer-granules.jpg" 
    alt="Bio-Polymer Granules"
    style={{width: '100%', height: '100%', objectFit: 'cover'}}
  />
  <div className="product-badge-top">Popular</div>
</div>
```

**Images needed:**
1. `bio-polymer-granules.jpg` - Close-up of plastic pellets
   - Search: https://unsplash.com/s/photos/plastic-pellets
   
2. `biodegradable-bags.jpg` - Eco-friendly bags
   - Search: https://unsplash.com/s/photos/biodegradable-bags
   
3. `custom-solutions.jpg` - Manufacturing or laboratory
   - Search: https://unsplash.com/s/photos/manufacturing-process

---

### 3. Gallery Section (`components/Gallery.tsx`)

Check if this component exists and add images:

```tsx
<div className="gallery-grid">
  <img src="/images/gallery-1.jpg" alt="Bio-Polymer Products" />
  <img src="/images/gallery-2.jpg" alt="Manufacturing Process" />
  <img src="/images/gallery-3.jpg" alt="Sustainable Packaging" />
  <img src="/images/gallery-4.jpg" alt="Agricultural Films" />
  <img src="/images/gallery-5.jpg" alt="Quality Control" />
  <img src="/images/gallery-6.jpg" alt="Eco-Friendly Materials" />
</div>
```

**Gallery images needed:**
- Various shots of products, manufacturing, packaging, and applications
- Search: https://unsplash.com/s/photos/sustainable-packaging

---

## Quick Start: Download These 5 Essential Images

### 1. Hero/Main Image
**Search:** "sustainable manufacturing plant"
- URL: https://unsplash.com/s/photos/sustainable-manufacturing
- Save as: `public/images/bio-polymer-manufacturing.jpg`
- Size: 1920x1080px minimum

### 2. Bio-Polymer Granules
**Search:** "plastic pellets" or "polymer granules"
- URL: https://unsplash.com/s/photos/plastic-pellets
- Save as: `public/images/bio-polymer-granules.jpg`
- Size: 800x800px minimum

### 3. Biodegradable Bags
**Search:** "eco friendly bags"
- URL: https://unsplash.com/s/photos/eco-friendly-bags
- Save as: `public/images/biodegradable-bags.jpg`
- Size: 800x800px minimum

### 4. Manufacturing Process
**Search:** "industrial manufacturing"
- URL: https://unsplash.com/s/photos/industrial-manufacturing
- Save as: `public/images/manufacturing-process.jpg`
- Size: 1200x800px minimum

### 5. Agricultural Application
**Search:** "greenhouse agriculture"
- URL: https://unsplash.com/s/photos/greenhouse-agriculture
- Save as: `public/images/agricultural-films.jpg`
- Size: 1200x800px minimum

---

## Step-by-Step Process

### Step 1: Create Images Folder (if not exists)
```bash
mkdir -p public/images
```

### Step 2: Download Images
1. Go to https://unsplash.com
2. Search for each term above
3. Click on image → Download button
4. Save with the recommended filename

### Step 3: Update Hero Component
Open `components/Hero.tsx` and change line 48:
```tsx
// FROM:
src="/images/Best Organic Fertilizers for Summer Growth.jpg"

// TO:
src="/images/bio-polymer-manufacturing.jpg"
```

### Step 4: Test
```bash
npm run dev
```
Visit http://localhost:3000 and check if images load correctly.

---

## Alternative: Use Unsplash API (Temporary)

If you want to test with images immediately without downloading:

**Hero.tsx (line 48):**
```tsx
src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&h=1080&fit=crop"
```

**Note:** This uses Unsplash's CDN directly. For production, download and host images locally.

---

## Recommended Unsplash Collections

1. **Manufacturing & Industry:**
   - https://unsplash.com/collections/1163637/manufacturing
   
2. **Sustainability:**
   - https://unsplash.com/collections/3816564/sustainability
   
3. **Eco-Friendly Products:**
   - https://unsplash.com/collections/9828065/eco-friendly

---

## Image Optimization Tips

1. **Compress images** before uploading:
   - Use TinyPNG.com or Squoosh.app
   - Target: < 500KB per image

2. **Use WebP format** for better performance:
   - Convert JPG to WebP
   - Fallback to JPG for older browsers

3. **Responsive images:**
   - Provide multiple sizes (mobile, tablet, desktop)
   - Use Next.js Image component for automatic optimization

---

## Need Help?

If you need specific images or have questions:
1. Check IMAGE_SOURCES.md for detailed recommendations
2. Visit the Unsplash/Pexels links provided
3. Download and place in `public/images/` folder
4. Update component file paths
