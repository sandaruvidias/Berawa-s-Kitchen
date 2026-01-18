# Berawa's Kitchen - Restaurant Website

A premium, modern restaurant website demo built with Vite, React, TypeScript, and Tailwind CSS.

## Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Preview production build:**
   ```bash
   npm run preview
   ```

## Project Structure

```
src/
  components/     # Reusable UI components
  pages/         # Page components
  data/          # Data files (menu, reviews, gallery)
  App.tsx        # Main app with routing
  main.tsx       # Entry point
  index.css      # Global styles
```

## Content Editing Guide

### Menu Items
**File:** `src/data/menu.ts`
- Edit the `menuItems` array to add/remove/update menu items
- Each item has: id, name, description, price, category, and optional tags (vegan, spicy, gluten-free)

### Reviews
**File:** `src/data/reviews.ts`
- Edit the `reviews` array to update customer reviews
- Each review has: id, name, rating (1-5), text, and date

### Gallery Images
**File:** `src/data/gallery.ts`
- Edit the `galleryImages` array to update gallery images
- Currently using Unsplash placeholder images - replace with your own images in `public/images/`

### Contact Information
**Files to edit:**
- **Phone, Address, Hours:** `src/pages/Contact.tsx` (line ~10-14) and `src/components/Footer.tsx`
- **WhatsApp Link:** Multiple files - search for `wa.me/6281234567890`
- **Email:** `src/pages/Contact.tsx` and `src/components/Footer.tsx`

### Google Maps Embed
**File:** `src/pages/Contact.tsx` (line ~18)
- Replace `googleMapsEmbedUrl` with your actual Google Maps embed URL

### Google Review Link
**File:** `src/pages/Home.tsx` (line ~10)
- Update `googleReviewLink` with your actual Google review URL

### Social Media Links
**File:** `src/components/Footer.tsx`
- Update Instagram and Facebook links in the `socialLinks` array

### Menu PDF
**Location:** `public/menu.pdf`
- Replace placeholder with your actual menu PDF

### Brand Name
- Search and replace "Berawa's Kitchen" across files if needed

## Features

- ✅ Fully responsive design
- ✅ Modern, clean UI with Tailwind CSS
- ✅ React Router for navigation
- ✅ Lightbox gallery with keyboard navigation
- ✅ Contact form with validation
- ✅ WhatsApp integration
- ✅ Accessible (semantic HTML, ARIA labels, focus states)
- ✅ Smooth animations and hover effects
- ✅ TypeScript for type safety
- ✅ Premium hero image on landing page
- ✅ All menu items with beautiful food images
- ✅ Professional gallery with real restaurant photos
