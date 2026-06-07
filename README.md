# ? (Question Mark)

An interactive emotional archive exploring uncertainty, trust, and the decision to let go.

## Overview

This is not a simple story. It's an **experience**—a guided journey through doubt, confusion, and ultimately, acceptance.

The site uses interactive mechanics to make the narrative feel personal:
- A boot sequence that sets the tone
- An explorable file system containing conversations, questions, and identities
- A moment of **system corruption** where the interface breaks down
- A **Memory Chamber** where you collect floating memories
- A final choice: keep searching for answers, or let go

## The Story Arc

```
BOOT TERMINAL
     ↓
OPEN ARCHIVE
     ↓
FILE EXPLORER
     ↓
CONVERSATIONS, QUESTIONS, IDENTITY CHECK
     ↓
SYSTEM CORRUPTION (the interface breaks)
     ↓
COSMIC MEMORY CHAMBER (collect floating memories)
     ↓
FINAL CHOICE: Keep Searching OR Let Go
     ↓
FINAL REPORT (acceptance)
```

## Key Features

### System Corruption
When you try to close the file explorer, the system destabilizes:
- The interface glitches
- Floating questions appear
- Stars become visible through the broken interface
- You transition into the Memory Chamber

### Memory Chamber
- Floating memories in cosmic space
- Click to collect each one
- Particles burst when collected
- Terminal output acknowledges each memory
- **Only after collecting all memories** can you proceed

### The Hidden File: truth.txt
- Clicking on `truth.txt` returns an error
- **File does not exist**
- This symbolizes the core theme: not all questions have answers
- Not all files were meant to be read

### Final Choice
- **[ KEEP SEARCHING ]** - Returns a loop showing no new evidence is found
- **[ LET GO ]** - Advances to the final report
- Only LET GO progresses the story
- This mechanic emphasizes that searching forever won't produce answers

## File Structure

```
question-mark/
├── index.html                 # Main structure
├── css/
│   ├── main.css              # Base styles
│   ├── terminal.css          # Terminal styling
│   ├── archive.css           # File explorer styling
│   └── cosmic.css            # Memory chamber & final sections
├── js/
│   ├── particles.js          # Particle system & starfield
│   ├── boot.js               # Boot sequence logic
│   ├── archive.js            # File explorer & viewer logic
│   ├── memories.js           # Memory chamber logic
│   └── progress.js           # Flow control & final sequences
├── assets/
│   ├── glitch.wav            # UI interaction sound
│   ├── archive.wav           # Significant moment sound
│   └── favicon.ico           # Site icon
└── README.md                 # This file
```

## Setup for GitHub Pages

1. Create a new repository named `question-mark`
2. Clone or copy these files into the repository
3. Push to GitHub
4. Go to Settings → Pages
5. Set source to `main` branch
6. Your site will be live at `https://yourusername.github.io/question-mark/`

## Customization

### Colors
Edit CSS variables in `css/main.css`:
```css
:root {
    --red-accent: #ff4444;
    --gold-accent: #d4a574;
    /* ... */
}
```

### File Contents
Edit the `fileContents` object in `js/archive.js` to change the displayed text for each file.

### Memories
Edit the `memories` array in `js/memories.js` to change floating memories:
```javascript
const memories = [
    'I cared.',
    'I stayed.',
    // ...
];
```

### Questions (Background)
Edit the `questions` array in `js/progress.js` to change floating questions during file exploration.

### Audio Files
Add your own sounds to the `assets/` folder:
- `glitch.wav` - Used for UI interactions
- `archive.wav` - Used for significant moments

The site works without audio; the `playSound()` function silently fails if files are missing.

## Technologies

- **HTML5** - Semantic markup
- **CSS3** - Animations, gradients, responsive design
- **Vanilla JavaScript** - No frameworks or dependencies
- **Canvas API** - Particle system rendering

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (tested on iOS Safari and Chrome Mobile)

## Performance Notes

- Lightweight: ~50KB total (excluding audio)
- No external dependencies
- Optimized animations using `requestAnimationFrame`
- Limited particle count (~100 active)
- Responsive canvas sizing

## Themes & Messaging

This site explores:
- **Uncertainty** - Not knowing what's real
- **Doubt** - Questions without answers
- **Trust issues** - Multiple identities, confusing moments
- **Acceptance** - Choosing peace over endless searching

Notable elements:
- Never directly accuses anyone of lying
- Presents everything as personal experience
- The "truth.txt" error is the symbolic core
- The final report emphasizes self-care

## The Ending

```
[ARCHIVE COMPLETE]

I don't have the answers.

I'm tired of looking for them.

So I'm letting this go.

Not because it didn't matter.

Not because I stopped caring.

But because I deserve peace more than I deserve another mystery.
```

## Notes

This project was created with intention and care. It's a personal narrative that uses web technology to create an emotional, interactive experience.

The mechanics matter as much as the story. The fact that you **must** collect all memories before proceeding. The fact that searching yields nothing. The fact that the truth file doesn't exist.

These aren't just UI elements. They're the message.

---

*"I don't have the answers. I'm tired of looking for them. So I'm letting this go."*
