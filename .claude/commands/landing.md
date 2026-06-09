# Interactive Landing Page Builder

Создай современный интерактивный лендинг в стиле Apple x Startup. Используй чистый HTML/CSS/JS без фреймворков.

## Обязательные элементы:
1. **Preloader** — анимированная загрузка (прогресс-бар, лого)
2. **Custom cursor** — магнитный курсор + follower (только десктоп, скрывать на touch)
3. **Scroll progress bar** — тонкая линия вверху страницы
4. **Glassmorphic nav** — `backdrop-filter: blur()`, появление фона при скролле
5. **Hero** — крупная типографика, canvas-частицы или gradient mesh
6. **Scroll-reveal анимации** — IntersectionObserver + CSS transitions, пословное появление заголовков

## CSS Design System (темная тема):
```css
:root {
    --bg: #050505;
    --bg-card: #111111;
    --surface: #161616;
    --border: rgba(255, 255, 255, 0.08);
    --text: #FFFFFF;
    --text-secondary: #888888;
    --text-tertiary: #555555;
    --accent: #CDFF00; /* или другой яркий акцент */
    --font-heading: 'Inter', sans-serif;
    --font-mono: 'JetBrains Mono', monospace;
    --font-display: 'Space Grotesk', sans-serif;
    --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
    --radius: 16px;
}
```

## JS паттерны:
- IIFE обертка `(function() { 'use strict'; ... })();`
- IntersectionObserver для scroll-reveal и lazy-анимаций
- `{ passive: true }` на scroll listeners
- `window.matchMedia('(pointer: fine)')` для desktop-only фич
- Адаптивные брейкпоинты: 1024 / 768 / 480px

## Шрифты (Google Fonts):
```html
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&display=swap" rel="stylesheet">
```

Аргумент $ARGUMENTS содержит тематику/описание лендинга. Адаптируй контент и акцентный цвет под тему.
