# Copying Images from Original .NET Application

## Overview
To have the same images as the original application, you need to copy the image files from the .NET application's wwwroot folder to the React application's public folder.

## Steps to Copy Images

### Method 1: PowerShell Command
Run this command from PowerShell to copy all images:

```powershell
Copy-Item -Path "C:\GitHub\mtw-michaelwolfgang\michael-wolfgang\wwwroot\images\*" -Destination "C:\GitHub\mtw-michaelwolfgang-react\public\images\" -Recurse
```

### Method 2: Manual Copy
1. Navigate to: `C:\GitHub\mtw-michaelwolfgang\michael-wolfgang\wwwroot\images\`
2. Select all image files
3. Copy them to: `C:\GitHub\mtw-michaelwolfgang-react\public\images\`

### Method 3: File Explorer
1. Open File Explorer
2. Go to the .NET project images folder:
   - Path: `C:\GitHub\mtw-michaelwolfgang\michael-wolfgang\wwwroot\images`
3. Select all files (Ctrl+A)
4. Copy (Ctrl+C)
5. Navigate to React project images folder:
   - Path: `C:\GitHub\mtw-michaelwolfgang-react\public\images`
6. Paste (Ctrl+V)

## Images Required

The application expects these images:

### Home Page
- `clouds.jpeg` - Main profile image
- `coins_investing.png` - Investing section
- `running_silhouette.png` - Running section
- `knowledge.jpg` - Learning section

### Family Pages
- `reed.jpg` - Reed's page
- `mom-dad-wedding-resized.JPG` - Mom & Dad page

### Podcast Images
- `dotnetrocks.jpg`
- `hanselminutes.jpg`
- `azure-friday.jpg`
- `azurepodcast.jpg`
- `darknet-diaries.jpg`
- `lexfridman.jpg`
- `freakenomics-radio-podcast.jpeg`
- `knowledge-project-podcast.png`
- `marketplace-podcast.jpg`
- `upfirst.jpg`

### Other Images (Optional)
All other images from the original wwwroot/images folder can be copied for future use.

## Verification

After copying images:
1. Refresh the browser (Ctrl+F5)
2. Check that images load correctly
3. If any images still show placeholders, verify the filename matches exactly (including case sensitivity)

## Image Fallbacks

The application has built-in fallbacks for missing images:
- If an image fails to load, a placeholder will be shown instead
- This ensures the application works even without all images

## Notes

- Image filenames are case-sensitive in URLs
- Make sure the `public/images` directory exists
- The application serves images from `/images/` path
- No need to restart the dev server after copying images
