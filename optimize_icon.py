
from PIL import Image
import os

src_path = "public/LOGO-UMP.webp"
dst_path = "app/icon.png"

try:
    img = Image.open(src_path)
    
    # Convert to RGBA
    if img.mode != 'RGBA':
        img = img.convert('RGBA')

    # Get bounding box of non-transparent pixels
    bbox = img.getbbox()
    if bbox:
        # Crop to the visible content
        img = img.crop(bbox)
        print(f"Cropped to bounding box: {bbox}")
    else:
        print("Image is fully transparent?")
        
    w, h = img.size
    print(f"Content size: {w}x{h}")
    
    # Create a square canvas based on the largest dimension
    # Add a tiny padding (e.g. 5%) so it doesn't touch the edges exactly, or 0% for max size.
    # User said "muy pequeño", so let's go with 0% or very close.
    size = max(w, h)
    
    # If the user wants it BIG, let's just center it in the square.
    # But if strictly wide, it will still have vertical space.
    # We can't fix geometry, but we can ensure NO extra wasted space.
    
    new_img = Image.new('RGBA', (size, size), (0, 0, 0, 0))
    
    offset_x = (size - w) // 2
    offset_y = (size - h) // 2
    
    new_img.paste(img, (offset_x, offset_y))
    
    # Resize to standard 512x512 for optimal app icon source
    final_img = new_img.resize((512, 512), Image.LANCZOS)
    
    final_img.save(dst_path, "PNG")
    print(f"Success: Created maximized {dst_path}")
    
except Exception as e:
    print(f"Error: {e}")
