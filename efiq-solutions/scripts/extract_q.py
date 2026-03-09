from PIL import Image
import os
import sys

src_path = r"C:\Users\harsh\.gemini\antigravity\brain\0ea3ff91-0aef-465d-98b1-5732b251161f\media__1773063463714.png"
dest_path = r"c:\Users\harsh\Desktop\EFIQ-Solutions\efiq-solutions\public\assets\q-element.png"

try:
    if not os.path.exists(src_path):
        print(f"Error: Could not find image at {src_path}")
        sys.exit(1)
        
    img = Image.open(src_path)
    img = img.convert("RGBA")
    
    data = img.getdata()
    new_data = []
    
    # We will identify the background pixel precisely (top left corner)
    bg_pixel = data[0]
    
    for item in data:
        # If pixel is dark (r<50, g<50, b<50), make it transparent
        if item[0] < 50 and item[1] < 50 and item[2] < 50:
            new_data.append((255, 255, 255, 0)) # fully transparent
        else:
            # Maybe enhance quality slightly by ensuring it's fully opaque if it's not dark
            new_data.append((item[0], item[1], item[2], 255))
            
    img.putdata(new_data)
    
    # Give it a nice clean crop to its bounding box
    bbox = img.getbbox()
    if bbox:
        img = img.crop(bbox)
        
    # In order for it to align perfectly during animation, we actually want it padded
    # But since the animation scale transform originates from the center and we matched
    # the logo, let's keep it tightly cropped or centered. 
    # Actually, the user's logo.png might be any size, and aligning the zooming Q 
    # perfectly on top of the original Q requires exact canvas matching, OR 
    # precise CSS positioning.
    
    # For now, let's just save the transparent Q!
    img.save(dest_path, "PNG")
    print(f"Success: Transparent Q saved to {dest_path}")
    
except Exception as e:
    print(f"Exception occurred: {e}")
