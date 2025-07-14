document.addEventListener('DOMContentLoaded', function() {
    // ======================
// Theme Management
// ======================
const themeToggle = document.querySelector('.theme-toggle');
const html = document.documentElement;

// Function to update the toggle icon based on current theme
function updateToggleIcon(theme) {
  const moonIcon = themeToggle.querySelector('.fa-moon');
  const sunIcon = themeToggle.querySelector('.fa-sun');
  
  if (theme === 'dark') {
    moonIcon.style.opacity = '0';
    moonIcon.style.transform = 'rotate(90deg)';
    sunIcon.style.opacity = '1';
    sunIcon.style.transform = 'rotate(0deg)';
  } else {
    sunIcon.style.opacity = '0';
    sunIcon.style.transform = 'rotate(90deg)';
    moonIcon.style.opacity = '1';
    moonIcon.style.transform = 'rotate(0deg)';
  }
}

// Initialize theme on page load
function initTheme() {
  const savedTheme = localStorage.getItem('theme') || 
                    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  
  // Apply the saved theme
  html.setAttribute('data-theme', savedTheme);
  updateToggleIcon(savedTheme);
  
  // Reinitialize particles with new theme if needed
  if (typeof initParticles === 'function') {
    setTimeout(initParticles, 100);
  }
}

// Toggle theme on button click
themeToggle.addEventListener('click', () => {
  const currentTheme = html.getAttribute('data-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  
  // Update the theme
  html.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  updateToggleIcon(newTheme);
  
  // Reinitialize particles with new theme if needed
  if (typeof initParticles === 'function') {
    setTimeout(initParticles, 100);
  }
});

// Initialize theme when DOM is loaded
document.addEventListener('DOMContentLoaded', initTheme);

    // ======================
    // Particles.js Configuration
    // ======================
    const particlesConfig = {
        light: {
            particles: {
                number: { value: 80, density: { enable: true, value_area: 800 } },
                color: { value: "#3a86ff" },
                shape: { type: "circle" },
                opacity: {
                    value: 0.8,
                    random: false,
                    anim: { enable: true, speed: 1, opacity_min: 0.3, sync: false }
                },
                size: {
                    value: 4,
                    random: true,
                    anim: { enable: true, speed: 4, size_min: 1, sync: false }
                },
                line_linked: {
                    enable: true,
                    distance: 120,
                    color: "#3a86ff",
                    opacity: 0.4,
                    width: 1.5
                },
                move: {
                    enable: true,
                    speed: 3,
                    direction: "none",
                    random: true,
                    straight: false,
                    out_mode: "out",
                    bounce: false
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: { enable: true, mode: "repulse" },
                    onclick: { enable: true, mode: "push" }
                }
            }
        },
        dark: {
            particles: {
                number: { value: 80, density: { enable: true, value_area: 800 } },
                color: { value: "#00F5FF" },
                shape: { type: "circle" },
                opacity: {
                    value: 0.6,
                    random: false,
                    anim: { enable: true, speed: 1, opacity_min: 0.2, sync: false }
                },
                size: {
                    value: 3,
                    random: true,
                    anim: { enable: true, speed: 4, size_min: 0.5, sync: false }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: "#00F5FF",
                    opacity: 0.3,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: "none",
                    random: false,
                    straight: false,
                    out_mode: "out",
                    bounce: false
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: { enable: true, mode: "grab" },
                    onclick: { enable: true, mode: "push" }
                }
            }
        }
    };

    // Initialize particles with current theme
    function initParticles() {
        const currentTheme = html.getAttribute('data-theme') || 'dark';
        const config = particlesConfig[currentTheme];
        
        // Destroy existing instance if any
        if (window.pJSDom && window.pJSDom.length > 0) {
            pJSDom[0].pJS.fn.vendors.destroypJS();
            pJSDom = [];
        }
        
        // Initialize new instance
        if (typeof particlesJS !== 'undefined' && document.getElementById('particles-js')) {
            particlesJS('particles-js', config);
        }
    }

    // Initialize particles on load
    initParticles();

    // ======================
    // Mobile Menu Toggle
    // ======================
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');
    const closeMenu = document.querySelector('.close-menu');
    
    if (hamburger && mobileMenu && closeMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            mobileMenu.classList.toggle('active');
            document.body.style.overflow = 'hidden';
        });
        
        closeMenu.addEventListener('click', () => {
            hamburger.classList.remove('active');
            mobileMenu.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    }

    // ======================
    // Smooth Scrolling
    // ======================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (mobileMenu && mobileMenu.classList.contains('active')) {
                    hamburger.classList.remove('active');
                    mobileMenu.classList.remove('active');
                    document.body.style.overflow = 'auto';
                }
            }
        });
    });

    // ======================
    // Back to Top Button
    // ======================
    const backToTop = document.querySelector('.back-to-top');
    if (backToTop) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        });
        
        backToTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // ======================
    // Header Scroll Effect
    // ======================
    const header = document.querySelector('.header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // ======================
    // Stats Counter Animation
    // ======================
    function animateStats() {
        const statNumbers = document.querySelectorAll('.stat-number');
        
        statNumbers.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-count'));
            const duration = 2000;
            const start = 0;
            const increment = target / (duration / 16);
            let current = start;
            
            const timer = setInterval(() => {
                current += increment;
                stat.textContent = Math.floor(current);
                
                if (current >= target) {
                    stat.textContent = target;
                    clearInterval(timer);
                }
            }, 16);
        });
    }

    const statsSection = document.querySelector('.hero-stats');
    if (statsSection) {
        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateStats();
                    statsObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        statsObserver.observe(statsSection);
    }

    // ======================
    // Testimonial Slider
    // ======================
    const testimonialTrack = document.querySelector('.testimonial-track');
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    const prevBtn = document.querySelector('.slider-prev');
    const nextBtn = document.querySelector('.slider-next');
    const dotsContainer = document.querySelector('.slider-dots');
    
    if (testimonialTrack && testimonialCards.length > 0) {
        let currentIndex = 0;
        const cardWidth = testimonialCards[0].offsetWidth + 32;
        
        // Create dots
        testimonialCards.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.classList.add('slider-dot');
            if (index === 0) dot.classList.add('active');
            dot.addEventListener('click', () => {
                goToSlide(index);
            });
            dotsContainer.appendChild(dot);
        });
        
        function updateSlider() {
            testimonialTrack.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
            
            document.querySelectorAll('.slider-dot').forEach((dot, index) => {
                dot.classList.toggle('active', index === currentIndex);
            });
        }
        
        function goToSlide(index) {
            currentIndex = index;
            updateSlider();
        }
        
        function nextSlide() {
            if (currentIndex < testimonialCards.length - 1) {
                currentIndex++;
            } else {
                currentIndex = 0;
            }
            updateSlider();
        }
        
        function prevSlide() {
            if (currentIndex > 0) {
                currentIndex--;
            } else {
                currentIndex = testimonialCards.length - 1;
            }
            updateSlider();
        }
        
        if (nextBtn) nextBtn.addEventListener('click', nextSlide);
        if (prevBtn) prevBtn.addEventListener('click', prevSlide);
        
        let slideInterval = setInterval(nextSlide, 5000);
        
        testimonialTrack.addEventListener('mouseenter', () => {
            clearInterval(slideInterval);
        });
        
        testimonialTrack.addEventListener('mouseleave', () => {
            slideInterval = setInterval(nextSlide, 5000);
        });
    }

    // ======================
    // Service Card Hover Effect
    // ======================
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });
});

