const questions = [
    'were you real?',
    'or was i alone?',
    'did you care?',
    'or was it all me?',
    'can you come back?',
    'or am i too late?',
    'what was it?',
    'what was any of it?'
];

let floatingQuestionsActive = false;

function startFloatingQuestions() {
    if (floatingQuestionsActive) return;
    floatingQuestionsActive = true;
    
    const container = document.getElementById('questionsContainer');
    container.classList.remove('hidden');
    
    const questionInterval = setInterval(() => {
        if (!floatingQuestionsActive) {
            clearInterval(questionInterval);
            return;
        }
        
        const question = questions[Math.floor(Math.random() * questions.length)];
        const elem = document.createElement('div');
        elem.className = 'floating-question';
        elem.textContent = question;
        
        const x = Math.random() * window.innerWidth;
        const y = window.innerHeight;
        elem.style.left = x + 'px';
        elem.style.top = y + 'px';
        
        const tx = (Math.random() - 0.5) * 100;
        elem.style.setProperty('--tx', tx + 'px');
        
        container.appendChild(elem);
        
        setTimeout(() => {
            elem.remove();
        }, 3100);
    }, 400);
}

function stopFloatingQuestions() {
    floatingQuestionsActive = false;
    document.getElementById('questionsContainer').classList.add('hidden');
}

// File explorer exit
document.addEventListener('click', (e) => {
    if (e.target.closest('.explorer-tabs .close')) {
        startMemoryChamber();
    }
});

// Final choice handlers
document.addEventListener('click', (e) => {
    if (e.target.id === 'keepSearchingBtn') {
        handleKeepSearching();
    }
    if (e.target.id === 'letGoBtn') {
        handleLetGo();
    }
    if (e.target.id === 'searchReturnBtn') {
        handleSearchReturn();
    }
});

function handleKeepSearching() {
    playSound('assets/glitch.wav');
    
    const finalChoice = document.getElementById('finalChoice');
    const searchLoop = document.getElementById('searchLoop');
    
    finalChoice.classList.add('fade-out');
    finalChoice.classList.remove('active');
    
    setTimeout(() => {
        finalChoice.classList.remove('fade-out');
        searchLoop.classList.remove('hidden');
        searchLoop.classList.add('active');
        
        runSearchSequence();
    }, 400);
}

function handleLetGo() {
    playSound('assets/archive.wav');
    
    const finalChoice = document.getElementById('finalChoice');
    const finalReport = document.getElementById('finalReport');
    
    finalChoice.classList.add('fade-out');
    finalChoice.classList.remove('active');
    
    setTimeout(() => {
        finalChoice.classList.remove('fade-out');
        finalReport.classList.remove('hidden');
        finalReport.classList.add('active');
    }, 400);
}

function handleSearchReturn() {
    playSound('assets/glitch.wav');
    
    const searchLoop = document.getElementById('searchLoop');
    const finalChoice = document.getElementById('finalChoice');
    
    searchLoop.classList.add('fade-out');
    searchLoop.classList.remove('active');
    
    setTimeout(() => {
        searchLoop.classList.remove('fade-out');
        finalChoice.classList.add('active');
    }, 400);
}

function runSearchSequence() {
    const lines = [
        { id: 'searchLine1', text: 'Searching...', delay: 500 },
        { id: 'searchLine2', text: 'Searching...', delay: 1500 },
        { id: 'searchLine3', text: 'Searching...', delay: 2500 },
        { id: 'searchLine4', text: 'No new evidence found.', delay: 3500 }
    ];
    
    lines.forEach(line => {
        setTimeout(() => {
            const elem = document.getElementById(line.id);
            if (elem) {
                elem.textContent = line.text;
            }
        }, line.delay);
    });
}

function playSound(path) {
    try {
        const audio = new Audio(path);
        audio.volume = 0.3;
        audio.play().catch(() => {});
    } catch (e) {}
}

// System corruption sequence
function runCorruptionSequence() {
    const lines = [
        { id: 'corruptionLine1', text: 'Scanning archive...', delay: 300 },
        { id: 'corruptionLine2', text: '████████████████████', delay: 1000 },
        { id: 'corruptionLine3', text: 'ERROR\n\nArchive structure unstable.', delay: 1800 }
    ];
    
    lines.forEach(line => {
        setTimeout(() => {
            const elem = document.getElementById(line.id);
            if (elem) {
                elem.innerHTML = line.text;
                elem.classList.add('glitch');
            }
        }, line.delay);
    });
}