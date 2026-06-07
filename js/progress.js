const questions = [
    'were you real?',
    'or was i alone?',
    'did you care?',
    'or was it all me?',
    'can you come back?',
    'or am i too late?',
    'what was it?',
    'what was any of it?',
    'am i crazy?',
    'did i imagine everything?',
    'why wont you just tell me?',
    'how do i know?'
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

document.addEventListener('click', (e) => {
    if (e.target.closest('.explorer-tabs .close')) {
        startMemoryChamber();
    }
});

document.addEventListener('click', (e) => {
    if (e.target.id === 'keepSearchingBtn') {
        handleKeepSearching();
    }
    if (e.target.id === 'letGoBtn') {
        handleLetGoError();
    }
    if (e.target.id === 'keepSpiralingBtn') {
        handleKeepSpiraling();
    }
    if (e.target.id === 'searchReturnBtn') {
        handleSearchReturn();
    }
    if (e.target.id === 'errorReturnBtn') {
        handleErrorReturn();
    }
    if (e.target.id === 'spiralReturnBtn') {
        handleSpiralReturn();
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

function handleLetGoError() {
    playSound('assets/glitch.wav');
    
    const finalChoice = document.getElementById('finalChoice');
    const errorScreen = document.getElementById('errorScreen');
    
    finalChoice.classList.add('fade-out');
    finalChoice.classList.remove('active');
    
    setTimeout(() => {
        finalChoice.classList.remove('fade-out');
        errorScreen.classList.remove('hidden');
        errorScreen.classList.add('active');
        
        runErrorSequence();
    }, 400);
}

function handleKeepSpiraling() {
    playSound('assets/glitch.wav');
    
    const finalChoice = document.getElementById('finalChoice');
    const spiralScreen = document.getElementById('spiralScreen');
    
    finalChoice.classList.add('fade-out');
    finalChoice.classList.remove('active');
    
    setTimeout(() => {
        finalChoice.classList.remove('fade-out');
        spiralScreen.classList.remove('hidden');
        spiralScreen.classList.add('active');
        
        runSpiralSequence();
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

function handleErrorReturn() {
    playSound('assets/glitch.wav');
    
    const errorScreen = document.getElementById('errorScreen');
    const finalChoice = document.getElementById('finalChoice');
    
    errorScreen.classList.add('fade-out');
    errorScreen.classList.remove('active');
    
    setTimeout(() => {
        errorScreen.classList.remove('fade-out');
        finalChoice.classList.add('active');
    }, 400);
}

function handleSpiralReturn() {
    playSound('assets/glitch.wav');
    
    const spiralScreen = document.getElementById('spiralScreen');
    const finalReport = document.getElementById('finalReport');
    
    spiralScreen.classList.add('fade-out');
    spiralScreen.classList.remove('active');
    
    setTimeout(() => {
        spiralScreen.classList.remove('fade-out');
        finalReport.classList.remove('hidden');
        finalReport.classList.add('active');
    }, 400);
}

function runSearchSequence() {
    const lines = [
        { id: 'searchLine1', text: 'looking...', delay: 500 },
        { id: 'searchLine2', text: 'looking...', delay: 1500 },
        { id: 'searchLine3', text: 'looking...', delay: 2500 },
        { id: 'searchLine4', text: 'nothing. there is nothing.', delay: 3500 }
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

function runErrorSequence() {
    const lines = [
        { id: 'errorLine1', text: 'accessing...', delay: 300 },
        { id: 'errorLine2', text: 'ERROR: cannot access', delay: 800 },
        { id: 'errorLine3', text: 'this path is blocked', delay: 1500 }
    ];
    
    lines.forEach(line => {
        setTimeout(() => {
            const elem = document.getElementById(line.id);
            if (elem) {
                elem.textContent = line.text;
                elem.classList.add('glitch');
            }
        }, line.delay);
    });
}

function runSpiralSequence() {
    const spiralContainer = document.getElementById('spiralContent');
    const spiralQuestions = [
        'were you real though',
        'or did i make you up',
        'why wont you answer',
        'am i asking the wrong questions',
        'is there even a right question',
        'maybe there is no answer',
        'maybe i dont want to know',
        'maybe im just scared',
        'maybe this is the answer',
        'maybe im going crazy'
    ];
    
    let questionIndex = 0;
    
    function addQuestion() {
        if (questionIndex < spiralQuestions.length) {
            const p = document.createElement('p');
            p.textContent = spiralQuestions[questionIndex];
            p.style.opacity = '0';
            p.style.animation = 'fadeInUp 0.5s ease-out forwards';
            p.style.animationDelay = (questionIndex * 0.3) + 's';
            spiralContainer.appendChild(p);
            
            questionIndex++;
            setTimeout(addQuestion, 300);
        } else {
            setTimeout(() => {
                const continueBtn = document.getElementById('spiralReturnBtn');
                continueBtn.style.opacity = '0';
                continueBtn.style.animation = 'fadeInUp 0.8s ease-out forwards';
                continueBtn.style.animationDelay = '3s';
            }, 1000);
        }
    }
    
    addQuestion();
}

function playSound(path) {
    try {
        const audio = new Audio(path);
        audio.volume = 0.3;
        audio.play().catch(() => {});
    } catch (e) {}
}

function runCorruptionSequence() {
    const lines = [
        { id: 'corruptionLine1', text: 'reading archive...', delay: 300 },
        { id: 'corruptionLine2', text: '████████████████████', delay: 1000 },
        { id: 'corruptionLine3', text: 'error: structure unstable', delay: 1800 }
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