/**
 * Main Interactive Application Logic
 * Dhruv Sharma - Portfolio Website
 */

document.addEventListener('DOMContentLoaded', () => {
    initConfigurationSync();
    initNavigation();
    initScrollSpy();
    initSkillFilters();
    initProjectFilters();
    initModals();
    initCopyButtons();
    initContactForm();
    initRoadmapInteractions();
});

/* -------------------------------------------------------------
 * 1. Synchronize Dynamic Data from config.js
 * ----------------------------------------------------------- */
function initConfigurationSync() {
    if (typeof PORTFOLIO_CONFIG === 'undefined') return;

    const cfg = PORTFOLIO_CONFIG;

    // Update Email elements
    const emailEls = document.querySelectorAll('.cfg-email');
    emailEls.forEach(el => {
        el.textContent = cfg.contacts.email;
        if (el.tagName === 'A') {
            el.href = `mailto:${cfg.contacts.email}`;
        }
    });

    // Update LinkedIn elements
    const linkedinEls = document.querySelectorAll('.cfg-linkedin');
    linkedinEls.forEach(el => {
        if (el.tagName === 'A') {
            el.href = cfg.contacts.linkedin;
        }
        const textNode = el.querySelector('.cfg-linkedin-text');
        if (textNode) textNode.textContent = cfg.contacts.linkedinUsername;
    });

    // Update GitHub elements
    const githubEls = document.querySelectorAll('.cfg-github');
    githubEls.forEach(el => {
        if (el.tagName === 'A') {
            el.href = cfg.contacts.github;
        }
        const textNode = el.querySelector('.cfg-github-text');
        if (textNode) textNode.textContent = cfg.contacts.githubUsername;
    });
}

/* -------------------------------------------------------------
 * 2. Mobile Navigation & Header Scroll State
 * ----------------------------------------------------------- */
function initNavigation() {
    const navbar = document.getElementById('mainNav');
    const menuToggle = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');

    // Header shadow & blur on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 30) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', () => {
            const isOpen = mobileMenu.classList.toggle('open');
            menuToggle.setAttribute('aria-expanded', isOpen);
            document.body.style.overflow = isOpen ? 'hidden' : '';
        });

        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('open');
                menuToggle.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            });
        });
    }

    // Smooth anchor scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#' || !targetId.startsWith('#')) return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                const navHeight = navbar.offsetHeight || 72;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - navHeight;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/* -------------------------------------------------------------
 * 3. Active Section Scroll Spy
 * ----------------------------------------------------------- */
function initScrollSpy() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.desktop-nav-link');

    function updateActiveLink() {
        const scrollY = window.pageYOffset;
        const navHeight = 90;

        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - navHeight;
            const sectionId = section.getAttribute('id');

            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', updateActiveLink);
    updateActiveLink();
}

/* -------------------------------------------------------------
 * 4. Skill Filtering Tabs
 * ----------------------------------------------------------- */
function initSkillFilters() {
    const filterBtns = document.querySelectorAll('.skill-filter-btn');
    const skillCards = document.querySelectorAll('.skill-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            skillCards.forEach(card => {
                const category = card.getAttribute('data-category');
                if (filterValue === 'all' || category === filterValue) {
                    card.style.display = 'flex';
                    card.style.animation = 'fadeIn 0.3s ease forwards';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

/* -------------------------------------------------------------
 * 5. Project & Learning Filtering Tabs
 * ----------------------------------------------------------- */
function initProjectFilters() {
    const filterBtns = document.querySelectorAll('.project-filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            projectCards.forEach(card => {
                const status = card.getAttribute('data-status');
                if (filterValue === 'all' || status === filterValue) {
                    card.style.display = 'flex';
                    card.style.animation = 'fadeIn 0.3s ease forwards';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

/* -------------------------------------------------------------
 * 6. Modals (Resume Preview)
 * ----------------------------------------------------------- */
function initModals() {
    // Resume Modal Handler
    const resumeModal = document.getElementById('resumeModal');
    const openResumeBtns = document.querySelectorAll('.open-resume-btn');
    const resumeClose = document.getElementById('resumeClose');

    openResumeBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            if (resumeModal) {
                resumeModal.classList.remove('hidden');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    function closeResume() {
        if (resumeModal) {
            resumeModal.classList.add('hidden');
            document.body.style.overflow = '';
        }
    }

    if (resumeClose && resumeModal) {
        resumeClose.addEventListener('click', closeResume);

        resumeModal.addEventListener('click', (e) => {
            if (e.target === resumeModal) {
                closeResume();
            }
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeResume();
        }
    });
}

/* -------------------------------------------------------------
 * 7. Copy to Clipboard Utility & Toast Notification
 * ----------------------------------------------------------- */
function initCopyButtons() {
    const copyBtns = document.querySelectorAll('.copy-btn');

    copyBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const textToCopy = btn.getAttribute('data-copy-text') || 
                               (typeof PORTFOLIO_CONFIG !== 'undefined' ? PORTFOLIO_CONFIG.contacts.email : 'dhruv.sharma@example.com');
            
            navigator.clipboard.writeText(textToCopy).then(() => {
                showToast(`Copied "${textToCopy}" to clipboard!`);
                const originalText = btn.innerHTML;
                btn.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="inline-icon"><polyline points="20 6 9 17 4 12"></polyline></svg> Copied!`;
                setTimeout(() => {
                    btn.innerHTML = originalText;
                }, 2000);
            }).catch(err => {
                showToast(`Press Ctrl+C to copy: ${textToCopy}`);
            });
        });
    });
}

function showToast(message) {
    let toast = document.getElementById('globalToast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'globalToast';
        toast.className = 'toast-container';
        document.body.appendChild(toast);
    }

    toast.innerHTML = `
        <div class="toast-item">
            <span class="toast-check">✓</span>
            <span class="toast-msg">${message}</span>
        </div>
    `;
    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
    }, 2800);
}

/* -------------------------------------------------------------
 * 8. Interactive Contact Form Handler
 * ----------------------------------------------------------- */
function initContactForm() {
    const form = document.getElementById('contactForm');
    const statusMsg = document.getElementById('contactStatus');

    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('senderName').value.trim();
        const email = document.getElementById('senderEmail').value.trim();
        const subject = document.getElementById('msgSubject').value.trim();
        const message = document.getElementById('senderMessage').value.trim();

        if (!name || !email || !message) {
            statusMsg.innerHTML = '<span class="status-err">Please fill in all required fields.</span>';
            return;
        }

        // Construct standard mailto link
        const targetEmail = typeof PORTFOLIO_CONFIG !== 'undefined' ? PORTFOLIO_CONFIG.contacts.email : 'dhruv.sharma@example.com';
        const mailtoUri = `mailto:${encodeURIComponent(targetEmail)}?subject=${encodeURIComponent(`[Portfolio Contact] ${subject} - from ${name}`)}&body=${encodeURIComponent(`From: ${name} (${email})\n\n${message}`)}`;

        statusMsg.innerHTML = '<span class="status-success">Opening your default mail client with formatted message...</span>';
        
        window.location.href = mailtoUri;

        showToast('Drafting message in your email client!');
        
        setTimeout(() => {
            statusMsg.innerHTML = '<span class="status-info">If your email client didn\'t open automatically, you can directly email <a href="mailto:' + targetEmail + '" class="underline">' + targetEmail + '</a>.</span>';
        }, 3000);
    });
}

/* -------------------------------------------------------------
 * 9. Interactive Roadmap Accordion / Milestones
 * ----------------------------------------------------------- */
function initRoadmapInteractions() {
    const roadmapCards = document.querySelectorAll('.roadmap-item');

    roadmapCards.forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('expanded');
        });
    });
}
