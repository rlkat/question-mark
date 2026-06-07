const memories = [
    'I cared.',
    'I stayed.',
    'I believed.',
    'I waited.',
    'I doubted.',
    'I forgave.',
    'I searched.',
    'I hoped.'
];

class MemoryChamber {
    constructor() {
        this.collectedMemories = 0;
        this.totalMemories = memories.length;
        this.memoryItems = [];
    }
    
    createMemories() {
        const memorySpace = document.getElementById('memorySpace');
        memorySpace.innerHTML = '';
        this.memoryItems = [];
        
        memories.forEach((memory, index) => {
            const item = document.createElement('div');
            item.className = 'memory-item';
            item.textContent = memory;
            
            // Random position
            const x = Math.random() * (memorySpace.offsetWidth - 150);
            const y = Math.random() * (memorySpace.offsetHeight - 50);
            item.style.left = x + 'px';
            item.style.top = y + 'px';
            
            // Animation delay
            item.style.animationDelay = Math.random() * 2 + 's';
            
            item.addEventListener('click', (e) => {
                e.stopPropagation();
                this.collectMemory(item);
            });
            
            memorySpace.appendChild(item);
            this.memoryItems.push(item);
        });
        
        this.updateCounter();
    }
    
    collectMemory(item) {
        playSound('assets/glitch.wav');
        
        item.classList.add('memory-collected');
        this.collectedMemories++;
        
        // Create particles
        const rect = item.getBoundingClientRect();
        particleSystem.burst(rect.left + rect.width / 2, rect.top + rect.height / 2, 15, {
            speed: 3,
            color: '#d4a574'
        });
        
        // Terminal output
        const outputDiv = document.createElement('div');
        outputDiv.style.marginTop = '10px';
        outputDiv.style.color = '#d4a574';
        outputDiv.textContent = `> Memory archived.`;
        
        this.updateCounter();
        
        // Check if all collected
        setTimeout(() => {
            if (this.collectedMemories === this.totalMemories) {
                this.allMemoriesCollected();
            }
        }, 600);
    }
    
    updateCounter() {
        const counter = document.getElementById('memoryCounter');
        counter.textContent = `Memories collected: ${this.collectedMemories}/${this.totalMemories}`;
        
        if (this.collectedMemories === this.totalMemories) {
            counter.classList.add('complete');
        }
    }
    
    allMemoriesCollected() {
        // Show choice
        setTimeout(() => {
            const memoryChamber = document.getElementById('memoryChamber');
            const finalChoice = document.getElementById('finalChoice');
            
            memoryChamber.classList.add('fade-out');
            memoryChamber.classList.remove('active');
            
            setTimeout(() => {
                memoryChamber.classList.remove('fade-out');
                finalChoice.classList.remove('hidden');
                finalChoice.classList.add('active');
            }, 400);
        }, 1000);
    }
}

let memoryChamber;

function startMemoryChamber() {
    memoryChamber = new MemoryChamber();
    memoryChamber.createMemories();
    
    stopFloatingQuestions();
    
    const fileExplorer = document.getElementById('fileExplorer');
    const systemCorruption = document.getElementById('systemCorruption');
    const explorMem = document.getElementById('memoryChamber');
    
    fileExplorer.classList.add('fade-out');
    fileExplorer.classList.remove('active');
    
    setTimeout(() => {
        fileExplorer.classList.remove('fade-out');
        systemCorruption.classList.add('active');
    }, 400);
    
    // After corruption sequence
    setTimeout(() => {
        systemCorruption.classList.remove('active');
        systemCorruption.classList.add('fade-out');
        
        setTimeout(() => {
            systemCorruption.classList.remove('fade-out');
            explorMem.classList.remove('hidden');
            explorMem.classList.add('active');
        }, 400);
    }, 3000);
}

function playSound(path) {
    try {
        const audio = new Audio(path);
        audio.volume = 0.3;
        audio.play().catch(() => {});
    } catch (e) {}
}