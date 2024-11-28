'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

for (let i = 0; i < btnsOpenModal.length; i++)
  // btnsOpenModal[i].addEventListener('click', openModal);

  btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////

// ----------------- 187. Selecting, Creating, and Deleting Elements -----------------

// ----------------- Selecionando elements -----------------

console.log(document.documentElement); // retornou todo documento HTML
console.log(document.head); // retornou todo o head
console.log(document.body); // retornou todo o body

const header = document.querySelector('.header');

const allSections = document.querySelectorAll('.section');
/* 
retorna um NodeList
Ex: se eu inspecionar a página, remover uma das section e chamar o 'allSections' ele irá exibir da mesma forma que estava antes não atualiza.
*/
console.log(allSections); // NodeList(4) [section#section--1.section, section#section--2.section, section#section--3.section, section.section.section--sign-up]

const section = document.getElementById('section--1');
console.log(section); // section#section--1.section

const allButtons = document.getElementsByTagName('button');
/* 
retorna um HTMLCollection, se o DOM for alterado essa coleção também será atualizada automáticamente.
Ex: se eu inspecionar a página, remover um dos button e chamar o 'allButtons' ele irá exibir atualizado(diferentemente do NodeList que não atualiza).
*/
console.log(allButtons); // HTMLCollection(9) [button.btn--text.btn--scroll-to, button.btn.operations__tab.operations__tab--1.operations__tab--active, button.btn.operations__tab.operations__tab--2, button.btn.operations__tab.operations__tab--3, button.slider__btn.slider__btn--left, button.slider__btn.slider__btn--right, button.btn.btn--show-modal, button.btn--close-modal, button.btn]

const allClassButtons = document.getElementsByClassName('btn');
console.log(allClassButtons); // HTMLCollection(5) [button.btn.operations__tab.operations__tab--1.operations__tab--active, button.btn.operations__tab.operations__tab--2, button.btn.operations__tab.operations__tab--3, button.btn.btn--show-modal, button.btn]

// ----------------- Criando e inserindo elementos -----------------
/*
.insertAdjacentHTML 
método principal
*/

/*
O elemento DOM é unico so pode existir em um lugar por vez
Se quisermos varias vezes o mesmo elemento precisamos copia-lo
*/
const message = document.createElement('div');
/* 
cria um elemento DOM e o armazena (porém ainda não está em DOM(não aparece na aplicação ainda), 
agora ele é um objeto que podemos utilizar)
*/
message.classList.add('cookie-message');
message.innerHTML =
  'We use cookied for improved funcionality and analytics. <button class="btn btn--close--cookie">Got it!</button>';
console.log(message);

/* 
o MESSAGE é um 'elemento de vida do DOM' portanto não pode estar em varios lugares ao mesmo tempo 
quando usamos o 'append' no exemplo ele apenas moveu do 'prepend' para 'append' pois a criação foi feita com o prepend.
*/
header.prepend(message);
/* 
prepend adiciona como o primeiro filho do elemento(no exemplo aparece no inicio do head)
*/
header.append(message);
/* 
prepend adiciona como o último filho do elemento(no exemplo aparece no final do head) 
*/

// header.prepend(message.cloneNode(true));
/* 
Agora que realizamos o clone ele é exibido duas vezes na tela 
*/

header.before(message);
/* 
adiciona antes como irmão do header 
*/

header.after(message);
/*
adiciona depois como irmão do header
*/

// ----------------- Deletar elementos -----------------
document
  .querySelector('.btn--close--cookie')
  .addEventListener('click', function () {
    // message.remove();

    /* modo antigo de remover
    sobe o message em uma árvore DOM e depois remove o filho usando o mesmo elemento
    esse metódo de mover para cima e para baixo na árvore é chamado de travessia DOM
    */
    message.parentElement.removeChild(message);
  });

// // ----------------- 188. Styles, Attributes and Classes -----------------

// // ----------------- Styles -----------------
// message.style.backgroundColor = '#37383d';
// message.style.height = '50px';

// console.log(message.style.width); /*aqui não funciona, só funciona em estilos que já definimos */
// console.log(message.style.backgroundColor);

// console.log(getComputedStyle(message)); /* Aparecem todos os estilos mesmo os que não foram definidos manualmente */
// console.log(getComputedStyle(message).color); // rgb(187, 187, 187)
// console.log(getComputedStyle(message).height); // 50px

// message.style.height =
//   Number.parseFloat(getComputedStyle(message).height, 10) + 25 + 'px';
// /* Alterando a altura */

// document.documentElement.style.setProperty('--color-primary', 'orange');
// /* Alterando variavel do css */

// // ----------------- Atributos -----------------
// const logo = document.querySelector('.nav__logo');
// console.log(logo.alt); // Bankist logo

// console.log(logo.className); // nav__logo

// logo.alt = 'Beautiful minimalist logo'; /* Reatribuindo o valor */

// //Não é atributo padrão
// console.log(logo.designer); // undefined
// console.log(logo.getAttribute('designer')); // Jonas

// /* Inserindo atributos */
// logo.setAttribute('name', 'bankist')

// /* pegando os atributos */
// console.log(logo.src); // http://127.0.0.1:5500/13-Advanced-DOM-Bankist/img/logo.png (url absoluta)
// console.log(logo.getAttribute('src')); // img/logo.png (url relativa)

// const link = document.querySelector('.nav__link--btn');

// console.log(link.href); // http://127.0.0.1:5500/13-Advanced-DOM-Bankist/index.html#
// console.log(link.getAttribute('href')); // #

// // Data attributes

// console.log(logo.dataset.version_number)// 3
// console.log(logo.dataset.testNumber) // 3 (quando separamos no HTML o nome com '-' no JS chamamos com camelCase)

// // Classes
// logo.classList.add('c', 'j');
// logo.classList.remove('c');
// logo.classList.toggle('c');
// logo.classList.contains('c'); // não inclui, apenas verifica se existe.

// // Não usar esse, ele sobrescreve as outras classes já existentes
// // logo.className = 'Jonas'

// ----------------- 189. Implementing Smooth Scrolling -----------------

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  /* getBoundingClientRect -> pegar as cordenadas, é relativo a janela visível */
  /*
  EXEMPLOS
  console.log(s1coords);
   console.log(e.target.getBoundingClientRect()); // 'e.target' representa o botao que disparou o evento
   console.log('Current scroll (X/Y)', window.pageXOffset, pageYOffset);
 
   console.log('Height/width viewport',
     document.documentElement.clientHeight,
     document.documentElement.clientWidth
   );// exibe o tamanho da visivel da janela
 */
  //Scrolling
  /* 
   Realiza o cálculo para rolar a página até uma seção específica, considerando a posição atual de rolagem da janela.
   Primeiro, obtemos as coordenadas da seção com o `getBoundingClientRect`, que retorna as posições relativas
   ao viewport. Em seguida, somamos essas coordenadas à posição atual da janela para obter a posição absoluta.
 */
  window.scrollTo(
    s1coords.left + window.pageXOffset,
    s1coords.top + window.pageYOffset
  );

  /* 
   Este código usa `window.scrollTo` para rolar a página até uma posição específica, calculada manualmente. 
   Primeiro, somamos `s1coords.left` e `s1coords.top` (as coordenadas da seção em relação ao viewport) com `window.pageXOffset` e `window.pageYOffset` (a posição atual de rolagem da página) para obter a posição absoluta da seção no documento.
   O parâmetro `behavior: 'smooth'` indica que a rolagem deve ocorrer suavemente, criando uma transição mais agradável para o usuário.
*/
  window.scrollTo({
    left: s1coords.left + window.pageXOffset,
    top: s1coords.top + window.pageYOffset,
    behavior: 'smooth',
  });

  //------------------ MÉTODO MODERNO
  /* 
   Este código utiliza o método `scrollIntoView` diretamente no elemento `section1`, simplificando o processo de rolagem até a seção desejada.
   O método `scrollIntoView` automaticamente calcula a posição da seção no documento e rola a página até ela. 
   Ao passar `{ behavior: 'smooth' }` como parâmetro, a rolagem é feita de forma suave, assim como no exemplo anterior. 
   
   Essa abordagem é mais simples e recomendada para rolar até um elemento específico, já que não requer cálculos manuais.
*/
  section1.scrollIntoView({ behavior: 'smooth' });
});

// ----------------- 190. Implementing Smooth Scrolling -----------------

/* três maneiras de chamar um evento */

// dessa maneira e possivel remover o envento tambem, seja depois de executar a ação a primeira vez, com o timer ou outra.
const h1 = document.querySelector('h1');

const alertH1 = function (e) {
  alert('addEventListener: Great! You are reading the heading :D');
};

h1.addEventListener('mouseenter', alertH1);

setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);

// maneira menos recomendada
// h1.onmouseenter = function (e) {
//   alert('onmouseenter: Great! You are reading the heading :D');
// };

// ----------------- 192. Event Propagation in Practice -----------------

// formula para pegar numero inteiro randomico
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () =>
  `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;

document.querySelector('.nav__link').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('LINK', e.target, e.currentTarget);
  // target -> onde o evento se originou/aconteceu pela primeira vez
  // currentTarget -> retorna onde o manipulador está vinculado
  console.log(e.currentTarget === this);

  // // Parando a propagação -> na pratica não é uma boa ideia interromper
  // e.stopPropagation();
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('COINTAINER', e.target, e.currentTarget);
});

document.querySelector('.nav').addEventListener(
  'click',
  function (e) {
    this.style.backgroundColor = randomColor();
    console.log('NAV', e.target, e.currentTarget);
    //O parâmetro true no addEventListener ativa a fase de captura para esse evento.
  },
  true
);

/* 
.nav >> .nav__links >> .nav__link 

target -> onde o evento se originou/aconteceu pela primeira vez
  No exemplo quando clicamos em:
    .nav__link no console é retornado nos três eventos o .nav__link que foi onde se originou.
    .nav__links no console é retornado nos dois eventos  o .nav__link que foi onde se originou.
    .nav no console é retornado no evento o .nav que foi onde se originou.

    No caso a propagação ocorre entre pai e filho, não entra irmãos. 
    Pois na lógica se uma tag esta dentro de outra,
    quando ocorrer o click na tag filho voce consequentemente esta clicando na tag pai também.

currentTarget -> retorna onde o manipulador está vinculado.
console.log(e.currentTarget === this); // retorna true pois são exatamente os mesmos

stopPropagation() -> ele cancela a propagação para os elementos pai.
  Na prática não é uma boa ideia interromper.

Adicionando true ao evento do .nav
  O parâmetro true no addEventListener ativa a fase de captura para esse evento. 
  Isso significa que o evento no elemento .nav será tratado antes de qualquer outro evento de clique nos elementos filhos (.nav__links e .nav__link).

  Sem true, o código entraria diretamente na fase de borbulhamento, e o evento nos elementos internos seria tratado primeiro.

*/

// ------------ 193. Event Delegation: Implementing Page Navigation ------------

// Page navigation

// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();

//     const id = this.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({
//       behavior: 'smooth'
//     });
//   });
// });

// 1. Add Event Listener to common parent element
// 2. Determine what element originated the event
document.querySelector('.nav__links').addEventListener('click', function (e) {
  console.log(e.target);

  //Matching strategy
  if (e.target.classList.contains('nav__link')) {
    e.preventDefault();

    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({
      behavior: 'smooth',
    });
  }
});

// ----------------- 194. DOM Traversing -----------------

// Going downwards: child
const eh1 = document.querySelector('h1');

console.log(eh1.querySelectorAll('.highlight'));

console.log(h1.childNodes);

console.log(eh1.children); // só funciona para filhos diretos

eh1.firstElementChild.style.color = 'white';
eh1.lastElementChild.style.color = 'orange';

// Going upwards: parents
console.log(eh1.parentNode);

// eh1.closest('.header').style.background = 'var(--gradient-secondary)';

// eh1.closest('.h1').style.background = 'var(--gradient-secondary)';

// Going sideways: siblings
console.log(eh1.previousSibling);
console.log(h1.nextSibling);

console.log(eh1.parentElement.children);
[...h1.parentElement.children].forEach(function (el) {
  if (el !== h1) el.style.transform = 'scale(0.5)';
});

// ----------------- 195. Building a Tabbed Component -----------------

// Page navigation
// 1. Add Event Listener to common parent element
// 2. Determine what element originated the event
document.querySelector('.nav__links').addEventListener('click', function (e) {
  console.log(e.target);

  //Matching strategy
  if (e.target.classList.contains('nav__link')) {
    e.preventDefault();

    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({
      behavior: 'smooth',
    });
  }
});

// Tabbed component
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');
  console.log(clicked);
  // Guard clause

  // Active tab
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  clicked.classList.add('operations__tab--active');

  // Activate content area
  tabsContent.forEach(t => t.classList.remove('operations__content--active'));
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

// ----------------- 196. Passing Arguments to Event Handlers -----------------

const nav = document.querySelector('.nav');

// Menu fade animation
const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

//Passing "argument" into handler
nav.addEventListener('mouseover', handleHover.bind(0.5));

nav.addEventListener('mouseout', handleHover.bind(1));

// ----------------- 197. Implementing a Sticky Navigation: The Scroll Event -----------------

// Stick navigation
// const initialCoords = section1.getBoundingClientRect();

// console.log(initialCoords);
// window.addEventListener('scroll', function (e) {
//   if (this.window.scrollY > initialCoords.top) nav.classList.add('sticky');
//   else nav.classList.remove('sticky');
// });

// ----------------- 198. A Better Way: The Intersection Observer API -----------------

const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);

// ----------------- 199. Revealing Elements on Scroll -----------------

// Reveal sections

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});

// ----------------- 200. Lazy Loading Images -----------------

// Lazy loading image

const imgTargets = document.querySelectorAll('img[data-src]');

const loadImg = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);

  if (!entry.isIntersecting) return;

  // Replace src width data-src
  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });
  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '200px',
});

imgTargets.forEach(img => imgObserver.observe(img));


// Slider
const slides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');

let curSlide = 0;

const maxSlide = slides.length;


// slides.forEach((s,i)=> (s.style.transform = `translatex(${100*i}%)`));

const goToSlide = function(slide) {
  slides.forEach((s, i) => (s.style.transform = `translateX(${100 * (i -slide)}%)`))
};
goToSlide(0)


// Next slide
const nextSlide = function(){
  if(curSlide === maxSlide - 1){
    curSlide = 0;
  } else {
    curSlide++;
  }
  goToSlide(curSlide);
}

const prevSlide = function(){
  if(curSlide === 0){
    curSlide = (maxSlide - 1);
  } else {
    curSlide--;
  }
  goToSlide(curSlide);
}

btnRight.addEventListener('click', nextSlide);
btnLeft.addEventListener('click', prevSlide);