# Canvas Particle System

Добавь canvas-систему частиц на страницу. Переиспользуемый паттерн.

## Параметры (через $ARGUMENTS):
- Цвет частиц (по умолчанию акцентный цвет проекта)
- Количество (по умолчанию 80)
- Интерактивность с мышью (по умолчанию да)
- Линии соединения между близкими частицами (по умолчанию да)

## HTML:
```html
<canvas class="particles-canvas" id="particles"></canvas>
```

## CSS:
```css
.particles-canvas {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
}
```

## JS шаблон:
```js
var canvas = document.getElementById('particles');
var ctx = canvas.getContext('2d');
var particles = [];
var PARTICLE_COUNT = 80;
var CONNECTION_DISTANCE = 120;
var MOUSE_RADIUS = 150;
var PARTICLE_COLOR = 'rgba(205, 255, 0, '; // без закрывающей скобки — добавляем opacity

function resize() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
resize();
window.addEventListener('resize', resize);

function Particle() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.vx = (Math.random() - 0.5) * 0.5;
    this.vy = (Math.random() - 0.5) * 0.5;
    this.radius = Math.random() * 1.5 + 0.5;
    this.opacity = Math.random() * 0.5 + 0.1;
}

// Init, draw loop, mouse interaction — как в SwagaLabs проекте
```

## Оптимизация:
- Не рисовать если секция не видна (IntersectionObserver на родительский элемент)
- Использовать `requestAnimationFrame`
- Ограничивать mousemove обработку через throttle если нужно
