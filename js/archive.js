const fileContents = {
    'conv-001': `[early_connection.txt]

The first time we talked, I didn't expect it to matter.

But it did. You were curious. You listened. You asked real questions.

Maybe that's all connection ever is—someone paying attention when they don't have to.`,
    
    'conv-002': `[building_trust.txt]

I started telling you things. Real things.

Things I don't usually say out loud. Things that made me vulnerable.

You never made me regret that. Not once.

Or at least, I didn't think you did.`,
    
    'conv-003': `[confusing_moments.txt]

Then the confusion started.

Small contradictions. Moments that didn't quite add up.

Maybe I was overthinking. Maybe you were having a bad day.

Maybe, maybe, maybe.

That's where I got lost—in the maybes.`,
    
    'q-001': `[were_you_real.txt]

Were you real?

The question that wouldn't leave me alone.

I replay conversations looking for proof. Looking for something solid.

But memory is slippery. What felt true yesterday feels uncertain today.

I still don't know.`,
    
    'q-002': `[did_you_care.txt]

Did you care?

I want to believe you did. I want to believe it mattered.

But maybe the not knowing is worse than a no would have been.

At least a no would be certain.`,
    
    'q-003': `[was_it_real.txt]

Was any of it real?

The conversations. The connection. The sense that someone understood.

Or was it all something I constructed in my head?

I can't separate my version from the truth anymore.`,
    
    'id-001': `[account_001.txt]

One account. One voice.

Someone who spoke like they cared. Like they understood.

But was this the real voice, or just the one you showed me?`,
    
    'id-002': `[account_002.txt]

Another account. Different words, same patterns.

Or was it? My mind plays tricks.

I don't trust my own memory anymore.`,
    
    'id-003': `[account_003.txt]

Multiple identities. Multiple versions.

Maybe they were all real. Maybe none of them were.

Maybe that doesn't matter anymore.

I'm tired of trying to solve this puzzle.`,
    
    'truth': null // Special case - will show error
};

class Archive {
    constructor() {
        this.selectedFile = null;
        this.setupEventListeners();
    }
    
    setupEventListeners() {
        // Open Archive button
        document.getElementById('openArchiveBtn').addEventListener('click', () => {
            this.openArchive();
        });
        
        // File items
        document.querySelectorAll('.file-item.clickable').forEach(item => {
            item.addEventListener('click', (e) => {
                const fileKey = item.dataset.file;
                if (fileKey === 'truth') {
                    this.showTruthError();
                } else {
                    this.openFile(fileKey, item.querySelector('.file-name').textContent);
                }
            });
        });
        
        // Back button
        document.getElementById('backBtn').addEventListener('click', () => {
            this.backToExplorer();
        });
    }
    
    openArchive() {
        // Play sound
        playSound('assets/archive.wav');
        
        // Transition
        this.transitionTo('openArchiveSection', 'fileExplorer');
        
        // Start questions floating
        setTimeout(() => {
            startFloatingQuestions();
        }, 500);
    }
    
    openFile(fileKey, fileName) {
        playSound('assets/glitch.wav');
        
        this.selectedFile = fileKey;
        const content = fileContents[fileKey];
        
        document.getElementById('viewerTitle').textContent = fileName;
        document.getElementById('fileContent').textContent = content;
        
        this.transitionTo('fileExplorer', 'fileViewer');
    }
    
    showTruthError() {
        playSound('assets/glitch.wav');
        
        document.getElementById('viewerTitle').textContent = 'truth.txt';
        document.getElementById('fileContent').innerHTML = `
            <div style="text-align: center; color: #ff6666;">
                ERROR: File not found
                
                ---
                
                The archive does not contain what you're looking for.
                
                Some questions don't have answers.
                
                Some files were never meant to exist.
            </div>
        `;
        
        this.transitionTo('fileExplorer', 'fileViewer');
    }
    
    backToExplorer() {
        playSound('assets/glitch.wav');
        this.transitionTo('fileViewer', 'fileExplorer');
        this.selectedFile = null;
    }
    
    transitionTo(fromId, toId) {
        const fromSection = document.getElementById(fromId);
        const toSection = document.getElementById(toId);
        
        fromSection.classList.add('fade-out');
        fromSection.classList.remove('active');
        
        setTimeout(() => {
            fromSection.classList.remove('fade-out');
            toSection.classList.remove('hidden');
            toSection.classList.add('active');
        }, 400);
    }
}

function playSound(path) {
    try {
        const audio = new Audio(path);
        audio.volume = 0.3;
        audio.play().catch(() => {});
    } catch (e) {}
}

let archive;
window.addEventListener('load', () => {
    if (bootComplete) {
        archive = new Archive();
    } else {
        setTimeout(() => {
            archive = new Archive();
        }, 100);
    }
});