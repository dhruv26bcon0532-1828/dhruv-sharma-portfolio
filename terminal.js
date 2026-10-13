/**
 * Interactive C Developer Terminal Simulator
 * Designed for Dhruv Sharma's Technical Portfolio
 */

const TERMINAL_COMMANDS = {
    help: `Available commands:
  <span class="cmd-highlight">run</span>        - Compile and execute the C foundational profile program
  <span class="cmd-highlight">about</span>      - Display Dhruv's bio and current focus
  <span class="cmd-highlight">education</span>  - Show academic credentials & university details
  <span class="cmd-highlight">skills</span>     - List core fundamentals vs current learning topics
  <span class="cmd-highlight">leadership</span> - Display Deputy Head Boy & communication achievements
  <span class="cmd-highlight">roadmap</span>    - Show 4-year engineering learning path
  <span class="cmd-highlight">contact</span>    - Show verified contact channels & links
  <span class="cmd-highlight">cat main.c</span> - Print the C source code
  <span class="cmd-highlight">clear</span>      - Clear terminal screen`,

    about: `<b>Dhruv Sharma</b>
Role: 1st Year B.Tech Computer Science & Engineering (Core)
Institution: JECRC University, Jaipur, Rajasthan, India (Expected 2026-2030)
Philosophy: "Master deep systems fundamentals first, then build scalable abstractions."
Focus: Low-level C programming, pointers, memory models, algorithmic problem-solving.
Status: Currently strengthening programming fundamentals in C.`,

    education: `[EDUCATION HISTORY]
1. <b>B.Tech Computer Science & Engineering (Core)</b>
   - JECRC University, Jaipur | 2026 - 2030 (Expected)
   - Current Year: 1st Year Undergraduate
   - Core Subjects: C Programming, Discrete Math, Engineering Math, Digital Electronics
2. <b>Class XII (CBSE)</b>
   - Science Stream (PCM + Computer Science) | ~80% Aggregate
3. <b>Class X (ICSE)</b>
   - 93% Aggregate (Distinction in Math & Physical Sciences)`,

    skills: `[SKILL MATRIX]
■ <b>Current Mastered Foundations:</b>
  - C Programming (Pointers, Memory allocation, Structs, File I/O)
  - Problem-Solving Fundamentals & Computational Logic
  - Basic Algorithms & Flowcharts (Tracing, dry-runs, pseudocode)
  - Linux CLI & GCC build process
■ <b>Currently Learning (In-Progress):</b>
  - C++ & Object-Oriented Principles
  - Data Structures & Algorithms (Linear structures, Stacks, Queues)
  - Git / GitHub Version Control
■ <b>Leadership & Interpersonal:</b>
  - Public Speaking, Assembly Addressing, Team Leadership (Elected Deputy Head Boy)`,

    leadership: `[LEADERSHIP & RESPONSIBILITY]
■ <b>Elected Deputy Head Boy</b> (Senior Secondary Student Council)
  - Elected by student voting and faculty evaluation.
  - Represented 1,000+ students across school administration forums.
  - Organized inter-house debates, annual functions, and delivered regular school assemblies.
  - Key competencies: Public speaking, mediation, collaborative governance.`,

    roadmap: `[4-YEAR ENGINEERING ROADMAP]
[Phase 1] (Active) C Fundamentals & Pointer Memory Models
[Phase 2] (Current Focus) C++ OOP & Standard Template Library (STL)
[Phase 3] (Upcoming) DSA Rigor & Algorithmic Problem Solving (LeetCode/CodeChef)
[Phase 4] (Target 2027-2028) Full-Stack Development & Systems Internships`,

    contact: `[CONTACT CHANNELS]
Email:    dhruv.sharma@example.com (Editable)
LinkedIn: linkedin.com/in/dhruv-sharma-jecrc
GitHub:   github.com/dhruvsharma-dev
Location: Jaipur, Rajasthan, India`,

    "cat main.c": `#include &lt;stdio.h&gt;

typedef struct {
    char name[32];
    char university[32];
    char degree[32];
    int start_year;
    int grad_year;
} StudentProfile;

void printProfile(const StudentProfile *p) {
    printf("Name:       %s\\n", p-&gt;name);
    printf("University: %s\\n", p-&gt;university);
    printf("Degree:     %s (%d-%d)\\n", p-&gt;degree, p-&gt;start_year, p-&gt;grad_year);
    printf("Focus:      C Programming & Problem Solving\\n");
}

int main(void) {
    StudentProfile dhruv = {
        "Dhruv Sharma",
        "JECRC University",
        "B.Tech CSE Core",
        2026,
        2030
    };
    printf("=== Dhruv Sharma | Academic Profile ===\\n");
    printProfile(&dhruv);
    return 0;
}`
};

const RUN_DEMO_OUTPUT = [
    '<span class="term-dim">$ gcc -Wall -Wextra -O2 profile.c -o profile_demo</span>',
    '<span class="term-success">[OK] Compilation succeeded with 0 warnings.</span>',
    '<span class="term-dim">$ ./profile_demo</span>',
    '==================================================',
    '     DHRUV SHARMA // JECRC UNIVERSITY CSE         ',
    '==================================================',
    '[SYSTEM] Initializing profile environment...',
    '--------------------------------------------------',
    'Name:       Dhruv Sharma',
    'Program:    B.Tech Computer Science & Engineering (Core)',
    'University: JECRC University, Jaipur (2026-2030)',
    'Foundation: C Programming & Computational Logic',
    'Status:     Actively strengthening C programming fundamentals',
    '--------------------------------------------------',
    '[STATUS] Program executed with exit code 0.',
    '[INFO] Type <span class="cmd-highlight">help</span> for more interactive commands.'
];

function initTerminal() {
    const termBody = document.getElementById('terminalOutput');
    const termInput = document.getElementById('terminalInput');
    const runBtn = document.getElementById('btnRunC');
    const codeTab = document.getElementById('tabCode');
    const termTab = document.getElementById('tabTerminal');
    const codeView = document.getElementById('codeView');
    const termView = document.getElementById('termView');

    if (!termBody || !termInput) return;

    // Tab switching
    if (codeTab && termTab && codeView && termView) {
        codeTab.addEventListener('click', () => {
            codeTab.classList.add('active');
            termTab.classList.remove('active');
            codeView.classList.remove('hidden');
            termView.classList.add('hidden');
        });

        termTab.addEventListener('click', () => {
            termTab.classList.add('active');
            codeTab.classList.remove('active');
            termView.classList.remove('hidden');
            codeView.classList.add('hidden');
            termInput.focus();
        });
    }

    // Run Demo Button
    if (runBtn) {
        runBtn.addEventListener('click', () => {
            if (termTab && termView && codeView) {
                termTab.click();
            }
            simulateExecution();
        });
    }

    // Command History
    let commandHistory = [];
    let historyIndex = -1;

    termInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const rawVal = termInput.value.trim();
            const cmd = rawVal.toLowerCase();
            termInput.value = '';

            if (rawVal) {
                commandHistory.push(rawVal);
                historyIndex = commandHistory.length;
            }

            appendLine(`<span class="term-prompt">dhruv@jecrc:~$</span> ${escapeHTML(rawVal)}`);

            if (cmd === '') {
                // Do nothing
            } else if (cmd === 'clear') {
                termBody.innerHTML = '';
            } else if (cmd === 'run' || cmd === './main' || cmd === './profile_demo' || cmd === 'gcc') {
                simulateExecution();
            } else if (TERMINAL_COMMANDS[cmd]) {
                appendBlock(TERMINAL_COMMANDS[cmd]);
            } else {
                appendLine(`<span class="term-error">Command not found: "${escapeHTML(rawVal)}". Type <span class="cmd-highlight">help</span> for a list of commands.</span>`);
            }

            scrollTerminalToBottom();
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (historyIndex > 0) {
                historyIndex--;
                termInput.value = commandHistory[historyIndex] || '';
            }
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (historyIndex < commandHistory.length - 1) {
                historyIndex++;
                termInput.value = commandHistory[historyIndex] || '';
            } else {
                historyIndex = commandHistory.length;
                termInput.value = '';
            }
        }
    });

    function appendLine(html) {
        const div = document.createElement('div');
        div.className = 'term-line';
        div.innerHTML = html;
        termBody.appendChild(div);
    }

    function appendBlock(content) {
        const div = document.createElement('div');
        div.className = 'term-block';
        div.innerHTML = content.replace(/\n/g, '<br>');
        termBody.appendChild(div);
    }

    function simulateExecution() {
        appendLine('<span class="term-dim">$ executing compilation pipeline...</span>');
        let delay = 100;
        RUN_DEMO_OUTPUT.forEach((line) => {
            setTimeout(() => {
                appendLine(line);
                scrollTerminalToBottom();
            }, delay);
            delay += 120;
        });
    }

    function scrollTerminalToBottom() {
        const container = document.getElementById('terminalScrollArea');
        if (container) {
            container.scrollTop = container.scrollHeight;
        }
    }

    function escapeHTML(str) {
        return str.replace(/[&<>'"]/g, 
            tag => ({
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;',
                "'": '&#39;',
                '"': '&quot;'
            }[tag] || tag)
        );
    }
}

document.addEventListener('DOMContentLoaded', initTerminal);
