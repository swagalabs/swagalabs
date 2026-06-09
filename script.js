/* ============================================
   SWAGALABS — Interactive Engine
   ============================================ */

(function () {
    'use strict';

    // --- Preloader ---
    var preloader = document.getElementById('preloader');
    window.addEventListener('load', function () {
        setTimeout(function () {
            preloader.classList.add('hidden');
        }, 2000);
    });

    // --- Custom Cursor ---
    var cursor = document.getElementById('cursor');
    var follower = document.getElementById('cursor-follower');
    var mouseX = 0, mouseY = 0;
    var cursorX = 0, cursorY = 0;
    var followerX = 0, followerY = 0;

    if (window.matchMedia('(pointer: fine)').matches) {
        document.addEventListener('mousemove', function (e) {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        function animateCursor() {
            cursorX += (mouseX - cursorX) * 0.2;
            cursorY += (mouseY - cursorY) * 0.2;
            followerX += (mouseX - followerX) * 0.08;
            followerY += (mouseY - followerY) * 0.08;

            cursor.style.left = cursorX + 'px';
            cursor.style.top = cursorY + 'px';
            follower.style.left = followerX + 'px';
            follower.style.top = followerY + 'px';

            requestAnimationFrame(animateCursor);
        }
        animateCursor();

        // Hover effects on interactive elements
        var hoverTargets = document.querySelectorAll('a, button, [data-cursor]');
        hoverTargets.forEach(function (el) {
            el.addEventListener('mouseenter', function () {
                cursor.classList.add('hovering');
                follower.classList.add('hovering');
            });
            el.addEventListener('mouseleave', function () {
                cursor.classList.remove('hovering');
                follower.classList.remove('hovering');
            });
        });
    }

    // --- Scroll Progress ---
    var scrollProgress = document.getElementById('scroll-progress');
    function updateScrollProgress() {
        var scrollTop = window.pageYOffset;
        var docHeight = document.documentElement.scrollHeight - window.innerHeight;
        var scrollPercent = (scrollTop / docHeight) * 100;
        scrollProgress.style.width = scrollPercent + '%';
    }

    // --- Navbar Scroll ---
    var nav = document.getElementById('nav');
    var lastScrollY = 0;

    function updateNav() {
        var scrollY = window.pageYOffset;
        if (scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
        lastScrollY = scrollY;
    }

    window.addEventListener('scroll', function () {
        updateScrollProgress();
        updateNav();
    }, { passive: true });

    // --- Mobile Menu ---
    var burger = document.getElementById('nav-burger');
    var mobileMenu = document.getElementById('mobile-menu');

    if (burger && mobileMenu) {
        burger.addEventListener('click', function () {
            burger.classList.toggle('active');
            mobileMenu.classList.toggle('active');
            document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
        });

        mobileMenu.querySelectorAll('a, button').forEach(function (el) {
            el.addEventListener('click', function () {
                burger.classList.remove('active');
                mobileMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }

    // --- Smooth Scroll ---
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            var targetId = this.getAttribute('href');
            if (targetId === '#') return;
            e.preventDefault();
            var target = document.querySelector(targetId);
            if (target) {
                var offset = 80;
                var top = target.getBoundingClientRect().top + window.pageYOffset - offset;
                window.scrollTo({ top: top, behavior: 'smooth' });
            }
        });
    });

    // --- Scroll Reveal ---
    var revealObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                // Title words
                var words = entry.target.querySelectorAll('.title-word');
                if (words.length > 0) {
                    words.forEach(function (word, i) {
                        setTimeout(function () {
                            word.classList.add('visible');
                        }, i * 80);
                    });
                }

                // Generic reveal
                entry.target.classList.add('visible');

                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('[data-scroll-reveal]').forEach(function (el) {
        revealObserver.observe(el);
    });

    // --- Animated Counters ---
    function animateCounter(el) {
        var target = parseInt(el.getAttribute('data-count'), 10);
        if (!target) return;
        var duration = 2000;
        var startTime = null;

        function step(timestamp) {
            if (!startTime) startTime = timestamp;
            var progress = Math.min((timestamp - startTime) / duration, 1);
            var eased = 1 - Math.pow(1 - progress, 4); // ease-out quart
            var current = Math.floor(eased * target);
            el.textContent = current.toLocaleString();
            if (progress < 1) {
                requestAnimationFrame(step);
            } else {
                el.textContent = target.toLocaleString();
            }
        }
        requestAnimationFrame(step);
    }

    var counterObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('[data-count]').forEach(function (el) {
        counterObserver.observe(el);
    });

    // --- Tech Bars Animation ---
    var barObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                var fills = entry.target.querySelectorAll('.tech-bar-fill');
                fills.forEach(function (fill, i) {
                    setTimeout(function () {
                        var width = fill.getAttribute('data-width');
                        fill.style.width = width + '%';
                    }, i * 150);
                });
                entry.target.classList.add('visible');
                barObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll('.tech-card').forEach(function (card) {
        barObserver.observe(card);
    });

    // --- 3D Tilt Effect on Trend Cards ---
    document.querySelectorAll('[data-tilt]').forEach(function (card) {
        card.addEventListener('mousemove', function (e) {
            var rect = card.getBoundingClientRect();
            var x = e.clientX - rect.left;
            var y = e.clientY - rect.top;
            var centerX = rect.width / 2;
            var centerY = rect.height / 2;
            var rotateX = (y - centerY) / centerY * -6;
            var rotateY = (x - centerX) / centerX * 6;

            card.style.transform = 'perspective(1000px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg) translateY(-4px)';

            // Spotlight effect
            card.style.setProperty('--mouse-x', x + 'px');
            card.style.setProperty('--mouse-y', y + 'px');
        });

        card.addEventListener('mouseleave', function () {
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)';
        });
    });

    // --- Culture Horizontal Drag Scroll ---
    var cultureScroll = document.getElementById('culture-scroll');
    if (cultureScroll) {
        var isDown = false;
        var startX;
        var scrollLeft;

        cultureScroll.addEventListener('mousedown', function (e) {
            isDown = true;
            cultureScroll.style.cursor = 'grabbing';
            startX = e.pageX - cultureScroll.offsetLeft;
            scrollLeft = cultureScroll.scrollLeft;
        });

        cultureScroll.addEventListener('mouseleave', function () {
            isDown = false;
            cultureScroll.style.cursor = 'grab';
        });

        cultureScroll.addEventListener('mouseup', function () {
            isDown = false;
            cultureScroll.style.cursor = 'grab';
        });

        cultureScroll.addEventListener('mousemove', function (e) {
            if (!isDown) return;
            e.preventDefault();
            var x = e.pageX - cultureScroll.offsetLeft;
            var walk = (x - startX) * 2;
            cultureScroll.scrollLeft = scrollLeft - walk;
        });
    }

    // --- Manifesto Scroll Text Reveal ---
    var manifestoSection = document.getElementById('manifesto');
    var manifestoWords = document.querySelectorAll('.manifesto-word');

    function updateManifesto() {
        if (!manifestoSection) return;
        var rect = manifestoSection.getBoundingClientRect();
        var sectionHeight = manifestoSection.offsetHeight;
        var windowHeight = window.innerHeight;

        // Progress: 0 when section top hits viewport bottom, 1 when section bottom leaves viewport top
        var scrolled = -rect.top;
        var totalScroll = sectionHeight - windowHeight;
        var progress = Math.max(0, Math.min(1, scrolled / totalScroll));

        manifestoWords.forEach(function (word, i) {
            var wordProgress = i / manifestoWords.length;
            if (progress >= wordProgress) {
                word.classList.add('active');
            } else {
                word.classList.remove('active');
            }
        });
    }

    window.addEventListener('scroll', updateManifesto, { passive: true });

    // --- Radar Filters ---
    var radarFilters = document.querySelectorAll('.radar-filter');
    var radarItems = document.querySelectorAll('.radar-item');

    radarFilters.forEach(function (filter) {
        filter.addEventListener('click', function () {
            radarFilters.forEach(function (f) { f.classList.remove('active'); });
            filter.classList.add('active');

            var category = filter.getAttribute('data-filter');

            radarItems.forEach(function (item) {
                if (category === 'all' || item.getAttribute('data-category') === category) {
                    item.classList.remove('hidden');
                } else {
                    item.classList.add('hidden');
                }
            });
        });
    });

    // Radar items animation
    var radarObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                var items = entry.target.querySelectorAll('.radar-item');
                items.forEach(function (item, i) {
                    setTimeout(function () {
                        item.classList.add('animated');
                    }, i * 50);
                });
                radarObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    var radarGrid = document.getElementById('radar-grid');
    if (radarGrid) {
        radarObserver.observe(radarGrid);
    }

    // --- Hero Particles ---
    var particleCanvas = document.getElementById('hero-particles');
    if (particleCanvas) {
        var pCtx = particleCanvas.getContext('2d');
        var particles = [];
        var particleCount = 80;
        var connections = [];

        function resizeParticleCanvas() {
            particleCanvas.width = window.innerWidth;
            particleCanvas.height = window.innerHeight;
        }
        resizeParticleCanvas();
        window.addEventListener('resize', resizeParticleCanvas);

        function Particle() {
            this.x = Math.random() * particleCanvas.width;
            this.y = Math.random() * particleCanvas.height;
            this.vx = (Math.random() - 0.5) * 0.5;
            this.vy = (Math.random() - 0.5) * 0.5;
            this.radius = Math.random() * 1.5 + 0.5;
            this.opacity = Math.random() * 0.5 + 0.1;
        }

        for (var i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }

        function drawParticles() {
            pCtx.clearRect(0, 0, particleCanvas.width, particleCanvas.height);

            // Draw connections
            for (var i = 0; i < particles.length; i++) {
                for (var j = i + 1; j < particles.length; j++) {
                    var dx = particles[i].x - particles[j].x;
                    var dy = particles[i].y - particles[j].y;
                    var dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < 120) {
                        var opacity = (1 - dist / 120) * 0.15;
                        pCtx.strokeStyle = 'rgba(205, 255, 0, ' + opacity + ')';
                        pCtx.lineWidth = 0.5;
                        pCtx.beginPath();
                        pCtx.moveTo(particles[i].x, particles[i].y);
                        pCtx.lineTo(particles[j].x, particles[j].y);
                        pCtx.stroke();
                    }
                }
            }

            // Draw particles
            for (var i = 0; i < particles.length; i++) {
                var p = particles[i];

                p.x += p.vx;
                p.y += p.vy;

                if (p.x < 0 || p.x > particleCanvas.width) p.vx *= -1;
                if (p.y < 0 || p.y > particleCanvas.height) p.vy *= -1;

                pCtx.beginPath();
                pCtx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                pCtx.fillStyle = 'rgba(205, 255, 0, ' + p.opacity + ')';
                pCtx.fill();
            }

            requestAnimationFrame(drawParticles);
        }
        drawParticles();

        // Mouse interaction with particles
        document.addEventListener('mousemove', function (e) {
            for (var i = 0; i < particles.length; i++) {
                var p = particles[i];
                var dx = e.clientX - p.x;
                var dy = e.clientY - p.y;
                var dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < 150) {
                    var force = (150 - dist) / 150;
                    p.vx -= (dx / dist) * force * 0.3;
                    p.vy -= (dy / dist) * force * 0.3;
                }
            }
        });
    }

    // --- Email Form Easter Egg ---
    var ctaInput = document.querySelector('.cta-input');
    var ctaSubmit = document.querySelector('.cta-submit');
    if (ctaSubmit && ctaInput) {
        ctaSubmit.addEventListener('click', function () {
            if (ctaInput.value && ctaInput.value.includes('@')) {
                ctaInput.value = '';
                ctaInput.placeholder = 'You\'re in! Welcome aboard.';
                ctaSubmit.innerHTML = '<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M4 10l4 4 8-8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
                ctaSubmit.style.background = '#00FF88';
            }
        });
    }

    // --- Keyboard Shortcut: Press 'T' to jump to trends ---
    document.addEventListener('keydown', function (e) {
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
        var map = {
            't': '#trends',
            'c': '#culture',
            'm': '#manifesto',
            'r': '#radar'
        };
        var target = map[e.key.toLowerCase()];
        if (target) {
            var el = document.querySelector(target);
            if (el) {
                var offset = 80;
                var top = el.getBoundingClientRect().top + window.pageYOffset - offset;
                window.scrollTo({ top: top, behavior: 'smooth' });
            }
        }
    });

})();
