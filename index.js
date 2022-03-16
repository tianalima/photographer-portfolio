// Burger menu ========

  const burgerOpen = document.querySelector('.hamburger');
  const navOpen = document.querySelector('.nav');

function openMenu() {
  document.body.classList.toggle('lock');  
  burgerOpen.classList.toggle('open');
  navOpen.classList.toggle('open');
}
  burgerOpen.addEventListener('click', openMenu);

  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach((el) => el.addEventListener('click', closeMenu));


function closeMenu(event) {
if (event.target.classList.contains('nav-link')) {

   document.body.classList.remove('lock');
   burgerOpen.classList.remove('open');
   navOpen.classList.remove('open');
  }
}

// Change images ========

const portfolioButtons = document.querySelector('.potfolio-buttons');
const portfolioImages = document.querySelectorAll('.image-portfolio');

portfolioButtons.addEventListener('click', changeImage);

   function changeImage(event) {
    if (event.target.classList.contains('transparent-btn')) {
        portfolioImages.forEach((img, index) => 
        (img.src = `./assets/img/${event.target.dataset.season}/${index + 1}.jpg`));
        
  }
}

// Change button active class =========

const portfolioButton = document.querySelectorAll('.transparent-btn');

   function changeClassActive (event) {
   if (event.target.classList.contains('transparent-btn')) {
        portfolioButton.forEach((btn) => 
        btn.classList.remove('active'));
        event.target.classList.add('active');
  }
}

portfolioButtons.addEventListener('click', changeClassActive);

// Preload images ========

function preloadImages() {
  const seasons = ['winter', 'spring', 'summer', 'autumn'];
  seasons.forEach (el => {
    for(let i = 1; i <=6; i++) {
    const img = new Image();
    img.src = `./assets/img/${el}/${i}.jpg`;
   }
})
}
preloadImages();

// Change languages

const i18Obj = {
  'en': {
    'skills': 'Skills',
    'portfolio': 'Portfolio',
    'video': 'Video',
    'price': 'Price',
    'contacts': 'Contacts',
    'hero-title': 'Alexa Rise',
    'hero-text': 'Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise',
    'hire': 'Hire me',
    'skill-title-1': 'Digital photography',
    'skill-text-1': 'High-quality photos in the studio and on the nature',
    'skill-title-2': 'Video shooting',
    'skill-text-2': 'Capture your moments so that they always stay with you',
    'skill-title-3': 'Retouch',
    'skill-text-3': 'I strive to make photography surpass reality',
    'skill-title-4': 'Audio',
    'skill-text-4': 'Professional sounds recording for video, advertising, portfolio',
    'winter': 'Winter',
    'spring': 'Spring',
    'summer': 'Summer',
    'autumn': 'Autumn',
    'price-description-1-span-1': 'One location',
    'price-description-1-span-2': '120 photos in color',
    'price-description-1-span-3': '12 photos in retouch',
    'price-description-1-span-4': 'Readiness 2-3 weeks',
    'price-description-1-span-5': 'Make up, visage',
    'price-description-2-span-1': 'One or two locations',
    'price-description-2-span-2': '200 photos in color',
    'price-description-2-span-3': '20 photos in retouch',
    'price-description-2-span-4': 'Readiness 1-2 weeks',
    'price-description-2-span-5': 'Make up, visage',
    'price-description-3-span-1': 'Three locations or more',
    'price-description-3-span-2': '300 photos in color',
    'price-description-3-span-3': '50 photos in retouch',
    'price-description-3-span-4': 'Readiness 1 week',
    'price-description-3-span-5': 'Make up, visage, hairstyle',
    'order': 'Order shooting',
    'contact-me': 'Contact me',
    'send-message': 'Send message'
  },
  'ru': {
    'skills': 'Навыки',
    'portfolio': 'Портфолио',
    'video': 'Видео',
    'price': 'Цены',
    'contacts': 'Контакты',
    'hero-title': 'Алекса Райс',
    'hero-text': 'Сохраните искренние эмоции, романтические переживания и счастливые моменты жизни вместе с профессиональным фотографом',
    'hire': 'Пригласить',
    'skill-title-1': 'Фотография',
    'skill-text-1': 'Высококачественные фото в студии и на природе',
    'skill-title-2': 'Видеосъемка',
    'skill-text-2': 'Запечатлите лучшие моменты, чтобы они всегда оставались с вами',
    'skill-title-3': 'Ретушь',
    'skill-text-3': 'Я стремлюсь к тому, чтобы фотография превосходила реальность',
    'skill-title-4': 'Звук',
    'skill-text-4': 'Профессиональная запись звука для видео, рекламы, портфолио',
    'winter': 'Зима',
    'spring': 'Весна',
    'summer': 'Лето',
    'autumn': 'Осень',
    'price-description-1-span-1': 'Одна локация',
    'price-description-1-span-2': '120 цветных фото',
    'price-description-1-span-3': '12 отретушированных фото',
    'price-description-1-span-4': 'Готовность через 2-3 недели',
    'price-description-1-span-5': 'Макияж, визаж',
    'price-description-2-span-1': 'Одна-две локации',
    'price-description-2-span-2': '200 цветных фото',
    'price-description-2-span-3': '20 отретушированных фото',
    'price-description-2-span-4': 'Готовность через 1-2 недели',
    'price-description-2-span-5': 'Макияж, визаж',
    'price-description-3-span-1': 'Три локации и больше',
    'price-description-3-span-2': '300 цветных фото',
    'price-description-3-span-3': '50 отретушированных фото',
    'price-description-3-span-4': 'Готовность через 1 неделю',
    'price-description-3-span-5': 'Макияж, визаж, прическа',
    'order': 'Заказать съемку',
    'contact-me': 'Свяжитесь со мной',
    'send-message': 'Отправить'
  }
}

const allDataItem = document.querySelectorAll('[data-i18n]');
const engLanguage = document.querySelector('.en');
const ruLanguage = document.querySelector('.ru');

function getTranslate(lang) {
  allDataItem.forEach((el) => el.textContent = i18Obj[lang][el.dataset.i18n] 
  )};

ruLanguage.addEventListener('click', () => getTranslate('ru'));  
engLanguage.addEventListener('click', () => getTranslate('en'));


const langSelection = document.querySelector('.language');
const langSwitch = document.querySelectorAll('.lang');

   function changeLangActive (event) {
   if (event.target.classList.contains('lang')) {
        langSwitch.forEach((element) => 
        element.classList.remove('active'));
        event.target.classList.add('active');
  }
}

langSelection.addEventListener('click', changeLangActive);

// Light-theme

const changeTheme = document.querySelector('.change-theme');

  function themeTogle() {
  
    changeTheme.classList.toggle('light');
    document.body.classList.toggle('light-theme');
    
}
  changeTheme.addEventListener('click', themeTogle);


// Scroll to top and menu aside

const scrollButton = document.querySelector('.scroll-to-top');
const burgerAside = document.querySelector('.hamburger-aside');
const navAside = document.querySelector('.nav-aside')

function showScrollButton () {
  if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
  scrollButton.style.display = "block";
  } else {
  scrollButton.style.display = "none";
 }
} 

const scrollToTop = (x, y) => {
  window.scrollTo(x, y);
};
scrollToTop(0, 0);

window.addEventListener('scroll', showScrollButton);
scrollButton.addEventListener('click', scrollToTop);

function showHamburgerAside () {
  if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
    burgerAside.style.display = "flex";
    } else {
    burgerAside.style.display = "none";
 }
}

window.addEventListener('scroll', showHamburgerAside);

function showMenuAside () {
  if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
    navAside.style.display = "flex";
    } else {
    navAside.style.display = "none";
 }
}
window.addEventListener('scroll', showMenuAside);

function openMenuAside() {
   
  burgerAside.classList.toggle('visible');
  navAside.classList.toggle('visible');
}
  burgerAside.addEventListener('click', openMenuAside);

  const navLinksAside = document.querySelectorAll('.nav-link-aside');

  function closeMenuAside(event) {

if (event.target.classList.contains('nav-link-aside')) {

   burgerAside.classList.remove('visible');
   navAside.classList.remove('visible');
  }
}

navLinksAside.forEach((el) => el.addEventListener('click', closeMenuAside));



// Transition on Scroll

const scrollObserve = (entries, observer) => {
entries.forEach((entry) => {

if(entry.isIntersecting && entry.intersectionRatio == 1) {
entry.target.classList.add('show-transition');
} 
// else {
// entry.target.classList.remove('show-transition');}
});
}

const options = {
threshold: 1.0,
};

const observer = new IntersectionObserver(scrollObserve, options);
const scrollTransition = document.querySelectorAll('.scroll-transition');
scrollTransition.forEach((elem) => {
observer.observe(elem);
});    

