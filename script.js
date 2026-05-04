/* ============================================
   SWAGA LABS — JAVASCRIPT
   ============================================ */

// --- Translations Data ---
const translations = {
    ru: {
        nav_home: "Главная",
        nav_services: "Услуги",
        nav_vibe: "Вайб",
        nav_contact: "Контакт",
        btn_order: "ЗАКАЗАТЬ 🔥",
        hero_title_1: "МЫ ДЕЛАЕМ",
        hero_title_2: "DIGITAL SWAG",
        hero_title_3: "БЕЗ КОМПРОМИССОВ",
        hero_subtitle_1: "Леопардовый принт в коде. Пиксельная точность в дизайне.",
        hero_subtitle_2: "Твоя идея + наш стиль = 🔥🔥",
        hero_btn_1: "НАЧАТЬ ПРОЕКТ 💎",
        hero_btn_2: "СМОТРЕТЬ РАБОТЫ 👀",
        services_label: "▸ ЧТО МЫ ДЕЛАЕМ",
        services_title_1: "НАШИ",
        services_title_2: "УСЛУГИ",
        service_1_title: "WEB ДИЗАЙН",
        service_1_desc: "Дизайн, от которого конкуренты плачут в подушку. Каждый пиксель на своём месте.",
        service_2_title: "РАЗРАБОТКА",
        service_2_desc: "Чистый код, бешеная скорость. Мы строим не сайты — мы строим империи.",
        service_3_title: "МОБИЛЬНЫЕ ПРИЛОЖЕНИЯ",
        service_3_desc: "iOS и Android приложения, которые пользователи не удалят даже случайно.",
        service_4_title: "БРЕНДИНГ",
        service_4_desc: "Бренд настолько огненный, что нужен огнетушитель. Полная айдентика с нуля.",
        card_link: "ПОДРОБНЕЕ →",
        stat_1_label: "ПРОЕКТОВ",
        stat_2_label: "% КЛИЕНТОВ ДОВОЛЬНЫ",
        stat_3_label: "В КОМАНДЕ",
        stat_4_label: "НАГРАД",
        vibe_label: "▸ НАШ ВАЙБ",
        vibe_title_1: "НЕ ПРОСТО КОД —",
        vibe_title_2: "ОБРАЗ ЖИЗНИ",
        vibe_text: "Мы не пишем код. Мы создаём цифровой флекс. Каждый проект — это произведение искусства, завернутое в леопард и поданное с пиксельной точностью.",
        vibe_tag_1: "🐆 LEOPARD ENERGY",
        vibe_tag_2: "👾 PIXEL PERFECT",
        vibe_tag_3: "⚡ LIGHTNING FAST",
        vibe_tag_4: " PREMIUM QUALITY",
        vibe_tag_5: "🔥 NO CAP",
        vibe_tag_6: "😎 100% SWAGA",
        testimonials_label: "▸ ОТЗЫВЫ",
        testimonials_title_1: "ЧТО ГОВОРЯТ",
        testimonials_title_2: "КЛИЕНТЫ",
        testimonial_1: "\"Swaga Labs перевернули мой бизнес. Мой сайт теперь выглядит дороже, чем мой автомобиль.\"",
        testimonial_1_role: "CEO, TechCorp",
        testimonial_2: "\"Ребята, это не просто разработка. Это искусство. Мой интернет-магазин стал выглядеть как Gucci.\"",
        testimonial_2_role: "Founder, FashionHub",
        testimonial_3: "\"Заказал лендинг — получил шедевр. Конверсия выросла на 300%. Леопард работает!\"",
        testimonial_3_role: "CMO, StartupXYZ",
        cta_label: "▸ ГОТОВ К ВАЙБУ?",
        cta_title_1: "ДАВАЙ СОЗДАДИМ",
        cta_title_2: "ЧТО-ТО ЛЕГЕНДАРНОЕ",
        cta_subtitle: "Твоя идея + наша команда = 💥 БУМ 💥",
        cta_btn_1: "НАПИСАТЬ НАМ 💬",
        cta_btn_2: "ЗАБРОНИРОВАТЬ ЗВОНОК 📞",
        cta_location: "📍 Москва, Россия",
        footer_tagline: "Стиль. Код. Леопард.",
        footer_company: "КОМПАНИЯ",
        footer_about: "О нас",
        footer_careers: "Карьера",
        footer_blog: "Блог",
        footer_services: "УСЛУГИ",
        footer_web_design: "Веб-дизайн",
        footer_development: "Разработка",
        footer_branding: "Брендинг",
        footer_contacts: "КОНТАКТЫ",
        footer_telegram: "Telegram",
        footer_copyright: "© 2026 Swaga Labs. Все права защищены. Сделано с 🐆 и кофеином."
    },
    en: {
        nav_home: "Home",
        nav_services: "Services",
        nav_vibe: "Vibe",
        nav_contact: "Contact",
        btn_order: "ORDER NOW 🔥",
        hero_title_1: "WE CREATE",
        hero_title_2: "DIGITAL SWAG",
        hero_title_3: "NO COMPROMISES",
        hero_subtitle_1: "Leopard print in code. Pixel-perfect design.",
        hero_subtitle_2: "Your idea + our style = 🔥🔥",
        hero_btn_1: "START PROJECT 💎",
        hero_btn_2: "VIEW WORKS 👀",
        services_label: "▸ WHAT WE DO",
        services_title_1: "OUR",
        services_title_2: "SERVICES",
        service_1_title: "WEB DESIGN",
        service_1_desc: "Design that makes your competitors cry into their pillows. Every pixel in its place.",
        service_2_title: "DEVELOPMENT",
        service_2_desc: "Clean code, insane speed. We don't build websites — we build empires.",
        service_3_title: "MOBILE APPS",
        service_3_desc: "iOS and Android apps that users won't delete even by accident.",
        service_4_title: "BRANDING",
        service_4_desc: "A brand so fiery you'll need a fire extinguisher. Full identity from scratch.",
        card_link: "LEARN MORE →",
        stat_1_label: "PROJECTS",
        stat_2_label: "% CLIENTS SATISFIED",
        stat_3_label: "IN TEAM",
        stat_4_label: "AWARDS",
        vibe_label: "▸ OUR VIBE",
        vibe_title_1: "NOT JUST CODE —",
        vibe_title_2: "LIFESTYLE",
        vibe_text: "We don't write code. We create digital flex. Every project is a work of art, wrapped in leopard and served with pixel precision.",
        vibe_tag_1: "🐆 LEOPARD ENERGY",
        vibe_tag_2: "👾 PIXEL PERFECT",
        vibe_tag_3: "⚡ LIGHTNING FAST",
        vibe_tag_4: " PREMIUM QUALITY",
        vibe_tag_5: "🔥 NO CAP",
        vibe_tag_6: "😎 100% SWAGA",
        testimonials_label: "▸ TESTIMONIALS",
        testimonials_title_1: "WHAT",
        testimonials_title_2: "CLIENTS SAY",
        testimonial_1: "\"Swaga Labs turned my business upside down. My website now looks more expensive than my car.\"",
        testimonial_1_role: "CEO, TechCorp",
        testimonial_2: "\"Guys, this isn't just development. It's art. My online store now looks like Gucci.\"",
        testimonial_2_role: "Founder, FashionHub",
        testimonial_3: "\"Ordered a landing page — got a masterpiece. Conversion increased by 300%. Leopard works!\"",
        testimonial_3_role: "CMO, StartupXYZ",
        cta_label: "▸ READY FOR THE VIBE?",
        cta_title_1: "LET'S CREATE",
        cta_title_2: "SOMETHING LEGENDARY",
        cta_subtitle: "Your idea + our team = 💥 BOOM 💥",
        cta_btn_1: "WRITE TO US 💬",
        cta_btn_2: "BOOK A CALL 📞",
        cta_location: "📍 Moscow, Russia",
        footer_tagline: "Style. Code. Leopard.",
        footer_company: "COMPANY",
        footer_about: "About Us",
        footer_careers: "Careers",
        footer_blog: "Blog",
        footer_services: "SERVICES",
        footer_web_design: "Web Design",
        footer_development: "Development",
        footer_branding: "Branding",
        footer_contacts: "CONTACTS",
        footer_telegram: "Telegram",
        footer_copyright: "© 2026 Swaga Labs. All rights reserved. Made with 🐆 and caffeine."
    },
    lt: {
        nav_home: "Pagrindinis",
        nav_services: "Paslaugos",
        nav_vibe: "Nuotaika",
        nav_contact: "Kontaktai",
        btn_order: "UŽSAKYTI 🔥",
        hero_title_1: "MES KURIAME",
        hero_title_2: "DIGITAL SWAG",
        hero_title_3: "BEI KOMPROMISŲ",
        hero_subtitle_1: "Leopardo raštas kode. Pikselių tikslumas dizaine.",
        hero_subtitle_2: "Tavo idėja + mūsų stilius = 🔥🔥",
        hero_btn_1: "PRADĖTI PROJEKTĄ 💎",
        hero_btn_2: "ŽIŪRĖTI DARBUS 👀",
        services_label: "▸ KĄ MES DAROME",
        services_title_1: "MŪSŲ",
        services_title_2: "PASLAUGOS",
        service_1_title: "WEB DIZAINAS",
        service_1_desc: "Dizainas, nuo kurio konkurentai verkia į pagalvę. Kiekvienas pikselis savo vietoje.",
        service_2_title: "KŪRIMAS",
        service_2_desc: "Švarus kodas, pašėlęs greitis. Mes kuriame ne svetaines — mes kuriame imperijas.",
        service_3_title: "MOBILIOS PROGRAMĖLĖS",
        service_3_desc: "iOS ir Android programėlės, kurių vartotojai neištrins net atsitiktinai.",
        service_4_title: "PREKĖS ŽENKLAS",
        service_4_desc: "Prekės ženklas toks ugningas, kad reikia gesintuvo. Pilnas identitetas nuo nulio.",
        card_link: "SUŽINOTI DAUGIAU →",
        stat_1_label: "PROJEKTAI",
        stat_2_label: "% KLIENTŲ PATENKINTI",
        stat_3_label: "KOMANDOJE",
        stat_4_label: "APIBDOVANIJIMAI",
        vibe_label: "▸ MŪSŲ NUOTAIKA",
        vibe_title_1: "NE TIK KODAS —",
        vibe_title_2: "GYVENIMO BŪDAS",
        vibe_text: "Mes nerašome kodo. Mes kuriame skaitmeninį fleksą. Kiekvienas projektas yra meno kūrinys, suvyniotas į leopardą ir patiektas su pikselių tikslumu.",
        vibe_tag_1: "🐆 LEOPARDO ENERGIJA",
        vibe_tag_2: "👾 TOKS KAIP PIKSELIS",
        vibe_tag_3: "⚡ ŽAIBIŠKAI GREITAS",
        vibe_tag_4: " PREMIUM KOKYBĖ",
        vibe_tag_5: "🔥 BE MELŲ",
        vibe_tag_6: "😎 100% SWAGA",
        testimonials_label: "▸ ATsiliepimai",
        testimonials_title_1: "KĄ SAKO",
        testimonials_title_2: "KLIENTAI",
        testimonial_1: "\"Swaga Labs apvertė mano verslą aukštyn kojomis. Mano svetainė dabar atrodo brangiau nei mano automobilis.\"",
        testimonial_1_role: "CEO, TechCorp",
        testimonial_2: "\"Vyrukai, tai ne tik kūrimas. Tai menas. Mano internetinė parduotuvė dabar atrodo kaip Gucci.\"",
        testimonial_2_role: "Įkūrėjas, FashionHub",
        testimonial_3: "\"Užsakiau nukreipimo puslapį — gavau šedevrą. Konversija išaugo 300%. Leopardas veikia!\"",
        testimonial_3_role: "CMO, StartupXYZ",
        cta_label: "▸ PASIRENGĘ NUOTAIKAI?",
        cta_title_1: "SUKURKIME",
        cta_title_2: "KĄ NORS LEGENDARaus",
        cta_subtitle: "Tavo idėja + mūsų komanda = 💥 BUM 💥",
        cta_btn_1: "RAŠYTI MUMS 💬",
        cta_btn_2: "REZERVUOTI SKAMBUČIĄ 📞",
        cta_location: "📍 Maskva, Rusija",
        footer_tagline: "Stilius. Kodas. Leopards.",
        footer_company: "ĮMONĖ",
        footer_about: "Apie Mus",
        footer_careers: "Karjera",
        footer_blog: "Tinklaraštis",
        footer_services: "PASLAUGOS",
        footer_web_design: "Web Dizainas",
        footer_development: "Kūrimas",
        footer_branding: "Prekės Ženklas",
        footer_contacts: "KONTAKTAI",
        footer_telegram: "Telegram",
        footer_copyright: "© 2026 Swaga Labs. Visos teisės saugomos. Sukurta su 🐆 ir kofeinu."
    },
    ua: {
        nav_home: "Головна",
        nav_services: "Послуги",
        nav_vibe: "Вайб",
        nav_contact: "Контакт",
        btn_order: "ЗАМОВИТИ 🔥",
        hero_title_1: "МИ СТВОРЮЄМО",
        hero_title_2: "DIGITAL SWAG",
        hero_title_3: "БЕЗ КОМПРОМІСІВ",
        hero_subtitle_1: "Леопардовий принт у коді. Піксельна точність у дизайні.",
        hero_subtitle_2: "Твоя ідея + наш стиль = 🔥🔥",
        hero_btn_1: "ПОЧАТИ ПРОЄКТ 💎",
        hero_btn_2: "ДИВИТИСЬ РОБОТИ 👀",
        services_label: "▸ ЩО МИ РОБИМО",
        services_title_1: "НАШІ",
        services_title_2: "ПОСЛУГИ",
        service_1_title: "WEB ДИЗАЙН",
        service_1_desc: "Дизайн, від якого конкуренти плачуть у подушку. Кожен піксель на своєму місці.",
        service_2_title: "РОЗРОБКА",
        service_2_desc: "Чистий код, шалена швидкість. Ми будуємо не сайти — ми будуємо імперії.",
        service_3_title: "МОБІЛЬНІ ДОДАТКИ",
        service_3_desc: "iOS та Android додатки, які користувачі не видалить навіть випадково.",
        service_4_title: "БРЕНДИНГ",
        service_4_desc: "Бренд настільки вогненний, що потрібен вогнегасник. Повна айдентика з нуля.",
        card_link: "ДЕТАЛЬНІШЕ →",
        stat_1_label: "ПРОЄКТІВ",
        stat_2_label: "% КЛІЄНТІВ ЗАДОВОЛЕНІ",
        stat_3_label: "В КОМАНДІ",
        stat_4_label: "НАГОРОД",
        vibe_label: "▸ НАШ ВАЙБ",
        vibe_title_1: "НЕ ПРОСТО КОД —",
        vibe_title_2: "СПОСІБ ЖИТТЯ",
        vibe_text: "Ми не пишемо код. Ми створюємо цифровий флекс. Кожен проєкт — це витвір мистецтва, загорнутий в леопард і поданий з піксельною точністю.",
        vibe_tag_1: "🐆 LEOPARD ENERGY",
        vibe_tag_2: "👾 PIXEL PERFECT",
        vibe_tag_3: "⚡ LIGHTNING FAST",
        vibe_tag_4: " PREMIUM QUALITY",
        vibe_tag_5: "🔥 NO CAP",
        vibe_tag_6: "😎 100% SWAGA",
        testimonials_label: "▸ ВІДГУКИ",
        testimonials_title_1: "ЩО ГОВОРЯТЬ",
        testimonials_title_2: "КЛІЄНТИ",
        testimonial_1: "\"Swaga Labs перевернули мій бізнес. Мій сайт тепер виглядає дорожче, ніж мій автомобіль.\"",
        testimonial_1_role: "CEO, TechCorp",
        testimonial_2: "\"Хлопці, це не просто розробка. Це мистецтво. Мій інтернет-магазин став виглядати як Gucci.\"",
        testimonial_2_role: "Founder, FashionHub",
        testimonial_3: "\"Замовив лендінг — отримав шедевр. Конверсія зросла на 300%. Леопард працює!\"",
        testimonial_3_role: "CMO, StartupXYZ",
        cta_label: "▸ ГОТОВИЙ ДО ВАЙБУ?",
        cta_title_1: "ДАВАЙ СТВОРИМО",
        cta_title_2: "ЩОСЬ ЛЕГЕНДАРНЕ",
        cta_subtitle: "Твоя ідея + наша команда = 💥 БУМ 💥",
        cta_btn_1: "НАПИСАТИ НАМ 💬",
        cta_btn_2: "ЗАБРОНЮВАТИ ДЗВІНОК 📞",
        cta_location: "📍 Москва, Росія",
        footer_tagline: "Стиль. Код. Леопард.",
        footer_company: "КОМПАНІЯ",
        footer_about: "Про нас",
        footer_careers: "Кар'єра",
        footer_blog: "Блог",
        footer_services: "ПОСЛУГИ",
        footer_web_design: "Веб-дизайн",
        footer_development: "Розробка",
        footer_branding: "Брендинг",
        footer_contacts: "КОНТАКТИ",
        footer_telegram: "Telegram",
        footer_copyright: "© 2026 Swaga Labs. Всі права захищені. Зроблено з 🐆 та кофеїном."
    }
};

// Current language
let currentLang = 'ru';

// --- Language Switcher Functionality ---
function initLanguageSwitcher() {
    const langToggle = document.getElementById('langToggle');
    const langDropdown = document.getElementById('langDropdown');
    const langCurrent = document.querySelector('.lang-current');
    const langButtons = document.querySelectorAll('[data-lang]');
    
    // Load saved language from localStorage
    const savedLang = localStorage.getItem('swaga_lang');
    if (savedLang && translations[savedLang]) {
        currentLang = savedLang;
        updatePageLanguage(currentLang);
        if (langCurrent) {
            langCurrent.textContent = currentLang.toUpperCase();
        }
    }
    
    // Toggle dropdown
    if (langToggle) {
        langToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            langDropdown.classList.toggle('active');
        });
    }
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
        if (langDropdown && !langDropdown.contains(e.target) && !langToggle.contains(e.target)) {
            langDropdown.classList.remove('active');
        }
    });
    
    // Language selection
    langButtons.forEach(function(btn) {
        btn.addEventListener('click', function() {
            const selectedLang = this.getAttribute('data-lang');
            if (translations[selectedLang]) {
                currentLang = selectedLang;
                updatePageLanguage(currentLang);
                localStorage.setItem('swaga_lang', currentLang);
                
                if (langCurrent) {
                    langCurrent.textContent = currentLang.toUpperCase();
                }
                
                langDropdown.classList.remove('active');
            }
        });
    });
}

// Update all translatable elements
function updatePageLanguage(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(function(element) {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Update html lang attribute
    document.documentElement.lang = lang;
}

// Initialize language switcher on DOM load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLanguageSwitcher);
} else {
    initLanguageSwitcher();
}

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