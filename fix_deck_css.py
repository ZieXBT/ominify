import re

with open('Omnify-Final-Pitch-Deck.html', 'r') as f:
    content = f.read()

# Make position absolute !important, left 0 !important, top 0 !important
new_slide_css = """        .slide {
            width: 1280px;
            height: 720px;
            background-color: white;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.15);
            position: absolute !important;
            left: 0 !important;
            top: 0 !important;
            opacity: 0;
            transition: opacity 0.4s ease, transform 0.4s ease;
            transform: scale(0.95);
            pointer-events: none;
            overflow: hidden;
            border-radius: 8px;
            margin: 0 !important;
        }"""
        
content = re.sub(r'\.slide\s*{[^}]*}', new_slide_css, content)

with open('Omnify-Final-Pitch-Deck.html', 'w') as f:
    f.write(content)

print("CSS specificity fixed")
