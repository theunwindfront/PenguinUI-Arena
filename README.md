# PenguinUI Arena 🐧

A browser-based learning game for mastering **TailwindCSS** and **AlpineJS** by fixing broken UI components.

## 🎯 What Is This?

PenguinUI Arena is a **fully playable online learning game** where you master frontend development by solving real-world component challenges. Each challenge includes:

- **Built-in code editor** - Edit HTML directly in your browser
- **Live preview** - See changes instantly
- **Immediate validation** - Get feedback on your solution
- **No setup required** - Just click and start learning

**No tutorials. No videos. No DevTools. Just type, preview, and learn.**

## 🚀 How to Play

### 🌐 Play Online (Recommended)
1. Visit the live game: **[https://theunwindfront.github.io/PenguinUI-Arena/](https://theunwindfront.github.io/PenguinUI-Arena/)**
2. Click on any unlocked challenge
3. Edit the code in the built-in editor
4. Click "Update Preview" to see your changes
5. Click "Check Solution" to validate
6. Complete challenges to unlock more!

### 💻 Run Locally
1. Clone this repository
2. Open `index.html` in your browser
3. Start solving challenges!

### 🚀 Deploy Your Own
1. Fork this repository
2. Go to Settings → Pages
3. Set source to main branch
4. Share your link with students!

**Zero dependencies. Zero build tools. Zero configuration. 100% browser-based.**

## 🎮 How Progression Works

### Zone System
The game is organized into 4 zones, each focusing on different skills:

1. **Zone 1: Static Components** - Master basic Tailwind styling
2. **Zone 2: Interactive Components** - Add Alpine interactivity
3. **Zone 3: Overlays** - Master modals and notifications
4. **Zone 4: Advanced** - Complex interactive patterns

### Unlocking System
- **Zones unlock sequentially** - Complete all challenges in a zone to unlock the next
- **Challenges unlock sequentially** - Complete a challenge to unlock the next in the same zone
- **Progress is saved** - Your progress persists in localStorage

### Challenge Structure
Each challenge includes:
- **Clear goal** (1-2 lines max)
- **Built-in code editor** - Edit HTML/Alpine code directly
- **Live preview** - See your changes in real-time
- **Validation** that checks your solution
- **Immediate feedback** (✅ or ❌)

### How the Code Editor Works
1. **Edit** - Type your code in the dark-themed editor on the left
2. **Preview** - Click "Update Preview" to see changes on the right
3. **Validate** - Click "Check Solution" to test your code
4. **Learn** - Get specific feedback on what's missing
5. **Progress** - Complete the challenge to unlock the next one

**No need to open DevTools or edit files locally!**

## 📚 Challenge List

### Zone 1: Static Components (Tailwind Focus)
| Challenge | Goal | Skills |
|-----------|------|--------|
| Button | Style a primary button | Padding, colors, hover effects |
| Card | Build a card component | Shadow, rounded corners, spacing |
| Alert | Create a success alert | Flexbox, color theming, borders |

### Zone 2: Interactive Components (Alpine Focus)
| Challenge | Goal | Skills |
|-----------|------|--------|
| Dropdown | Toggle dropdown menu | x-show, @click, state |
| Accordion | Expand/collapse items | Independent state, transitions |
| Tabs | Switch between panels | State management, conditional classes |

### Zone 3: Overlays
| Challenge | Goal | Skills |
|-----------|------|--------|
| Modal | Show/hide modal dialog | Portal pattern, backdrop, focus |
| Toast | Auto-dismiss notification | setTimeout, animations |

### Zone 4: Advanced
| Challenge | Goal | Skills |
|-----------|------|--------|
| Carousel | Navigate between slides | Computed properties, navigation |
| Combobox | Filter and select items | x-model, x-for, filtering |

## 🛠️ How to Add New Challenges

### Step 1: Create Challenge File

Create a new HTML file in the appropriate zone directory:

```
zones/zone-0X-name/challenge-name.html
```

### Step 2: Use This Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Challenge Name</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- Add Alpine if needed -->
    <script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>
    <style>
        [x-cloak] { display: none !important; }
    </style>
</head>
<body class="bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen p-8">
    
    <div class="max-w-4xl mx-auto">
        
        <!-- Goal -->
        <div class="bg-blue-600 text-white p-6 rounded-xl mb-8 shadow-lg">
            <h2 class="text-2xl font-bold mb-2">🎯 Goal</h2>
            <p class="text-lg">Your challenge goal (max 2 lines)</p>
        </div>

        <!-- Challenge Area -->
        <div class="bg-white rounded-xl p-12 shadow-2xl">
            <!-- Your broken component here -->
            <div id="target">
                <!-- Missing classes or Alpine directives -->
            </div>
        </div>

        <!-- Hint -->
        <div class="mt-6 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
            <p class="text-yellow-800">
                <strong>Hint:</strong> Specific guidance here
            </p>
        </div>

        <!-- Validation -->
        <div class="mt-6 flex gap-4">
            <button 
                onclick="checkSolution()"
                class="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold rounded-xl shadow-lg transition-all transform hover:scale-105"
            >
                Check Solution
            </button>
        </div>

        <!-- Feedback -->
        <div id="feedback" class="mt-6 hidden p-6 rounded-xl font-semibold text-lg"></div>

    </div>

    <script>
        function checkSolution() {
            const target = document.getElementById('target');
            
            // Your validation logic
            const isCorrect = target.classList.contains('expected-class');
            
            if (isCorrect) {
                ArenaValidation.showSuccess(
                    'Success message!',
                    'zone-id',
                    'challenge-id'
                );
            } else {
                ArenaValidation.showFailure('Specific hint about what\'s wrong');
            }
        }
    </script>
    <script src="../../engine.js"></script>

</body>
</html>
```

### Step 3: Register in engine.js

Add your challenge to the appropriate zone in `engine.js`:

```javascript
{
    id: 'challenge-id',
    name: 'Challenge Name',
    goal: 'Brief description',
    tags: ['Tag1', 'Tag2'],
    file: 'zones/zone-0X-name/challenge-name.html',
    completed: false,
    locked: true // or false for first challenge
}
```

### Validation Best Practices

✅ **DO:**
- Use `ArenaValidation.hasClasses()` helper
- Check Alpine attributes with `hasAttribute()`
- Verify Alpine state with `Alpine.$data(element)`
- Provide specific feedback about what's missing
- Test both success and failure cases

❌ **DON'T:**
- Parse HTML strings
- Use external libraries
- Make validation ambiguous
- Skip the hint section

### Example Validation

```javascript
function checkSolution() {
    const element = document.getElementById('target');
    
    const checks = {
        flex: element.classList.contains('flex'),
        padding: element.classList.contains('p-4'),
        rounded: element.classList.contains('rounded-lg')
    };
    
    const allPassed = Object.values(checks).every(v => v);
    
    if (allPassed) {
        ArenaValidation.showSuccess(
            'Perfect! Component is complete!',
            'zone-01',
            'my-challenge'
        );
    } else {
        const missing = [];
        if (!checks.flex) missing.push('flex');
        if (!checks.padding) missing.push('p-4');
        if (!checks.rounded) missing.push('rounded-lg');
        
        ArenaValidation.showFailure('Missing: ' + missing.join(', '));
    }
}
```

## 🎨 Tech Stack

- **HTML5** - Structure
- **TailwindCSS (CDN)** - Utility-first styling
- **AlpineJS (CDN)** - Reactive behavior
- **LocalStorage** - Progress persistence

**No build tools. No npm. No webpack.**

## 📁 File Structure

```
PenguinUI-Arena/
├── index.html                      # Main game interface
├── engine.js                       # Game state & validation helpers
├── README.md                       # This file
└── zones/
    ├── zone-01-static/
    │   ├── button.html
    │   ├── card.html
    │   └── alert.html
    ├── zone-02-interactive/
    │   ├── dropdown.html
    │   ├── accordion.html
    │   └── tabs.html
    ├── zone-03-overlays/
    │   ├── modal.html
    │   └── toast.html
    └── zone-04-advanced/
        ├── carousel.html
        └── combobox.html
```

## 🧠 Learning Philosophy

This game teaches through **active problem-solving**:

1. **See** - Visual feedback shows what's broken
2. **Read** - Clear goal explains what to fix
3. **Fix** - Edit HTML using DevTools or code editor
4. **Validate** - Get immediate, specific feedback
5. **Progress** - Unlock next challenge when correct

**No passive watching. No copy-pasting. Just learning by doing.**

## 🎯 Why This Approach Works

Traditional tutorials have a problem: **passive consumption doesn't create retention**.

This arena forces you to:
- **Think** about what utilities and directives do
- **Experiment** with different solutions
- **Understand** through immediate feedback
- **Remember** through hands-on practice

## 🔧 Validation Helpers

The `ArenaValidation` object in `engine.js` provides helpers:

```javascript
// Check if element has all required classes
ArenaValidation.hasClasses(element, ['flex', 'items-center'])

// Check if element has any of the classes
ArenaValidation.hasAnyClass(element, ['bg-blue-600', 'bg-blue-700'])

// Check if element has attribute
ArenaValidation.hasAttribute(element, 'x-data')

// Show success feedback and complete challenge
ArenaValidation.showSuccess(message, zoneId, challengeId)

// Show failure feedback
ArenaValidation.showFailure(message)
```

## 🤝 Contributing

Want to add more challenges? Follow the "How to Add New Challenges" guide above!

**Challenge Ideas:**
- Grid layouts
- Responsive design
- Forms with validation
- Drag and drop
- Infinite scroll
- Dark mode toggle

## 📄 License

MIT - Use this to learn, teach, and share!

---

**Built for developers who want to master, not memorize. 🐧**
