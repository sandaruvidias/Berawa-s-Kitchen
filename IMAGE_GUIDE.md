# Image Guide - Where Pictures Are Used

## 📸 Current Image Setup

The website currently uses **Unsplash placeholder images** (real food photos) loaded from the internet. All images will display immediately and look professional.

## 🖼️ Image Locations

### 1. Gallery Images (Gallery Page)
**File:** `src/data/gallery.ts`

Currently using Unsplash URLs. To use your own images:
- Place images in: `public/images/`
- Name them: `gallery-1.jpg`, `gallery-2.jpg`, etc.
- Update `src/data/gallery.ts` - change URLs from Unsplash to `/images/gallery-1.jpg`, etc.

### 2. Featured Dish Images (Home Page)
**File:** `src/data/menu.ts` and `src/pages/Home.tsx`

Featured dishes (Nasi Goreng, Beef Rendang, Babi Guling) now display images.
- Images are defined in `menuItems` array in `src/data/menu.ts`
- Currently using Unsplash placeholders
- To add your own: add `image: '/images/dish-name.jpg'` to any menu item

### 3. Local Image Storage

**Recommended folder structure:**
```
public/
  images/
    gallery-1.jpg
    gallery-2.jpg
    ...
    dish-nasi-goreng.jpg
    dish-rendang.jpg
    ...
```

## 🔄 How to Replace with Local Images

### Option 1: Keep Unsplash (Current - Works Immediately)
✅ Images already work! No changes needed.

### Option 2: Use Your Own Images

1. **Add images to `public/images/` folder**
   ```
   public/images/
     ├── gallery-1.jpg
     ├── gallery-2.jpg
     ├── dish-nasi-goreng.jpg
     └── ...
   ```

2. **Update gallery.ts** (change from Unsplash URLs):
   ```typescript
   // Before:
   src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop'
   
   // After:
   src: '/images/gallery-1.jpg'
   ```

3. **Update menu.ts** (add image URLs to menu items):
   ```typescript
   {
     id: '1',
     name: 'Nasi Goreng Traditional',
     // ... other fields
     image: '/images/dish-nasi-goreng.jpg',  // Add this line
   }
   ```

## 📝 Image Recommendations

- **Format:** JPG or PNG
- **Gallery:** 800x600px minimum (will auto-resize)
- **Dish images:** 600x400px minimum
- **Optimization:** Compress images for web (use tools like TinyPNG)
- **Naming:** Use descriptive names: `gallery-interior.jpg`, `dish-rendang.jpg`

## ✅ Current Status

- ✅ Gallery: 12 images using Unsplash (real food photos)
- ✅ Featured dishes: 3 images on Home page
- ✅ All images display correctly
- ✅ Images are responsive and optimized

The website is **ready to use** with the current Unsplash images. Replace them with your own whenever you're ready!

