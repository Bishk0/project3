let tab = function () {
    let tabNav = document.querySelectorAll('.tabs li'),
        tabContent = document.querySelectorAll('.tabs__panel'),
        tabName;
    tabNav.forEach(item => {
        item.addEventListener('click', selectTabNav)
    });
    function selectTabNav() {
        tabNav.forEach(item => {
            item.classList.remove('is-active');
        });
        this.classList.add('is-active');
        tabName = this.getAttribute('data-tab-name');
        selectTabContent(tabName);
    }
    function selectTabContent(tabName) {
        tabContent.forEach(item => {
            item.classList.contains(tabName) ? item.classList.add('is-active') : item.classList.remove('is-active');
        })
    }
};
tab();

let burger = document.getElementsByClassName('.header__burger');

burger.onclick = function (){
    burger.classList.toggle('burger__active');
};

$('.header__burger').on('click', function(e) {
    e.preventDefault();
    $(this).toggleClass('burger__active');
    $('nav ul').slideToggle();
});
