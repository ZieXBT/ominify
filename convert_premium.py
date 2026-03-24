import re

with open('Omnify-Final-Pitch-Deck.html', 'r') as f:
    content = f.read()

# 1. Add Premium CSS
premium_css = """
        body {
            background-color: #f3f4f6;
            margin: 0;
            padding: 0;
            overflow: hidden; /* Prevent scrolling for premium deck */
        }

        .deck-container {
            width: 100vw;
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        /* Override old slide container styles */
        .slide-container {
            margin-bottom: 0 !important;
            display: contents; /* Strip it out layout-wise */
        }

        .title-label {
            display: none !important; /* Hide titles in premium mode */
        }

        .slide {
            width: 1280px;
            height: 720px;
            background-color: white;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.15);
            position: absolute;
            opacity: 0;
            transition: opacity 0.4s ease, transform 0.4s ease;
            transform: scale(0.95);
            pointer-events: none;
            overflow: hidden;
            border-radius: 8px;
            margin: 0 !important;
        }

        .slide.active {
            opacity: 1;
            transform: scale(1);
            pointer-events: auto;
            z-index: 10;
        }
"""
content = re.sub(r'body\s*{[^}]*}', '', content) # Remove old body css
content = re.sub(r'\.slide-container\s*{[^}]*}', '', content) # Remove old slide-container css
content = re.sub(r'\.slide\s*{[^}]*}', '', content) # Remove old slide css
content = re.sub(r'\.title-label\s*{[^}]*}', '', content) # Remove old title-label css

content = content.replace('</style>', premium_css + '\n    </style>')

# 2. Wrap body content in deck-container
content = content.replace('<body class="text-gray-900 antialiased">', '<body class="text-gray-900 antialiased">\n    <div class="deck-container" id="deck">')

# 3. Add 'active' class to the very first slide
# First occurrence of 'class="slide '
content = content.replace('class="slide ', 'class="slide active ', 1)
# Note: Since some slides might have 'class="slide pattern-bg"' or similar
if 'class="slide"' in content and content.find('class="slide"') < content.find('class="slide active'):
    content = content.replace('class="slide"', 'class="slide active"', 1)


# 4. Inject JS and Navigation
premium_js = """
    </div> <!-- End deck-container -->

    <!-- Navigation Controls -->
    <div class="fixed bottom-8 right-8 z-50 flex space-x-2">
        <button onclick="prevSlide()"
            class="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center border border-gray-200 text-gray-600 hover:text-[#22c55e] hover:border-[#bbf7d0] transition-colors">
            <i data-lucide="chevron-left" class="w-6 h-6"></i>
        </button>
        <button onclick="nextSlide()"
            class="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center border border-gray-200 text-gray-600 hover:text-[#22c55e] hover:border-[#bbf7d0] transition-colors">
            <i data-lucide="chevron-right" class="w-6 h-6"></i>
        </button>
    </div>
    <!-- Progress indicator -->
    <div class="fixed bottom-10 left-10 z-[100] text-gray-400 font-medium text-sm tracking-widest uppercase bg-white/80 backdrop-blur px-4 py-2 rounded-full shadow-sm border border-gray-100">
        <span id="current">1</span> / <span id="total">12</span>
    </div>

    <script>
        // Slide logic
        const slides = document.querySelectorAll('.slide');
        let currentSlide = 0;

        document.getElementById('total').innerText = slides.length;

        function updateSlides() {
            slides.forEach((slide, index) => {
                if (index === currentSlide) {
                    slide.classList.add('active');
                } else {
                    slide.classList.remove('active');
                }
            });
            document.getElementById('current').innerText = currentSlide + 1;
        }

        function nextSlide() {
            if (currentSlide < slides.length - 1) {
                currentSlide++;
                updateSlides();
            }
        }

        function prevSlide() {
            if (currentSlide > 0) {
                currentSlide--;
                updateSlides();
            }
        }

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowRight' || e.key === 'Space') {
                nextSlide();
            } else if (e.key === 'ArrowLeft') {
                prevSlide();
            }
        });
    </script>
"""

content = content.replace('    <script>\n        lucide.createIcons();', premium_js + '\n    <script>\n        lucide.createIcons();')

with open('Omnify-Final-Pitch-Deck.html', 'w') as f:
    f.write(content)

print("Premium format applied successfully")
