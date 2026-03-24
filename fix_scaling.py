import re

with open('Omnify-Final-Pitch-Deck.html', 'r') as f:
    content = f.read()

# 1. Update the deck-container HTML to include a wrapper
wrapper_html = """<div class="deck-container" id="deck">
        <div id="slide-wrapper" style="width: 1280px; height: 720px; position: relative;">"""
content = content.replace('<div class="deck-container" id="deck">', wrapper_html)

# Add closing div for wrapper
js_inject = """
        </div>
    </div> <!-- End deck-container -->
"""
content = content.replace('    </div> <!-- End deck-container -->', js_inject)

# 2. Add left/top to .slide to ensure it anchors to the wrapper consistently
# Let's replace the old .slide block
new_slide_css = """        .slide {
            width: 1280px;
            height: 720px;
            background-color: white;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.15);
            position: absolute;
            left: 0;
            top: 0;
            opacity: 0;
            transition: opacity 0.4s ease, transform 0.4s ease;
            transform: scale(0.95);
            pointer-events: none;
            overflow: hidden;
            border-radius: 8px;
            margin: 0 !important;
        }"""
        
content = re.sub(r'\.slide\s*{[^}]*}', new_slide_css, content)

# 3. Add the scale script
scale_script = """
        function resizeDeck() {
            const wrapper = document.getElementById('slide-wrapper');
            // Add a small 95% buffer so it doesn't touch the exact edges of the screen
            const scale = Math.min(window.innerWidth / 1280, window.innerHeight / 720) * 0.95;
            wrapper.style.transform = `scale(${scale})`;
        }
        window.addEventListener('resize', resizeDeck);
        resizeDeck();
"""
content = content.replace('// Slide logic', scale_script + '\n        // Slide logic')

with open('Omnify-Final-Pitch-Deck.html', 'w') as f:
    f.write(content)

print("Scaling fix applied successfully")
