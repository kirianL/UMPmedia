
import os
import struct

def get_dims(fname):
    try:
        with open(fname, 'rb') as fobj:
            head = fobj.read(24)
            if len(head) < 24: return
            if b'PNG' in head:
                w, h = struct.unpack('>II', head[16:24])
                return w, h
            elif b'\xff\xd8' in head:
                # Simple JPEG parsing (might fail for complex headers)
                return "JPEG"
    except:
        return None
    return None

d = r"C:\Users\Kirian\.gemini\antigravity\brain\ae79f0d7-e4d9-4558-b57e-0e5cf3d87f16"
for f in os.listdir(d):
    if f.endswith('.png'):
        dims = get_dims(os.path.join(d, f))
        print(f"{f}: {dims}")
