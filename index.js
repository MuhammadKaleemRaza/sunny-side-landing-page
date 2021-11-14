let $burger = document.getElementById('burger');
let $navList = document.getElementById('nav-list');

$burger.addEventListener('click', function() {
    $navList.classList.toggle('v-height-resp')
})