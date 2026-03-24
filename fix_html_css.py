import re

with open('Omnify-Final-Pitch-Deck.html', 'r') as f:
    text = f.read()

text = text.replace("""        html {
            -webkit-text-size-adjust: 100%;
            text-size-adjust: 100%;
        }""", """        html, body {
            -webkit-text-size-adjust: none !important;
            text-size-adjust: none !important;
            width: 100%;
            height: 100%;
        }""")

with open('Omnify-Final-Pitch-Deck.html', 'w') as f:
    f.write(text)

