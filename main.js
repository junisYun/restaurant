// show navMenu when click the toggle btn
const toggleBtn = document.getElementById('nav-toggle');
toggleBtn.addEventListener('click', () => {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.toggle('show-menu');
})

// close navMenu when select menu
const navLink = document.querySelectorAll('.nav__link');
const linkAction = () => {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}
navLink.forEach(element => {
    element.addEventListener('click', linkAction)
})
// Scroll sections active link
const sections = document.querySelectorAll('section[id]');
const scrollActive = () => {
    const scrollY = window.pageYOffset;

    sections.forEach(element => {
        const sectionHeight = element.offsetHeight;
        const sectionTop = element.offsetTop - 48;
        sectionId = element.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    })
}
window.addEventListener('scroll', scrollActive);

const scrollHeader = () => {
    const nav = document.getElementById('header');
    if (this.scrollY >= 200) nav.classList.add('scroll-header');
    else nav.classList.remove('scroll-header');

}
window.addEventListener('scroll', scrollHeader);

const scrollTop = () => {
    const scrolltop = document.getElementById('scroll-top');
    if (this.scrollY >= 400) scrolltop.classList.add('scroll-top');
    else scrolltop.classList.remove('scroll-top');
}
window.addEventListener('scroll', scrollTop);

// Dark Theme
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'bx-sun'

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);

    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
})

const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun';

if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme);
}

// Scroll Reveal 
const sr = ScrollReveal({
    distance: '60px',
    duration: 2800,
    reset: true,
})
sr.reveal(`.home__container,
    .services__content,
    .menu__content`, {
    origin: 'top',
    interval: 100
})

sr.reveal(`.about__img, 
    .app__img`, {
    origin: 'left',
    interval: 100
})

sr.reveal(`.about__data,
    .app__data`, {
    origin: 'right',
    interval: 100
})

