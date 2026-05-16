/**
 * Monique Freitas Advocacia
 * JavaScript Vanilla ES6 - Interações e Animações
 */

document.addEventListener('DOMContentLoaded', () => {
    // ============================================
    // NAVBAR SCROLL EFFECT + SCROLL INTELIGENTE
    // ============================================
    const navbar = document.getElementById('navbar');
    let lastScrollY = window.scrollY;

    const handleNavbarScroll = () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > 80) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Esconde ao rolar para baixo, mostra ao rolar para cima
        if (currentScrollY > lastScrollY && currentScrollY > 200) {
            navbar.classList.add('hide-nav');
        } else {
            navbar.classList.remove('hide-nav');
        }

        lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleNavbarScroll, { passive: true });

    // ============================================
    // DRAWER MOBILE PREMIUM
    // ============================================
    const navToggle = document.getElementById('navToggle');
    const navDrawer = document.getElementById('navDrawer');
    const navOverlay = document.getElementById('navOverlay');
    const drawerClose = document.getElementById('drawerClose');

    const openDrawer = () => {
        navDrawer.classList.add('active');
        navOverlay.classList.add('active');
        navDrawer.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    };

    const closeDrawer = () => {
        navDrawer.classList.remove('active');
        navOverlay.classList.remove('active');
        navDrawer.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    };

    if (navToggle && navDrawer) {
        navToggle.addEventListener('click', openDrawer);
        drawerClose && drawerClose.addEventListener('click', closeDrawer);
        navOverlay && navOverlay.addEventListener('click', closeDrawer);

        navDrawer.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', closeDrawer);
        });
    }

    // ============================================
    // INTERSECTION OBSERVER - REVEAL ANIMATIONS
    // ============================================
    const revealElements = document.querySelectorAll(
        '.section-header, .pain-content, .accordion, .enchantment-split, ' +
        '.about-content, .faq-list, .location-grid, .cta-grid'
    );

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.12,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(40px)';
        el.style.transition = 'all 0.7s ease-out';
        revealObserver.observe(el);
    });

    // ============================================
    // DECORATIVE LINE ANIMATION
    // ============================================
    const decorativeLine = document.querySelector('.decorative-line');
    
    if (decorativeLine) {
        const lineObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    lineObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        lineObserver.observe(decorativeLine);
    }

    // ============================================
    // NEO CARDS E DEPOIMENTOS — ANIMAÇÕES COM STAGGER
    // ============================================
    const neoCards = document.querySelectorAll('.neo-card');

    const neoObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const card = entry.target;
                const index = Array.from(neoCards).indexOf(card);
                setTimeout(() => {
                    card.classList.add('animated');
                }, index * 100);
                neoObserver.unobserve(card);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px'
    });

    neoCards.forEach(card => neoObserver.observe(card));

    // Cards de Depoimento - Animação Horizontal
    const testimonialCards = document.querySelectorAll('.testimonial-card');

    const testimonialObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const card = entry.target;
                const index = Array.from(testimonialCards).indexOf(card) % 6; // Stagger em grupos de 6 (originais + duplicados limitados)
                setTimeout(() => {
                    card.classList.add('animated');
                }, index * 150 + 200); // Atraso base + escalonado
                testimonialObserver.unobserve(card);
            }
        });
    }, {
        threshold: 0.2, // Disparar quando 20% estiver visível
        rootMargin: '0px 0px 50px 0px' // Um pouco de margem extra horizontal e vertical
    });

    testimonialCards.forEach(card => testimonialObserver.observe(card));

    // ============================================
    // ACCORDION - SERVIÇOS
    // ============================================
    const accordionItems = document.querySelectorAll('.accordion-item');

    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        
        header.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all items
            accordionItems.forEach(i => i.classList.remove('active'));
            
            // Open clicked item if it wasn't active
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });

    // ============================================
    // FAQ ACCORDION
    // ============================================
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all items
            faqItems.forEach(i => i.classList.remove('active'));
            
            // Open clicked item if it wasn't active
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });

    // ============================================
    // COUNTER ANIMATION
    // ============================================
    const counters = document.querySelectorAll('.counter-number[data-target]');
    
    const animateCounter = (counter) => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 1800;
        const startTime = performance.now();
        const startValue = 0;

        const updateCounter = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Ease-out function
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const currentValue = Math.floor(startValue + (target - startValue) * easeOut);
            
            counter.textContent = currentValue;
            
            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        };

        requestAnimationFrame(updateCounter);
    };

    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                animateCounter(counter);
                counterObserver.unobserve(counter);
            }
        });
    }, { threshold: 0.3 });

    counters.forEach(counter => {
        counterObserver.observe(counter);
    });

    // ============================================
    // CARROSSEL MOBILE — SOBRE (DOTS)
    // ============================================
    const mobileCarousel = document.querySelector('.mobile-carousel');
    const carouselDots = document.querySelectorAll('.carousel-dot');

    if (mobileCarousel && carouselDots.length) {
        const items = mobileCarousel.querySelectorAll('.mobile-carousel-item');

        const updateDots = () => {
            const scrollLeft = mobileCarousel.scrollLeft;
            const itemWidth = items[0].offsetWidth + 16; // 16 = gap (1rem)
            const index = Math.round(scrollLeft / itemWidth);
            carouselDots.forEach((dot, i) => dot.classList.toggle('active', i === index));
        };

        mobileCarousel.addEventListener('scroll', updateDots, { passive: true });
    }

    // ============================================
    // TESTIMONIALS MARQUEE - PAUSE ON HOVER/TOUCH + DRAG MOBILE
    // ============================================
    const marqueeTrack = document.querySelector('.marquee-track');
    const testimonialMarquee = document.querySelector('.testimonials-marquee');

    if (marqueeTrack) {
        marqueeTrack.addEventListener('mouseenter', () => {
            marqueeTrack.style.animationPlayState = 'paused';
        });
        marqueeTrack.addEventListener('mouseleave', () => {
            marqueeTrack.style.animationPlayState = 'running';
        });
    }

    // Drag-to-scroll nos depoimentos (mobile e desktop)
    if (testimonialMarquee && marqueeTrack) {
        let isDragging = false;
        let startX = 0;
        let animStart = 0;

        const getAnimOffset = () => {
            const style = window.getComputedStyle(marqueeTrack);
            const matrix = new DOMMatrix(style.transform);
            return matrix.m41;
        };

        testimonialMarquee.addEventListener('mousedown', (e) => {
            isDragging = true;
            startX = e.pageX;
            animStart = getAnimOffset();
            marqueeTrack.style.animationPlayState = 'paused';
            testimonialMarquee.classList.add('is-dragging');
        });

        window.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            const delta = e.pageX - startX;
            marqueeTrack.style.transform = `translateX(${animStart + delta}px)`;
        });

        window.addEventListener('mouseup', () => {
            if (!isDragging) return;
            isDragging = false;
            testimonialMarquee.classList.remove('is-dragging');
            marqueeTrack.style.animationPlayState = 'running';
        });

        // Touch
        testimonialMarquee.addEventListener('touchstart', (e) => {
            startX = e.touches[0].pageX;
            animStart = getAnimOffset();
            marqueeTrack.style.animationPlayState = 'paused';
        }, { passive: true });

        testimonialMarquee.addEventListener('touchmove', (e) => {
            const delta = e.touches[0].pageX - startX;
            marqueeTrack.style.transform = `translateX(${animStart + delta}px)`;
        }, { passive: true });

        testimonialMarquee.addEventListener('touchend', () => {
            setTimeout(() => {
                marqueeTrack.style.animationPlayState = 'running';
            }, 1500);
        }, { passive: true });
    }

    // ============================================
    // SMOOTH SCROLL FOR ANCHOR LINKS
    // ============================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ============================================
    // FORM SUBMISSION
    // ============================================
    const contactForm = document.getElementById('contactForm');

    // Mascara de telefone: (XX) XXXXX-XXXX
    const telefoneInput = document.getElementById('telefone');
    if (telefoneInput) {
        telefoneInput.addEventListener('input', (e) => {
            let v = e.target.value.replace(/\D/g, '').slice(0, 11);
            if (v.length > 6) {
                v = `(${v.slice(0,2)}) ${v.slice(2,7)}-${v.slice(7)}`;
            } else if (v.length > 2) {
                v = `(${v.slice(0,2)}) ${v.slice(2)}`;
            } else if (v.length > 0) {
                v = `(${v}`;
            }
            e.target.value = v;
        });
    }

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const nome     = document.getElementById('nome').value.trim();
            const email    = document.getElementById('email').value.trim();
            const telefone = document.getElementById('telefone').value.trim();
            const assunto  = document.getElementById('assunto');
            const assuntoTexto = assunto.options[assunto.selectedIndex].text;
            const mensagem = document.getElementById('mensagem').value.trim();

            const linhas = [
                `Olá, me chamo ${nome}, vim através do site e gostaria de uma informação.`,
                ``,
                `- E-mail: ${email}`,
                `- Telefone: ${telefone}`,
                `- Assunto/Serviço: ${assuntoTexto}`,
            ];
            if (mensagem) linhas.push(`- Mensagem/Situação: ${mensagem}`);

            const texto = encodeURIComponent(linhas.join('\n'));
            window.open(`https://wa.me/5521982942433?text=${texto}`, '_blank');

            contactForm.reset();
        });
    }

    // ============================================
    // HERO PARALLAX EFFECT
    // ============================================
    const heroPhoto = document.getElementById('heroPhoto');
    
    if (heroPhoto && window.matchMedia('(min-width: 1024px)').matches) {
        let ticking = false;
        
        window.addEventListener('scroll', () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const scrolled = window.pageYOffset;
                    const rate = scrolled * 0.15;
                    
                    if (scrolled < window.innerHeight) {
                        heroPhoto.style.transform = `scale(1) translateY(${rate}px)`;
                    }
                    
                    ticking = false;
                });
                
                ticking = true;
            }
        }, { passive: true });
    }

    // ============================================
    // PRELOAD IMAGES (apenas imagens acima da dobra)
    // ============================================
    const preloadImages = () => {
        const aboveFoldImages = [
            'imagens/hero-monique-freitas-advocacia-tributaria-campo-grande-rj (4).webp',
            'imagens/logo-header.webp'
        ];

        aboveFoldImages.forEach(src => {
            const preloadLink = document.createElement('link');
            preloadLink.rel = 'preload';
            preloadLink.as = 'image';
            preloadLink.href = src;
            preloadLink.setAttribute('fetchpriority', 'high');
            document.head.appendChild(preloadLink);
        });
    };

    // Preload after initial render
    setTimeout(preloadImages, 100);

    // ============================================
    // PERFORMANCE: REDUCE MOTION
    // ============================================
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    if (prefersReducedMotion.matches) {
        // Disable animations for users who prefer reduced motion
        document.documentElement.style.setProperty('--ease-smooth', 'linear');
        document.documentElement.style.setProperty('--ease-standard', 'linear');
        
        const animatedElements = document.querySelectorAll('.marquee-content, .marquee-track');
        animatedElements.forEach(el => {
            el.style.animation = 'none';
        });
    }
});

// ============================================
// LAZY LOAD IMAGES (NATIVE)
// ============================================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                
                imageObserver.unobserve(img);
            }
        });
    }, {
        rootMargin: '50px 0px',
        threshold: 0.01
    });

    // Observe images with data-src attribute
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ============================================
// ERROR HANDLING
// ============================================
window.addEventListener('error', (e) => {
    console.error('JavaScript error:', e.error);
});

// Handle unhandled promise rejections
window.addEventListener('unhandledrejection', (e) => {
    console.error('Unhandled promise rejection:', e.reason);
});
