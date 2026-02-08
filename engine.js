// PenguinUI Arena - Game Engine
// Global game state and validation helpers

function arena() {
    return {
        currentChallenge: null,

        zones: [
            {
                id: 'zone-01',
                name: 'Zone 1: Static Components',
                description: 'Master basic Tailwind styling',
                icon: '🎯',
                unlocked: true,
                completed: 0,
                total: 3,
                challenges: [
                    {
                        id: 'button',
                        name: 'Button',
                        goal: 'Style a primary button with proper padding and colors',
                        tags: ['Tailwind', 'Colors', 'Spacing'],
                        file: 'zones/zone-01-static/button.html',
                        completed: false,
                        locked: false
                    },
                    {
                        id: 'card',
                        name: 'Card',
                        goal: 'Build a card with shadow and rounded corners',
                        tags: ['Tailwind', 'Layout', 'Shadow'],
                        file: 'zones/zone-01-static/card.html',
                        completed: false,
                        locked: true
                    },
                    {
                        id: 'alert',
                        name: 'Alert',
                        goal: 'Create a success alert with icon and colors',
                        tags: ['Tailwind', 'Colors', 'Flexbox'],
                        file: 'zones/zone-01-static/alert.html',
                        completed: false,
                        locked: true
                    }
                ]
            },
            {
                id: 'zone-02',
                name: 'Zone 2: Interactive Components',
                description: 'Add Alpine interactivity',
                icon: '⚡',
                unlocked: false,
                completed: 0,
                total: 3,
                challenges: [
                    {
                        id: 'dropdown',
                        name: 'Dropdown',
                        goal: 'Toggle dropdown visibility with Alpine',
                        tags: ['Alpine', 'x-show', 'Events'],
                        file: 'zones/zone-02-interactive/dropdown.html',
                        completed: false,
                        locked: false
                    },
                    {
                        id: 'accordion',
                        name: 'Accordion',
                        goal: 'Expand/collapse accordion items',
                        tags: ['Alpine', 'State', 'Transitions'],
                        file: 'zones/zone-02-interactive/accordion.html',
                        completed: false,
                        locked: true
                    },
                    {
                        id: 'tabs',
                        name: 'Tabs',
                        goal: 'Switch between tab panels',
                        tags: ['Alpine', 'State', 'Conditional'],
                        file: 'zones/zone-02-interactive/tabs.html',
                        completed: false,
                        locked: true
                    }
                ]
            },
            {
                id: 'zone-03',
                name: 'Zone 3: Overlays',
                description: 'Master modals and notifications',
                icon: '🎭',
                unlocked: false,
                completed: 0,
                total: 2,
                challenges: [
                    {
                        id: 'modal',
                        name: 'Modal',
                        goal: 'Show/hide modal with backdrop',
                        tags: ['Alpine', 'Portal', 'Focus'],
                        file: 'zones/zone-03-overlays/modal.html',
                        completed: false,
                        locked: false
                    },
                    {
                        id: 'toast',
                        name: 'Toast',
                        goal: 'Auto-dismiss notification toast',
                        tags: ['Alpine', 'Timeout', 'Animation'],
                        file: 'zones/zone-03-overlays/toast.html',
                        completed: false,
                        locked: true
                    }
                ]
            },
            {
                id: 'zone-04',
                name: 'Zone 4: Advanced',
                description: 'Complex interactive patterns',
                icon: '🚀',
                unlocked: false,
                completed: 0,
                total: 2,
                challenges: [
                    {
                        id: 'carousel',
                        name: 'Carousel',
                        goal: 'Navigate between slides with prev/next',
                        tags: ['Alpine', 'State', 'Computed'],
                        file: 'zones/zone-04-advanced/carousel.html',
                        completed: false,
                        locked: false
                    },
                    {
                        id: 'combobox',
                        name: 'Combobox',
                        goal: 'Filter and select from dropdown list',
                        tags: ['Alpine', 'x-model', 'Filter'],
                        file: 'zones/zone-04-advanced/combobox.html',
                        completed: false,
                        locked: true
                    }
                ]
            },
            {
                id: 'zone-05',
                name: 'Zone 5: Master Architect',
                description: 'Responsive layouts and advanced styling',
                icon: '🏛️',
                unlocked: false,
                completed: 0,
                total: 3,
                challenges: [
                    {
                        id: 'responsive-grid',
                        name: 'Responsive Grid',
                        goal: 'Fix a grid that changes layout per screen size',
                        tags: ['Tailwind', 'Grid', 'Responsive'],
                        file: 'zones/zone-05-master/responsive-grid.html',
                        completed: false,
                        locked: false
                    },
                    {
                        id: 'dark-mode',
                        name: 'Dark Mode Card',
                        goal: 'Add dark mode variants to a component',
                        tags: ['Tailwind', 'Dark Mode', 'Design'],
                        file: 'zones/zone-05-master/dark-mode.html',
                        completed: false,
                        locked: true
                    },
                    {
                        id: 'alpine-store',
                        name: 'Alpine Global Store',
                        goal: 'Sync state between components using Alpine.store',
                        tags: ['Alpine', 'Store', 'Global State'],
                        file: 'zones/zone-05-master/alpine-store.html',
                        completed: false,
                        locked: true
                    }
                ]
            },
            {
                id: 'zone-06',
                name: 'Zone 6: Infinite Lab',
                description: 'Endless challenges for true mastery',
                icon: '♾️',
                unlocked: false,
                completed: 0,
                total: 10,
                visibleLimit: 3,
                challenges: Array.from({ length: 10 }, (_, i) => ({
                    id: `lab-${i + 1}`,
                    name: `Lab Challenge #${i + 1}`,
                    goal: `Fix component #${i + 1} with various techniques`,
                    tags: ['Practice', 'Refactor'],
                    file: `zones/zone-06-infinite/lab-${i + 1}.html`,
                    completed: false,
                    locked: i === 0 ? false : true
                }))
            }
        ],

        loadMore(zone) {
            zone.visibleLimit += 3;
        },

        get totalChallenges() {
            return this.zones.reduce((sum, zone) => sum + zone.total, 0);
        },

        get completedChallenges() {
            return this.zones.reduce((sum, zone) => sum + zone.completed, 0);
        },

        get progressPercentage() {
            return Math.round((this.completedChallenges / this.totalChallenges) * 100);
        },

        init() {
            this.loadProgress();
            this.updateZoneProgress();

            // Listen for challenge completion from iframes
            window.addEventListener('message', (event) => {
                if (event.data.type === 'challengeComplete') {
                    this.completeChallenge(event.data.zoneId, event.data.challengeId);
                }
            });
        },

        resetProgress() {
            if (confirm('Are you sure you want to reset all progress? This cannot be undone.')) {
                localStorage.removeItem('penguinArenaProgress');
                window.location.reload();
            }
        },

        openChallenge(challenge) {
            if (challenge.locked) return;
            this.currentChallenge = challenge;
        },

        closeChallenge() {
            this.currentChallenge = null;
        },

        completeChallenge(zoneId, challengeId) {
            const zone = this.zones.find(z => z.id === zoneId);
            if (!zone) return;

            const challenge = zone.challenges.find(c => c.id === challengeId);
            if (!challenge || challenge.completed) return;

            // Mark challenge as completed
            challenge.completed = true;
            zone.completed++;

            // Unlock next challenge in same zone
            const currentIndex = zone.challenges.indexOf(challenge);
            if (currentIndex + 1 < zone.challenges.length) {
                zone.challenges[currentIndex + 1].locked = false;
            }

            // If zone is complete, unlock next zone
            if (zone.completed === zone.total) {
                const zoneIndex = this.zones.indexOf(zone);
                if (zoneIndex + 1 < this.zones.length) {
                    this.zones[zoneIndex + 1].unlocked = true;
                }
            }

            this.saveProgress();

            // Close modal after delay
            setTimeout(() => {
                this.closeChallenge();
            }, 2000);
        },

        updateZoneProgress() {
            this.zones.forEach(zone => {
                zone.completed = zone.challenges.filter(c => c.completed).length;
            });
        },

        saveProgress() {
            const progress = {
                zones: this.zones.map(zone => ({
                    id: zone.id,
                    unlocked: zone.unlocked,
                    challenges: zone.challenges.map(c => ({
                        id: c.id,
                        completed: c.completed,
                        locked: c.locked
                    }))
                }))
            };
            localStorage.setItem('penguinArenaProgress', JSON.stringify(progress));
        },

        loadProgress() {
            const saved = localStorage.getItem('penguinArenaProgress');
            if (!saved) return;

            try {
                const progress = JSON.parse(saved);
                progress.zones.forEach(savedZone => {
                    const zone = this.zones.find(z => z.id === savedZone.id);
                    if (zone) {
                        zone.unlocked = savedZone.unlocked;
                        savedZone.challenges.forEach(savedChallenge => {
                            const challenge = zone.challenges.find(c => c.id === savedChallenge.id);
                            if (challenge) {
                                challenge.completed = savedChallenge.completed;
                                challenge.locked = savedChallenge.locked;
                            }
                        });
                    }
                });
            } catch (e) {
                console.error('Failed to load progress:', e);
            }
        }
    };
}

// Shared validation helpers for challenge pages
const ArenaValidation = {
    // Check if element has all required classes
    hasClasses(element, classes) {
        return classes.every(cls => element.classList.contains(cls));
    },

    // Check if element has any of the classes
    hasAnyClass(element, classes) {
        return classes.some(cls => element.classList.contains(cls));
    },

    // Check if element has attribute
    hasAttribute(element, attr) {
        return element.hasAttribute(attr);
    },

    // Show success feedback
    showSuccess(message, zoneId, challengeId) {
        const feedback = document.getElementById('feedback');
        if (feedback) {
            feedback.className = 'mt-6 p-6 rounded-xl font-semibold text-lg bg-green-100 border-2 border-green-500 text-green-800';
            feedback.textContent = '✅ ' + message;
            feedback.classList.remove('hidden');
        }

        // Notify parent window
        setTimeout(() => {
            window.parent.postMessage({
                type: 'challengeComplete',
                zoneId: zoneId,
                challengeId: challengeId
            }, '*');
        }, 1000);
    },

    // Show failure feedback
    showFailure(message) {
        const feedback = document.getElementById('feedback');
        if (feedback) {
            feedback.className = 'mt-6 p-6 rounded-xl font-semibold text-lg bg-red-100 border-2 border-red-500 text-red-800';
            feedback.textContent = '❌ ' + message;
            feedback.classList.remove('hidden');
        }
    }
};
