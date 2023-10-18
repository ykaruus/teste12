const $menu = document.getElementById('menu');
const $btn = document.getElementById('btn');

$btn.addEventListener('click', () => {
    if ($menu.style.left = '-450px') {
        $menu.style.left = '0px';
    }
})