import sys

def get_block(filepath, marker_string):
    with open(filepath, 'r') as f:
        content = f.read()
    
    start_pos = content.find(marker_string)
    if start_pos == -1:
        print(f"Error: {marker_string} not found in {filepath}")
        return ""
    
    # backtrack to the start of <div class="slide-container">
    container_start = content.rfind('<div class="slide-container', 0, start_pos)
    if container_start == -1:
        # fallback for traction 1
        container_start = content.rfind('<div class="slide', 0, start_pos)
        
    # We need to find the matching closing div for this slide-container.
    # An easy assumption is that slide-container is followed by another slide-container or script tag
    next_container = content.find('<!-- OPTION', start_pos)
    if next_container == -1:
        next_container = content.find('<script>', start_pos)
    if next_container == -1:
        next_container = content.find('</body>', start_pos)
    
    # Let's just find the last </div> before next_container
    end_pos = content.rfind('</div>', start_pos, next_container) + 6
    
    # Actually, a safer way to get the block is by regex or just matching div depth, 
    # but since these are well formatted, we can rely on finding the 2nd </div></div> sequence or just slicing.
    
    # Let's do it simply by lines
    lines = content.split('\n')
    start_line = 0
    for i, line in enumerate(lines):
        if marker_string in line:
            # step back to find <div class="slide-container"
            for j in range(i, -1, -1):
                if '<div class="slide-container' in lines[j] or '<div class="slide bg-' in lines[j] or 'Slide 6: Traction as Slide 1' in lines[j]:
                    start_line = j
                    break
            break
            
    # read until the line before the next "<!-- OPTION" or "<script>"
    end_line = start_line
    for i in range(start_line + 1, len(lines)):
        if '<!-- OPTION' in lines[i] or '<script>' in lines[i] or '</body>' in lines[i] or '<!-- SLIDE' in lines[i]:
            # step back over blank lines
            end_line = i - 1
            while not lines[end_line].strip():
                end_line -= 1
            break
            
    # Include the closing div if it looks like one
    if lines[end_line].strip() != '</div>':
        if lines[end_line-1].strip() == '</div>':
            end_line -=1
            
    # actually traction 1 ends at line 146
    
    return '\n'.join(lines[start_line:end_line+1])


def read_lines(filepath, start, end):
    with open(filepath, 'r') as f:
        lines = f.readlines()
    return ''.join(lines[start-1:end])

title = read_lines('Omnify-Title-Options.html', 178, 206)
problem = read_lines('Omnify-Problem-Options.html', 140, 180)
solution = read_lines('Omnify-Solution-Options.html', 72, 140)
moat = read_lines('Omnify-Moat-Options.html', 1517, 1598)
how_it_works = read_lines('Omnify-HowItWorks-Options.html', 71, 132)
whynow = read_lines('Omnify-WhyNow-Options.html', 74, 121)
market = read_lines('Omnify-Market-Options.html', 80, 141)
traction1 = read_lines('Omnify-Traction-Slide1.html', 93, 146)
traction2 = read_lines('Omnify-Traction-Slide2-Options.html', 214, 285)

# Clean up traction 1 to fit the standard standard container label
traction1 = traction1.replace('<div class="slide-container mx-auto">', '<div class="slide-container">')
traction1 = traction1.replace('<!-- Slide 6: Traction as Slide 1 -->', '<div class="title-label">Slide 8: Traction (Pre-Launch)</div>')

# Relabel everything
title = title.replace('Option 4: Subdued Zen', 'Slide 1: Title')
problem = problem.replace('Option 2: Typographic (No Box Outlines)', 'Slide 2: The Problem')
solution = solution.replace('Option 1: Horizontal 5-Column Grid', 'Slide 3: The Solution')
moat = moat.replace('Option 18: Exact Light Match (White Background)', 'Slide 4: The Moat (Single Brain)')
how_it_works = how_it_works.replace('Option 1: Exact Screenshot Match (Vertical Timeline)', 'Slide 5: How It Works')
whynow = whynow.replace('Option 1: Clean Indexed List (Refined Screenshot)', 'Slide 6: Why Now')
market = market.replace('Option 1: The Filtering Funnel', 'Slide 7: Market Size')
traction2 = traction2.replace('Option 2: The Big Numbers Focus', 'Slide 9: Established Traction')

head = """<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Omnify Final Pitch Deck</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Plus+Jakarta+Sans:wght@500;600;700;800;900&display=swap"
        rel="stylesheet">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/js/all.min.js"></script>
    <script src="https://unpkg.com/lucide@latest"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['Inter', 'sans-serif'],
                        heading: ['Plus Jakarta Sans', 'sans-serif'],
                    },
                    colors: {
                        omnify: {
                            accent: '#22C55E',
                            light: '#dcfce7',
                            dark: '#16a34a',
                            text: '#334155'
                        },
                        primary: {
                            50: '#f0fdf4',
                            100: '#dcfce7',
                            200: '#bbf7d0',
                            300: '#86efac',
                            400: '#4ade80',
                            500: '#22c55e',
                            600: '#16a34a',
                            700: '#15803d',
                            800: '#166534',
                            900: '#14532d',
                        }
                    }
                }
            }
        }
    </script>
    <style>
        body {
            background-color: #f3f4f6;
            padding: 40px;
        }

        .slide-container {
            margin-bottom: 60px;
        }

        .slide {
            width: 1280px;
            height: 720px;
            background-color: white;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.1);
            position: relative;
            overflow: hidden;
            border-radius: 8px;
            margin: 0 auto;
        }

        .title-label {
            text-align: center;
            font-size: 1.5rem;
            font-weight: bold;
            color: #4b5563;
            margin-bottom: 20px;
            font-family: 'Plus Jakarta Sans', sans-serif;
        }

        /* Specific patterns */
        .pattern-dots {
            background-image: radial-gradient(#e5e7eb 1px, transparent 1px);
            background-size: 24px 24px;
        }

        .text-gradient {
            background: linear-gradient(to right, #111827, #374151);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        .slide-inner {
            padding: 80px;
            height: 100%;
            display: flex;
            flex-direction: column;
            position: relative;
        }

        .badge {
            display: inline-flex;
            align-items: center;
            padding: 4px 12px;
            border-radius: 9999px;
            font-size: 14px;
            font-weight: 600;
            letter-spacing: 0.5px;
            text-transform: uppercase;
            background: #dcfce7;
            color: #16a34a;
        }

        .stat-card {
            transition: transform 0.3s ease;
        }

        .stat-card:hover {
            transform: translateY(-5px);
        }
    </style>
</head>
<body class="text-gray-900 antialiased">
"""

footer = """
    <script>
        lucide.createIcons();
    </script>
</body>
</html>
"""

final_html = head + title + '\n\n' + problem + '\n\n' + solution + '\n\n' + moat + '\n\n' + how_it_works + '\n\n' + whynow + '\n\n' + market + '\n\n' + traction1 + '\n\n' + traction2 + '\n\n' + footer

with open('Omnify-Final-Pitch-Deck.html', 'w') as f:
    f.write(final_html)

print("deck compiled successfully.")
