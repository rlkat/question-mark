class Boot {
    constructor() {
        this.bootMessages = [
            'Loading memory archive...',
            'Checking trust integrity...',
            'Reviewing conversations...',
            'Cross-checking identities...',
            'Multiple accounts detected...',
            'Preparing archive...'
        ];
        this.currentLine = 1;
    }
    
    async start() {
        for (const msg of this.bootMessages) {
            await this.typeMessage(msg, this.currentLine);
            this.currentLine++;
            await this.delay(800);
        }
        return true;
    }
    
    typeMessage(message, lineNum) {
        return new Promise((resolve) => {
            const element = document.getElementById(`bootLine${lineNum}`);
            let index = 0;
            const charDelay = 50;
            
            const type = () => {
                if (index < message.length) {
                    element.textContent += message[index];
                    index++;
                    setTimeout(type, charDelay);
                } else {
                    resolve();
                }
            };
            
            type();
        });
    }
    
    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

// Initialize boot on page load
let bootComplete = false;

window.addEventListener('load', async () => {
    const boot = new Boot();
    await boot.start();
    bootComplete = true;
    
    // Show open archive button
    document.getElementById('bootTerminal').classList.remove('active');
    document.getElementById('openArchiveSection').classList.remove('hidden');
    document.getElementById('openArchiveSection').classList.add('active');
});