import sys

with open('Omnify-Final-Pitch-Deck.html', 'r') as f:
    content = f.read()

pos = content.find('TN Homebuyers</span>')
if pos == -1:
    print("Could not find end of slide 9")
    sys.exit(1)

# we need to find the fourth </div> after TN Homebuyers
end_pos = pos
for _ in range(4):
    end_pos = content.find('</div>', end_pos) + 6

# end_pos is the end of Slide 9
cut_pos = end_pos

# read raw slides cleanly
def read_lines(filepath, start, end):
    with open(filepath, 'r') as f:
        lines = f.readlines()
    return ''.join(lines[start-1:end])

# Founder: Option 1
founder = read_lines('Omnify-Founder-Options.html', 91, 134)
founder = founder.replace('Option 1: The Modern Split (Minimal Grid)', 'Slide 10: Founder & CEO')
founder = founder.replace('<!-- OPTION 1: The Modern Split -->', '')

# The Ask
the_ask = read_lines('Omnify-TheAsk-Slide.html', 85, 139)
the_ask = the_ask.replace('<div class="slide-container mx-auto">', '<div class="slide-container">')
the_ask = the_ask.replace('<!-- Slide 9: The Ask -->', '<div class="title-label">Slide 11: The Ask / Fundraising</div>')


# Ending: Option 1
ending = read_lines('Omnify-Ending-Options.html', 84, 121)
ending = ending.replace('Option 1: Omnify Primary (Light Background, Green Accents)', 'Slide 12: Ending')
ending = ending.replace('<!-- OPTION 1: Omnify Primary (Light Base) -->', '')


new_content = content[:cut_pos] + '\n\n' + founder + '\n' + the_ask + '\n' + ending + """

    <script>
        lucide.createIcons();
    </script>
</body>
</html>
"""

with open('Omnify-Final-Pitch-Deck.html', 'w') as f:
    f.write(new_content)

print("Perfectly rewrote tail of file")
