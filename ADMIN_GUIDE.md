# Artist Portfolio - Admin Guide

## Your Admin Dashboard

Your portfolio now includes a private admin-only section where you can manage your artwork collection.

### Accessing Admin Dashboard

1. Click the **"Admin"** link in the header navigation
2. Enter the admin password: `admin123`
3. You'll be logged into the Admin Dashboard

### Admin Features

#### 1. View Your Collection
- See all 16 of your hand-drawn artworks displayed in a grid
- View title, category, year, and medium for each piece
- See total count of artworks

#### 2. Add New Artwork
- Click **"Add New Artwork"** button
- Fill in the form:
  - **Title** (required) - Name of your artwork
  - **Category** - Choose from: Character, Portrait, Illustration, Abstract
  - **Image URL** (required) - Link to the artwork image
  - **Description** - Tell viewers about your piece
  - **Year** - Creation year (defaults to 2024)
  - **Medium** - Type of medium (defaults to "Ink Drawing")
- Click **"Add Artwork"** to add it to your gallery
- New artwork will appear immediately on the portfolio

#### 3. Delete Artwork
- Hover over any artwork card and click the **"Delete"** button
- Artwork will be removed from your gallery

### Your Current Collection

Your portfolio currently features 16 original artworks in these categories:

- **Characters** (8): Joyful Character, Robot Friend, Little Dino Buddy, Ghost Buddy, Happy Vehicle, Dapper Fellow, Box Head Wonder, and more
- **Portraits** (6): Expressive Face Study, Thoughtful Portrait, Character Study, Graceful Figure, Covered In Thoughts, Distinguished Gentleman
- **Illustrations** (1): Fisher in the Boat
- **Abstract** (1): Abstract Energy

### Portfolio Structure

Your portfolio has been simplified to focus on your artwork:

- **Home Page** - Hero section with featured work
- **Gallery** - Filterable gallery with category view
- **About** - Artist bio and testimonials
- **Footer** - Contact links and social media

**Removed:**
- Commission booking system
- Payment integration
- Contact form

These can be added later if needed!

### Tips

1. **Password**: Change `admin123` in `/app/admin/page.tsx` if you want a different password
2. **Images**: Use high-quality image URLs from services like:
   - Blob storage (Vercel Blob)
   - Cloudinary
   - AWS S3
   - Or any publicly accessible image host
3. **Categories**: Stick to consistent categories for better organization
4. **Descriptions**: Write compelling descriptions to engage viewers

### Support

Your portfolio is now fully set up as your personal gallery. All changes made in the admin panel are immediately reflected on the public portfolio!
