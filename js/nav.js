const navItem = document.getElementById('small_menu');
const hamburger = document.getElementById('hamburger');

hamburger.addEventListener('click',()=>{
    navItem.classList.toggle('open');
})