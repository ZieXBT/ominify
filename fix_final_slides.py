import sys

def read_lines(filepath, start, end):
    with open(filepath, 'r') as f:
        lines = f.readlines()
    return ''.join(lines[start-1:end])

# Founder: Option 1
founder = read_lines('Omnify-Founder-Options.html', 91, 134)
founder = founder.replace('Option 1: The Modern Split (Minimal Grid)', 'Slide 10: Founder & CEO')
founder = founder.replace('<!-- OPTION 1: The Modern Split -->', '')

# The Ask
the_ask_content = read_lines('Omnify-TheAsk-Slide.html', 86, 139)
the_ask = f"""
    <!-- SLIDE 11: THE ASK -->
    <div class="slide-container">
        <div class="title-label">Slide 11: The Ask / Fundraising</div>
{the_ask_content.replace('<!-- Slide 9: The Ask -->', '').replace('<div class="slide-container mx-auto">', '')}
    </div>
"""

# Ending: Option 1
ending = read_lines('Omnify-Ending-Options.html', 84, 121)
ending = ending.replace('Option 1: Omnify Primary (Light Background, Green Accents)', 'Slide 12: Ending')
ending = ending.replace('<!-- OPTION 1: Omnify Primary (Light Base) -->', '')

new_slides = f"\n\n{founder}\n{the_ask}\n{ending}\n"

with open('Omnify-Final-Pitch-Deck.html', 'r') as f:
    content = f.read()

# First, let's inject missing CSS:
if '.pattern-bg' not in content:
    css_to_add = """
        .pattern-bg {
            background-image: radial-gradient(circle at 2px 2px, rgba(0, 0, 0, 0.05) 1px, transparent 0);
            background-size: 32px 32px;
        }

        .confetti {
            position: absolute;
            border-radius: 9999px;
        }
"""
    content = content.replace('</style>', css_to_add + '\n    </style>')

# Find out where we pasted the corrupted slides. We did:
# insert_pos = content.rfind('    <script>\n        lucide.createIcons();')

# So let's find the start of corrupted slide 10:
# founder was incorrectly grabbed using lines 91-137... wait, earlier it was lines 91-137.
# wait, earlier my script: new_slides = f"\n\n{founder}\n{the_ask_formatted}\n{ending}\n"
# Looking for 'Slide 10: Founder & CEO' which I injected:
corrupted_start = content.find('<!-- SLIDE 11: THE ASK -->')
if corrupted_start == -1:
    corrupted_start = content.find('Slide 10: Founder & CEO') - 40

if corrupted_start != -1:
    # Just to be safe, find the exact start of Slide 10: Founder
    actual_start = content.rfind('<div class="title-label">Slide 10: Founder & CEO</div>', 0, corrupted_start + 100)
    if actual_start != -1:
        start_cut = content.rfind('\n', 0, actual_start)
    else:
        start_cut = corrupted_start
        
    end_cut = content.rfind('    <script>\n        lucide.createIcons();')

    # cut out the corrupted slides
    content = content[:start_cut] + new_slides + content[end_cut:]
else:
    print('Could not gracefully find the corrupted slides')
    sys.exit(1)

with open('Omnify-Final-Pitch-Deck.html', 'w') as f:
    f.write(content)

print('Successfully completely replaced final slides with proper body code.')
