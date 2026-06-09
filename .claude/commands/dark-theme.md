# Dark Theme Design System

Настрой CSS design system для темной темы в стиле Apple/Startup. Примени к существующему проекту или создай с нуля.

## Структура переменных:
```css
:root {
    /* Backgrounds */
    --bg: #050505;
    --bg-secondary: #0A0A0A;
    --bg-card: #111111;
    --bg-card-hover: #1a1a1a;
    --surface: #161616;

    /* Borders */
    --border: rgba(255, 255, 255, 0.08);
    --border-hover: rgba(255, 255, 255, 0.15);

    /* Text */
    --text: #FFFFFF;
    --text-secondary: #888888;
    --text-tertiary: #555555;

    /* Accent — выбери под проект */
    --accent: #CDFF00;
    --accent-dim: rgba(205, 255, 0, 0.15);
    --accent-glow: rgba(205, 255, 0, 0.4);

    /* Status */
    --positive: #00FF88;
    --negative: #FF4444;
    --hot: #FF3D00;
    --rising: #7B61FF;

    /* Typography */
    --font-heading: 'Inter', -apple-system, sans-serif;
    --font-body: 'Inter', -apple-system, sans-serif;
    --font-mono: 'JetBrains Mono', monospace;
    --font-display: 'Space Grotesk', sans-serif;

    /* Motion */
    --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
    --ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);

    /* Spacing */
    --radius: 16px;
    --radius-sm: 8px;
    --radius-xs: 6px;
}
```

## Обязательные базовые стили:
- `-webkit-font-smoothing: antialiased`
- `::selection` с акцентным цветом
- `cursor: none` + `@media (pointer: coarse)` фолбэк
- Pill-кнопки с `border-radius: 100px`
- Glassmorphism: `backdrop-filter: blur(20px) saturate(180%)`
- Grain overlay через SVG data-uri
- `color-mix()` для динамических вариантов цветов

Адаптируй акцентный цвет под $ARGUMENTS.
