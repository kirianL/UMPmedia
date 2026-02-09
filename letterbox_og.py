
from PIL import Image

src_path = "public/assets/OpenGraph/OG.png"
dst_path = "public/og.png"

try:
    img = Image.open(src_path)
    target_w, target_h = 1200, 630
    
    # Calculate resize dimensions to fit within target
    ratio = min(target_w / img.width, target_h / img.height)
    new_w = int(img.width * ratio)
    new_h = int(img.height * ratio)
    
    img = img.resize((new_w, new_h), Image.LANCZOS)
    
    # Create black canvas
    canvas = Image.new('RGB', (target_w, target_h), (0, 0, 0)) # Black background
    
    # Center paste
    x_offset = (target_w - new_w) // 2
    y_offset = (target_h - new_h) // 2
    
    canvas.paste(img, (x_offset, y_offset))
    canvas.save(dst_path, "PNG")
    print(f"Success: Saved letterboxed image to {dst_path}")
    
except Exception as e:
    print(f"Error: {e}")
