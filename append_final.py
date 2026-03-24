import sys

def read_lines(filepath, start, end):
    with open(filepath, 'r') as f:
        lines = f.readlines()
    return ''.join(lines[start-1:end])

# Founder: Option 1
founder = read_lines('Omnify-Founder-Options.html', 91, 137)
founder = founder.replace('Option 1: The Modern Split (Minimal Grid)', 'Slide 10: Founder & CEO')
founder = founder.replace('<!-- OPTION 1: The Modern Split -->', '')

# The Ask
the_ask = read_lines('Omnify-TheAsk-Slide.html', 69, 101)

the_ask_formatted = f"""
    <!-- SLIDE 11: THE ASK -->
    <div class="slide-container">
        <div class="title-label">Slide 11: The Ask / Fundraising</div>
{the_ask}
    </div>
"""

# Ending: Option 1
ending = read_lines('Omnify-Ending-Options.html', 84, 114)
ending = ending.replace('Option 1: Omnify Primary (Light Background, Green Accents)', 'Slide 12: Ending')
ending = ending.replace('<!-- OPTION 1: Omnify Primary (Light Base) -->', '')

new_slides = f"\n\n{founder}\n{the_ask_formatted}\n{ending}\n"

with open('Omnify-Final-Pitch-Deck.html', 'r') as f:
    content = f.read()

insert_pos = content.rfind('    <script>\n        lucide.createIcons();')

new_content = content[:insert_pos] + new_slides + content[insert_pos:]

with open('Omnify-Final-Pitch-Deck.html', 'w') as f:
    f.write(new_content)

print('Successfully appended final slides (10, 11, 12).')
