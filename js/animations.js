// This file would contain additional GSAP animations if needed
// For now, we'll include the basic setup for GSAP animations

document.addEventListener('DOMContentLoaded', function() {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);
    
    // Animate hero elements
    gsap.from('.hero-title, .hero-subtitle', {
        duration: 1,
        y: 50,
        opacity: 0,
        stagger: 0.2,
        ease: 'power3.out'
    });
    
    gsap.from('.hero-actions', {
        duration: 1,
        y: 30,
        opacity: 0,
        delay: 0.5,
        ease: 'power3.out'
    });
    
    // Animate section titles
    gsap.utils.toArray('.section-title').forEach(title => {
        gsap.from(title, {
            scrollTrigger: {
                trigger: title,
                start: 'top 80%',
                toggleActions: 'play none none none'
            },
            x: -50,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out'
        });
    });
    
    // Animate service cards
    gsap.utils.toArray('.service-card').forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 80%',
                toggleActions: 'play none none none'
            },
            y: 50,
            opacity: 0,
            duration: 0.6,
            delay: i * 0.1,
            ease: 'power3.out'
        });
    });
    
    // Animate featured project section
    gsap.from('.project-content', {
        scrollTrigger: {
            trigger: '.featured-project',
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        x: -50,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
    });
    
    gsap.from('.project-preview', {
        scrollTrigger: {
            trigger: '.featured-project',
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        x: 50,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
    });
    
    
    // Animate careers section
    gsap.from('.careers-content', {
        scrollTrigger: {
            trigger: '.careers',
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    });
    
    // Animate testimonial section
    gsap.from('.testimonial-slider', {
        scrollTrigger: {
            trigger: '.testimonials',
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    });
    
    // Animate CTA section
    gsap.from('.cta-content', {
        scrollTrigger: {
            trigger: '.cta',
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    });
});



document.addEventListener('DOMContentLoaded', function() {
    // Initialize Particles.js for services page
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js-services', {
            "particles": {
                "number": {
                    "value": 80,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#00F5FF"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    },
                    "polygon": {
                        "nb_sides": 5
                    }
                },
                "opacity": {
                    "value": 0.5,
                    "random": false,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#00F5FF",
                    "opacity": 0.2,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 2,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "grab"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 140,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        });
    }

    // GSAP Animations for Services Page
    gsap.registerPlugin(ScrollTrigger);

    // Hero text animation
    gsap.from(".services-hero .hero-title, .services-hero .hero-subtitle", {
        duration: 1,
        y: 50,
        opacity: 0,
        stagger: 0.2,
        ease: "power3.out"
    });

    // Floating shapes animation
    gsap.to(".shape-1", {
        duration: 20,
        x: 100,
        y: 50,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });

    gsap.to(".shape-2", {
        duration: 25,
        x: -100,
        y: -50,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });

    gsap.to(".shape-3", {
        duration: 30,
        x: 50,
        y: -30,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });

    // Service cards animation
    gsap.utils.toArray(".service-card").forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: "top 80%",
                toggleActions: "play none none none"
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            delay: i * 0.1,
            ease: "power3.out"
        });
    });

    // Process steps animation
    gsap.utils.toArray(".process-step").forEach((step, i) => {
        gsap.from(step, {
            scrollTrigger: {
                trigger: step,
                start: "top 80%",
                toggleActions: "play none none none"
            },
            x: i % 2 === 0 ? -50 : 50,
            opacity: 0,
            duration: 0.8,
            delay: i * 0.1,
            ease: "power3.out"
        });
    });

    // Tech stack animation
    gsap.utils.toArray(".tech-item").forEach((item, i) => {
        gsap.from(item, {
            scrollTrigger: {
                trigger: item,
                start: "top 90%",
                toggleActions: "play none none none"
            },
            y: 30,
            opacity: 0,
            duration: 0.5,
            delay: i * 0.05,
            ease: "power2.out"
        });
    });

    // CTA section animation
    gsap.from(".cta .cta-title, .cta .cta-subtitle", {
        scrollTrigger: {
            trigger: ".cta",
            start: "top 80%",
            toggleActions: "play none none none"
        },
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out"
    });

    gsap.from(".cta-actions", {
        scrollTrigger: {
            trigger: ".cta",
            start: "top 80%",
            toggleActions: "play none none none"
        },
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: "power3.out"
    });
});


