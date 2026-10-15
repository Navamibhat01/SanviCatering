import os
import urllib.request
import urllib.error

# Real, authentic food and catering photography URLs (Wikimedia Commons & Unsplash Real Photography)
# None of these are AI generated. They are genuine camera shots by real photographers.
images = {
    "breakfast-spread.jpg": [
        # Real crispy masala dosa with chutneys and sambar
        "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=1600&auto=format&fit=crop&q=85",
        "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=1600&auto=format&fit=crop&q=85",
    ],
    "traditional-leaf-meal.jpg": [
        # Real authentic Onam Sadhya / South Indian banana leaf meal photo at Kochi
        "https://upload.wikimedia.org/wikipedia/commons/2/2f/Onam_sadhya_at_Kochi.jpg",
        "https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?w=1600&auto=format&fit=crop&q=85",
    ],
    "hero-feast.jpg": [
        # Real grand Indian royal vegetarian banquet thali / feast spread
        "https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?w=1600&auto=format&fit=crop&q=85",
        "https://upload.wikimedia.org/wikipedia/commons/2/2f/Onam_sadhya_at_Kochi.jpg",
    ],
    "wedding-buffet.jpg": [
        # Real wedding banquet buffet line with warm lighting and chafing dishes
        "https://images.unsplash.com/photo-1555244162-803834f70033?w=1600&auto=format&fit=crop&q=85",
        "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1600&auto=format&fit=crop&q=85",
    ],
    "north-indian-spread.jpg": [
        # Real paneer dish with rich gravy, cilantro garnish and Indian bread
        "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=1600&auto=format&fit=crop&q=85",
        "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=1600&auto=format&fit=crop&q=85",
    ],
    "live-starters.jpg": [
        # Real grilled paneer tikka skewers with charred edges & mint chutney / samosas
        "https://upload.wikimedia.org/wikipedia/commons/f/f2/Paneer_tikka.jpg",
        "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=1600&auto=format&fit=crop&q=85",
        "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=1600&auto=format&fit=crop&q=85",
    ],
    "traditional-sweets.jpg": [
        # Real golden Gulab Jamun in syrup with pistachios
        "https://upload.wikimedia.org/wikipedia/commons/5/56/Gulab_Jamun.jpg",
        "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=1600&auto=format&fit=crop&q=85",
    ],
    "puja-catering.jpg": [
        # Real festive traditional pure vegetarian feast / satvik dining
        "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=1600&auto=format&fit=crop&q=85",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Onam_sadhya_at_Kochi.jpg/1280px-Onam_sadhya_at_Kochi.jpg",
    ],
    "corporate-lunch.jpg": [
        # Real corporate / conference buffet catering setup
        "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1600&auto=format&fit=crop&q=85",
        "https://images.unsplash.com/photo-1555244162-803834f70033?w=1600&auto=format&fit=crop&q=85",
    ],
    "beverages.jpg": [
        # Real authentic Indian welcome coolers / beverages
        "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=1600&auto=format&fit=crop&q=85",
        "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=1600&auto=format&fit=crop&q=85",
    ],
}

output_dir = os.path.join(os.path.dirname(__file__), "..", "public", "images")
os.makedirs(output_dir, exist_ok=True)

headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
}

for filename, urls in images.items():
    dest_path = os.path.join(output_dir, filename)
    downloaded = False
    for url in urls:
        print(f"Trying {url} for {filename}...")
        try:
            req = urllib.request.Request(url, headers=headers)
            with urllib.request.urlopen(req, timeout=15) as response:
                content = response.read()
                if len(content) > 10000:  # Valid image size
                    with open(dest_path, "wb") as f:
                        f.write(content)
                    print(f"  [SUCCESS] {filename}: {len(content)} bytes downloaded from {url[:60]}...")
                    downloaded = True
                    break
                else:
                    print(f"  [SKIPPED] Response too small: {len(content)} bytes")
        except Exception as e:
            print(f"  [FAILED] {url[:60]}: {e}")
    if not downloaded:
        print(f"  [ERROR] Could not download any source for {filename}")

print("\nDone downloading real photographs.")
