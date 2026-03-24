import re

with open('Omnify-Final-Pitch-Deck.html', 'r') as f:
    content = f.read()

# Make sure #slide-wrapper is definitely flex-shrink: 0 and transform-origin: center center
new_wrapper_div = '<div id="slide-wrapper" style="width: 1280px; height: 720px; min-width: 1280px; min-height: 720px; flex-shrink: 0; position: relative; transform-origin: center center;">'
# The old one might have been '<div id="slide-wrapper" style="width: 1280px; height: 720px; position: relative;">'

content = re.sub(r'<div id="slide-wrapper"[^>]*>', new_wrapper_div, content)

with open('Omnify-Final-Pitch-Deck.html', 'w') as f:
    f.write(content)

print("Wrapper flex-shrink applied")
