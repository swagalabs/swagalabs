# Add Interactive Section

Добавь новую интерактивную секцию на существующую страницу. Переиспользуй CSS-переменные и паттерны из текущего проекта.

## Доступные паттерны (выбери подходящие):

### 3D Tilt Cards
```js
card.addEventListener('mousemove', function(e) {
    var rect = card.getBoundingClientRect();
    var x = e.clientX - rect.left;
    var y = e.clientY - rect.top;
    var rotateX = (y - rect.height/2) / (rect.height/2) * -6;
    var rotateY = (x - rect.width/2) / (rect.width/2) * 6;
    card.style.transform = 'perspective(1000px) rotateX('+rotateX+'deg) rotateY('+rotateY+'deg)';
    card.style.setProperty('--mouse-x', x+'px');
    card.style.setProperty('--mouse-y', y+'px');
});
```

### Spotlight Card Effect (CSS)
```css
.card::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(205, 255, 0, 0.06), transparent 40%);
    opacity: 0;
    transition: opacity 0.4s;
    pointer-events: none;
}
.card:hover::before { opacity: 1; }
```

### Horizontal Drag Scroll
```js
var el = document.getElementById('scroll-container');
var isDown = false, startX, scrollLeft;
el.addEventListener('mousedown', function(e) { isDown=true; startX=e.pageX-el.offsetLeft; scrollLeft=el.scrollLeft; });
el.addEventListener('mouseleave', function() { isDown=false; });
el.addEventListener('mouseup', function() { isDown=false; });
el.addEventListener('mousemove', function(e) { if(!isDown)return; e.preventDefault(); el.scrollLeft=scrollLeft-(e.pageX-el.offsetLeft-startX)*2; });
```

### Scroll-Pinned Text Reveal (Manifesto)
Секция с `height: 300vh`, внутри `position: sticky` контейнер. Слова подсвечиваются пословно при скролле через секцию.

### Animated Progress Bars
Бары начинаются с `width: 0`, анимируются при попадании в viewport через IntersectionObserver.

### Filter Grid
Кнопки-фильтры, при клике прячут/показывают элементы по `data-category`.

## Инструкции:
1. Прочитай существующие файлы проекта
2. Определи какой паттерн подходит для $ARGUMENTS
3. Добавь HTML в `index.html`, CSS в `style.css`, JS в `script.js`
4. Используй существующие CSS-переменные
