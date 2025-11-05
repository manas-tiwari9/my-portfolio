// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functions
    initParticles();
    initAOS();
    initNavbar();
    initThemeToggle();
    initTypingEffect();
    initScrollAnimation();
    initBackToTop();
    initProjectsFilter();
    initProjectsData();
    initContactForm();
    initHaptics();
    setCurrentYear();
});

// Initialize particles.js
function initParticles() {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;
    if (document.getElementById('particles-js')) {
        const run = () => particlesJS('particles-js', {
            particles: {
                number: {
                    value: 80,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: '#4a6cf7'
                },
                shape: {
                    type: 'circle',
                    stroke: {
                        width: 0,
                        color: '#000000'
                    },
                    polygon: {
                        nb_sides: 5
                    }
                },
                opacity: {
                    value: 0.5,
                    random: false,
                    anim: {
                        enable: false,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false
                    }
                },
                size: {
                    value: 3,
                    random: true,
                    anim: {
                        enable: false,
                        speed: 40,
                        size_min: 0.1,
                        sync: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: '#4a6cf7',
                    opacity: 0.4,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 3,
                    direction: 'none',
                    random: false,
                    straight: false,
                    out_mode: 'out',
                    bounce: false,
                    attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200
                    }
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: {
                        enable: true,
                        mode: 'grab'
                    },
                    onclick: {
                        enable: true,
                        mode: 'push'
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 140,
                        line_linked: {
                            opacity: 1
                        }
                    },
                    bubble: {
                        distance: 400,
                        size: 40,
                        duration: 2,
                        opacity: 8,
                        speed: 3
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4
                    },
                    push: {
                        particles_nb: 4
                    },
                    remove: {
                        particles_nb: 2
                    }
                }
            },
            retina_detect: true
        });
        if ('requestIdleCallback' in window) {
            requestIdleCallback(run);
        } else {
            setTimeout(run, 0);
        }
    }
}

// Initialize AOS animation library
function initAOS() {
    const run = () => AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        mirror: false
    });
    if ('requestIdleCallback' in window) {
        requestIdleCallback(run);
    } else {
        setTimeout(run, 0);
    }
}

// Navbar functionality
function initNavbar() {
    const navbar = document.querySelector('.navbar');
    const menuToggle = document.querySelector('#mobile-menu');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle mobile menu
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            const isOpen = navMenu.classList.toggle('active');
            menuToggle.classList.toggle('active');
            menuToggle.setAttribute('aria-expanded', String(isOpen));
        });

        // Close menu with Escape key
        menuToggle.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                navMenu.classList.remove('active');
                menuToggle.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
                menuToggle.focus();
            }
        });
    }

    // Close mobile menu when clicking on a nav link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            menuToggle?.classList.remove('active');
            navMenu.classList.remove('active');
            menuToggle?.setAttribute('aria-expanded', 'false');
        });
    });

    // Add active class to nav links on scroll
    window.addEventListener('scroll', function() {
        let current = '';
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            link.removeAttribute('aria-current');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
                link.setAttribute('aria-current', 'page');
            }
        });

        // Navbar scroll effect
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// Theme toggle functionality
function initThemeToggle() {
    const themeToggle = document.querySelector('#theme-toggle');
    const themeIcon = themeToggle.querySelector('i');
    
    // Check for saved theme preference or use device preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeIcon.classList.replace('fa-moon', 'fa-sun');
    }
    
    // Toggle theme on button click
    themeToggle.addEventListener('click', function() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        let newTheme = 'light';
        
        if (currentTheme !== 'dark') {
            newTheme = 'dark';
            themeIcon.classList.replace('fa-moon', 'fa-sun');
        } else {
            themeIcon.classList.replace('fa-sun', 'fa-moon');
        }
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });
}

// Typing effect for hero section
function initTypingEffect() {
    const typingElement = document.getElementById('typing-text');
    if (!typingElement) return;
    
    // === CHANGED THIS SECTION ===
    const phrases = [
        'Data Science Student',
        'Machine Learning Enthusiast',
        'AI Enthusiast'
    ];
    // ============================
    
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    
    function type() {
        const currentPhrase = phrases[phraseIndex];
        
        if (isDeleting) {
            typingElement.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            typingElement.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }
        
        if (!isDeleting && charIndex === currentPhrase.length) {
            isDeleting = true;
            typingSpeed = 1000; // Pause at the end
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typingSpeed = 500; // Pause before typing next phrase
        }
        
        setTimeout(type, typingSpeed);
    }
    
    setTimeout(type, 1000);
}


// Scroll animations for elements
function initScrollAnimation() {
    const skillItems = document.querySelectorAll('.skill-item');

    // Helper function to find the original inline width style
    function getOriginalWidth(item) { // <-- This line is fixed
        // This is a bit complex. We can't just read 'style.width'
        // because it will be '0%'. We need to find the *original* HTML.
        // This is a limitation of this template's animation logic.
        // Let's assume the original widths are hardcoded as in the user's HTML:
        const skillWidths = {
            "Python (Advanced)": "95%",
            "SQL (Advanced)": "95%",
            "TensorFlow": "90%",
            "scikit-learn": "93%",
            "XGBoost": "90%",
            "LightGBM": "88%",
            "MLflow": "88%",
            "ZenML": "85%",
            "Docker": "90%",
            "FastAPI": "92%",
            "Communication": "90%",
            "Teamwork": "85%",
            "Problem Solving": "88%",
            "Creativity": "92%"
        };
        const skillName = item.getAttribute('data-skill'); // <-- This line is fixed
        return skillWidths[skillName] || '0%';
    }

    // Initialize progress bars at 0 width
    skillItems.forEach(item => {
        const progressBar = item.querySelector('.progress-bar');
        if (progressBar) {
            // Store the original width in a data attribute
            const originalWidth = getOriginalWidth(item); // <-- This line calls the helper
            progressBar.setAttribute('data-original-width', originalWidth);
            progressBar.style.width = '0%';
        }
    });

    // Function to check if element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.bottom >= 0
        );
    }

    // Function to animate elements when they come into view
    function animateOnScroll() {
        skillItems.forEach(item => {
            if (isInViewport(item)) {
                const progressBar = item.querySelector('.progress-bar');
                if (progressBar && progressBar.style.width === '0%') {
                    // Animate to the stored original width
                    const originalWidth = progressBar.getAttribute('data-original-width');
                    progressBar.style.width = originalWidth;
                }
            }
        });
    }

    // Run on scroll
    window.addEventListener('scroll', animateOnScroll);
    
    // Run once on page load
    animateOnScroll();
}

// Back to top button functionality
function initBackToTop() {
    const backToTopButton = document.getElementById('back-to-top');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopButton.classList.add('active');
        } else {
            backToTopButton.classList.remove('active');
        }
    });
    
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Projects filter functionality
function initProjectsFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    // Defer this logic to run *after* projects are created
    setTimeout(() => {
        const projectItems = document.querySelectorAll('.project-item');
        if (projectItems.length === 0) return;

        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                this.classList.add('active');
                
                // Get filter value
                const filterValue = this.getAttribute('data-filter');
                
                // Filter projects
                projectItems.forEach(item => {
                    if (filterValue === 'all' || item.classList.contains(filterValue)) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    }, 500); // Wait for projects to be added to the DOM
}

// Dynamically populate projects
// Dynamically populate projects
// Dynamically populate projects
function initProjectsData() {
    const projectsGrid = document.querySelector('.projects-grid');
    if (!projectsGrid) return;
    
    // === UPDATED WITH YOUR GITHUB LINKS ===
    const projects = [
        {
            id: 1, 
            title: 'Book Recommender System',
            description: 'An intelligent book recommendation system combining collaborative filtering (ALS) with content-based embeddings to personalize suggestions.',
            image: 'https.i.postimg.cc/MGyXDb27/Book.jpg',
            category: 'ml',
            tags: ['Python', 'Machine Learning', 'Recommender Systems', 'Flask', 'Data Science'],
            demoLink: null, // <-- Live link removed
            codeLink: 'https://github.com/YOUR-USERNAME/YOUR-BOOK-PROJECT-REPO' // ⚠️ PASTE YOUR LINK HERE
        },
        {
            id: 2, 
            title: 'Resume Screening',
            description: 'AI-powered tool using NLP to parse, analyze, and rank resumes based on job requirements, reducing manual screening overhead.',
            image: 'https://i.postimg.cc/tTxx1KMP/20251013-1717-AI-Powered-Resume-Screening-simple-compose-01k7emhkcqffrrt7hwx30df76e.png',
            category: 'ai',
            tags: ['Python', 'NLP', 'Machine Learning', 'spaCy', 'SBERT', 'Automation'],
            demoLink: null, // <-- Live link removed
            codeLink: 'https://github.com/manas-tiwari9/resume-screening' // ⚠️ PASTE YOUR LINK HERE
        },
        {
            id: 3, 
            title: 'Toolly',
            description: 'An AI-powered productivity suite that automates and streamlines daily tasks, featuring intelligent text processing and content generation.',
            image: 'https.i.postimg.cc/4d0vfpLB/20250613-1939-Toolly-Modern-Tech-Logo-simple-compose-01jxmr7v1neyav79wdd6fye13h.png',
            category: 'ai',
            tags: ['Python', 'AI', 'NLP', 'Web Development', 'Productivity Tools', 'Automation'],
            demoLink: null, // <-- Live link removed
            codeLink: 'https://github.com/manas-tiwari9/tooly-studio' // ⚠️ PASTE YOUR LINK HERE
        }
    ];
    // ======================================
    
    // Create project items (This code stays the same)
    projects.forEach(project => {
        const projectItem = document.createElement('div');
        projectItem.className = `project-item ${project.category}`;
        projectItem.setAttribute('data-aos', 'fade-up');
        projectItem.setAttribute('data-aos-delay', (project.id * 100).toString());
        
        projectItem.innerHTML = `
            <img src="${project.image}" alt="${project.title}" class="project-img" loading="lazy" decoding="async">
            <div class="project-content">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                </div>
                <div class="project-links">
                    ${project.demoLink && project.demoLink !== '' ? `
                        <a href="${project.demoLink}" class="project-link" target="_blank" rel="noopener">
                            <i class="fas fa-external-link-alt"></i> Live Demo
                        </a>
                    ` : ''}
                    <a href="${project.codeLink}" class="project-link" target="_blank" rel="noopener">
                        <i class="fab fa-github"></i> Source Code
                    </a>
                </div>
            </div>
        `;
        
        projectsGrid.appendChild(projectItem);
    });
}

// Contact form functionality
function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };
            
            // Simulate form submission (in a real project, you would send this to a server)
            setTimeout(() => {
                // Show success message
                formStatus.textContent = 'Your message has been sent successfully!';
                formStatus.className = 'success';
                
                // Reset form
                contactForm.reset();
                
                // Hide message after 5 seconds
                setTimeout(() => {
                    formStatus.style.display = 'none';
                }, 5000);
            }, 1000);
        });
    }
}

// Set current year in footer
function setCurrentYear() {
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
}); 

// Gentle haptic feedback for key interactions (mobile/touch only)
function initHaptics() {
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    const canVibrate = 'vibrate' in navigator;
    if (!isTouch || !canVibrate) return;

    const vibrateTap = () => navigator.vibrate?.(12);
    const vibrateStrong = () => navigator.vibrate?.([8, 12]);

    const tapSelectors = [
        '.btn',
        '.nav-link',
        '#theme-toggle',
        '.filter-btn',
        '#back-to-top',
        '.project-link',
        '.social-link'
    ];
    const elements = document.querySelectorAll(tapSelectors.join(','));
    elements.forEach(el => {
        el.addEventListener('click', vibrateTap, { passive: true });
        el.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') vibrateTap();
        }, { passive: true });
    });

    // Stronger feedback for theme toggle and back-to-top
    document.getElementById('theme-toggle')?.addEventListener('click', vibrateStrong, { passive: true });
    document.getElementById('back-to-top')?.addEventListener('click', vibrateStrong, { passive: true });
}