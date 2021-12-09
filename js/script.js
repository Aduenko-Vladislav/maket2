const menuBurger = document.querySelector('.burger__menu');
if (menuBurger){
    const nav__body = document.querySelector('.nav__body');
    menuBurger.addEventListener("click", function(e){
        document.body.classList.toggle('lock');
        menuBurger.classList.toggle('active');
        nav__body.classList.toggle('active');
    });
}