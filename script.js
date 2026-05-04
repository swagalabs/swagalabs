/* ============================================
   SWAGA LABS — JAVASCRIPT
   ============================================ */

// --- Mobile Navigation ---
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger && navLinks) {
    hamburger.addEventListener('click', function () {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
}

// --- Smooth Scroll ---
document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        var targetId = this.getAttribute('href');
        var targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile nav
            if (navLinks && navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
            }
        }
    });
});

// --- Animated Counter ---
function animateCounter(element) {
    var target = parseInt(element.getAttribute('data-target'), 10);
    var duration = 2000;
    var step = target / (duration / 16);
    var current = 0;

    var timer = setInterval(function () {
        current += step;
        if (current >= target) {
            element.textContent = target + (target === 98 ? '%' : '+');
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// --- Intersection Observer ---
var observerOptions = {
    threshold: 0.3,
    rootMargin: '0px'
};

var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            // Service cards
            if (entry.target.classList.contains('service-card')) {
                var delay = entry.target.getAttribute('data-delay') || 0;
                setTimeout(function () {
                    entry.target.classList.add('visible');
                }, parseInt(delay, 10));
                observer.unobserve(entry.target);
            }

            // Stat numbers
            if (entry.target.classList.contains('stat-number')) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        }
    });
}, observerOptions);

// Observe service cards
document.querySelectorAll('.service-card').forEach(function (card) {
    observer.observe(card);
});

// Observe stat numbers
document.querySelectorAll('.stat-number').forEach(function (stat) {
    observer.observe(stat);
});

// --- Navbar Scroll Effect ---
var navbar = document.querySelector('.navbar');
var lastScroll = 0;

window.addEventListener('scroll', function () {
    var currentScroll = window.pageYOffset;

    if (currentScroll > 50) {
        navbar.style.background = 'rgba(10, 10, 10, 0.95)';
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.5)';
    } else {
        navbar.style.background = 'rgba(10, 10, 10, 0.85)';
        navbar.style.boxShadow = 'none';
    }

    lastScroll = currentScroll;
});

// --- Pixel Cursor Trail ---
var canvas = document.getElementById('pixel-cursor');
if (canvas) {
    var ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    var pixels = [];
    var maxPixels = 30;

    window.addEventListener('resize', function () {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });

    document.addEventListener('mousemove', function (e) {
        pixels.push({
            x: e.clientX,
            y: e.clientY,
            size: 8,
            alpha: 1,
            color: Math.random() > 0.5 ? '#4AFF14' : '#0A0A0A'
        });

        if (pixels.length > maxPixels) {
            pixels.shift();
        }
    });

    function drawPixels() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (var i = 0; i < pixels.length; i++) {
            var p = pixels[i];
            ctx.globalAlpha = p.alpha;
            ctx.fillStyle = p.color;
            ctx.fillRect(
                Math.floor(p.x - p.size / 2),
                Math.floor(p.y - p.size / 2),
                p.size,
                p.size
            );

            p.alpha -= 0.03;
            p.size *= 0.97;
        }

        // Remove dead pixels
        pixels = pixels.filter(function (p) {
            return p.alpha > 0;
        });

        requestAnimationFrame(drawPixels);
    }

    drawPixels();
}

// --- Button Ripple Effect ---
document.querySelectorAll('.btn-main, .btn-outline').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        var rect = this.getBoundingClientRect();
        var ripple = document.createElement('span');
        var size = Math.max(rect.width, rect.height);
        var x = e.clientX - rect.left - size / 2;
        var y = e.clientY - rect.top - size / 2;

        ripple.style.width = size + 'px';
        ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.style.position = 'absolute';
        ripple.style.borderRadius = '0';
        ripple.style.background = 'rgba(74, 255, 20, 0.4)';
        ripple.style.transform = 'scale(0)';
        ripple.style.animation = 'pixelRipple 0.5s ease-out';
        ripple.style.pointerEvents = 'none';

        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);

        setTimeout(function () {
            ripple.remove();
        }, 500);
    });
});

// Add pixel ripple animation
var pixelRippleStyle = document.createElement('style');
pixelRippleStyle.textContent = '@keyframes pixelRipple { to { transform: scale(3); opacity: 0; } }';
document.head.appendChild(pixelRippleStyle);

// --- Parallax on Floating Elements ---
document.addEventListener('mousemove', function (e) {
    var elements = document.querySelectorAll('.float-element');
    var mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
    var mouseY = (e.clientY / window.innerHeight - 0.5) * 2;

    elements.forEach(function (el, index) {
        var speed = (index + 1) * 8;
        var x = mouseX * speed;
        var y = mouseY * speed;
        el.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
    });
});