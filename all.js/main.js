// Реєструємо плагін GSAP
gsap.registerPlugin(ScrollTrigger);

// 1. Створюємо змінні для HTML-контейнерів
let menuSushiContainer = document.querySelector(".menu-sushi");
let menuSetsContainer = document.querySelector(".menu-sets");
let menuDrinksContainer = document.querySelector(".menu-drinks");

// 2. НАШ МАСИВ РОЛІВ
const menusushiData = [
  {
    name: "Рол креветка-ікра",
    weight: "300 г",
    price: "235 грн",
    description: "Рис, норі, крем-сир, креветка темпура, сурімі тамаго, гриби шиїтаке, ікра лосося імітована, кунжут чорний",
    sale: "274 грн",
    image: "./images/Знімок_екрана_2026-10-11_223720-removebg-preview.png",
    button: "Вибрати"
  },
  {
    name: "Теплий рол сирний",
    weight: "230 г",
    price: "187 грн",
    description: "Рис, норі, сир плавлений, тамаго, крем-сир, темпура, соус манго-чилі",
    sale: "",
    image: "./images/Знімок_екрана_2026-10-11_223724-removebg-preview.png",
    button: "Вибрати"
  },
  {
    name: "Вершковий сирний рол",
    weight: "250 г",
    price: "157 грн",
    description: "Рис, норі, крем-сир, сир плавлений, тамаго, кунжут білий, соус манго-чилі",
    sale: "",
    image: "./images/Знімок_екрана_2026-10-11_223728-removebg-preview.png",
    button: "Вибрати"
  },
  {
    name: "Запечений рол з крабом",
    weight: "250 г",
    price: "167 грн",
    description: "Рис, норі, тамаго, сир плавлений, краб-крем, кунжут, соус унагі (не відноситься до категорії теплих)",
    sale: "",
    image: "./images/Знімок_екрана_2026-10-11_223731-removebg-preview.png",
    button: "Вибрати"
  },
  {
    name: "Запечений рол з тамаго",
    weight: "260 г",
    price: "182 грн",
    description: "Рис, норі, крем-сир, тамаго, салат айсберг, кунжут чорний, сирний соус (*у складі горчиця), соус унагі (не відноситься до категорії теплих)",
    sale: "",
    image: "./images/Знімок_екрана_2026-10-11_223735-removebg-preview.png",
    button: "Вибрати"
  },
  {
    name: "Запечений рол з шиїтаке",
    weight: "290 г",
    price: "169 грн",
    description: "Рис, норі, крем сир, гриби шиїтаке, тамаго, кунжут білий, сирний соус, соус унагі, соєвий соус",
    sale: "",
    image: "./images/Знімок_екрана_2026-10-11_223738-removebg-preview.png",
    button: "Вибрати"
  },
  {
    name: "Каліфорнія з креветкою",
    weight: "245 г",
    price: "194 грн",
    description: "Рис, норі, крем-сир, тамаго, спайс соус, креветка, кунжут, соус манго-чилі",
    sale: "",
    image: "./images/Знімок_екрана_2026-10-11_223743-removebg-preview.png",
    button: "Вибрати"
  },
  {
    name: "Каліфорнія з креветкою темпура",
    weight: "245 г",
    price: "188 грн",
    description: "Рис, норі, креветка, кунжут білий, спайс соус, огірок, тамаго, соус унагі, темпура, сухарі панко, соєвий соус",
    sale: "",
    image: "./images/Знімок_екрана_2026-10-11_223748-removebg-preview.png",
    button: "Вибрати"
  },
  {
    name: "Каліфорнія креветка-мигдаль",
    weight: "250 г",
    price: "196 грн",
    description: "Рис, норі, креветки, тамаго, темпура, сухарі панко, крем-сир, соус манго-чилі, мигдальні пластівце",
    sale: "",
    image: "./images/Знімок_екрана_2026-10-11_223830-removebg-preview.png",
    button: "Вибрати"
  },
  {
    name: "Крабовий боніто",
    weight: "220 г",
    price: "149 грн",
    description: "Рис, норі, сир плавлений, краб-крем, saлат айсберг, соус унагі, стружка тунця, спайс соус",
    sale: "",
    image: "./images/Знімок_екрана_2026-10-11_223835-removebg-preview.png",
    button: "Вибрати"
  },
  {
    name: "Рол краб-тунець",
    weight: "320 г",
    price: "238 грн",
    description: "Рис, норі, крем-сир, тунець, огірок, краб-крем, рисові кульки, спайс соус, мікрогрін",
    sale: "",
    image: "./images/Знімок_екрана_2026-10-11_223841-removebg-preview.png",
    button: "Вибрати"
  },
  {
    name: "Філадельфія преміум з тунцем",
    weight: "315 г",
    price: "234 грн",
    description: "Рис, норі, крем-сир, тунець, огірок, ікра лосося імітована, сир фета, мікрогрін",
    sale: "",
    image: "./images/Знімок_екрана_2026-10-11_223845-removebg-preview.png",
    button: "Вибрати"
  },
  {
    name: "Вершковий лосось-ікра",
    weight: "270 г",
    price: "227 грн",
    description: "Рис, норі, крем сир, лосось норвезький слабосолений, огірок, ікра лосося імітована, кунжут чорний, кунжут білий",
    sale: "",
    image: "./images/Знімок_екрана_2026-10-11_223851-removebg-preview.png",
    button: "Вибрати"
  },
  {
    name: "Запечений сирний з мигдалем",
    weight: "290 г",
    price: "186 грн",
    description: "Рис, норі, крем-сир, тамаго, сир моцарела, кунжут, соєвий соус (*у складі сої), соус унагі, мигдальні пластівці (не відноситься до категорії теплих)",
    sale: "",
    image: "./images/Знімок_екрана_2026-10-11_223855-removebg-preview.png",
    button: "Вибрати"
  },
  {
    name: "Запечений футомакі краб-шиїтаке",
    weight: "325 г",
    price: "186 грн",
    description: "Рис, норі, крем-сир, краб-крем, гриби шиїтаке, сирний соус, спайс соус, кунжут білий",
    sale: "",
    image: "./images/Знімок_екрана_2026-10-11_223858-removebg-preview.png",
    button: "Вибрати"
  },
  {
    name: "Запечений хосомакі з лососем",
    weight: "145 г",
    price: "162 грн",
    description: "Рис, норі, лосось норвезький слабосолений, сирний соус, соус унагі, кунжут білий",
    sale: "",
    image: "./images/Знімок_екрана_2026-10-11_223903-removebg-preview.png",
    button: "Вибрати"
  }
];

// 3. ФУНКЦІЯ ВИВОДУ РОЛІВ НА ЕКРАН
function renderSushiMenu(menuArray) {
  if (menuSushiContainer) {
    menuSushiContainer.innerHTML = ""; 

    menuArray.forEach((item) => {
      const saleHTML = item.sale ? `<span class="old-price">${item.sale}</span>` : "";

      const cardHTML = `
        <div class="sushi-card">
          <img class="sushi-img" src="${item.image}" alt="${item.name}">
          <h3 class="sushi-title">${item.name}</h3>
          <p class="sushi-weight">${item.weight}</p>
          <p class="sushi-desc">${item.description}</p>
          
          <div class="sushi-price-block">
            ${saleHTML}
            <span class="current-price">${item.price}</span>
          </div>
          
          <button class="sushi-btn">${item.button}</button>
        </div>
      `;

      menuSushiContainer.insertAdjacentHTML("beforeend", cardHTML);
    });
  }
}

// ПЕРШИМ КРОКОМ: Генеруємо HTML-картки, щоб GSAP міг їх знайти
renderSushiMenu(menusushiData);

// 1. Анімація для головного екрану (Hero) залишається окремою
const tlHero = gsap.timeline({
    scrollTrigger: {
        trigger: ".hero-container",
        start: "top 75%",
        end: "bottom 20%",
        toggleActions: "play none none none"
    }
});

tlHero.from("#n68 p", {
    y: -50,
    opacity: 0,
    duration: 1.0,
    stagger: 0.2 
}, "-=0.4");

tlHero.from("#n79 p", {
    x: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.1
}, "-=0.3"); 

tlHero.from(".menu-btn", {
    scale: 0,
    opacity: 0,
    duration: 0.5,
    ease: "bounce.out" 
}, "-=0.2");


// 2. АНІМАЦІЯ ДЛЯ СУШІ КАРТОК (ПО РЯДАХ)
// Спершу знаходимо всі згенеровані картки
const cards = gsap.utils.toArray(".sushi-card");

// Ділимо 16 карток на ряди по 4 штуки в кожному
const itemsPerRow = 4;

for (let i = 0; i < cards.length; i += itemsPerRow) {
    // Беремо порцію з 4 карток для поточного ряду
    const rowCards = cards.slice(i, i + itemsPerRow);

    // Створюємо анімацію суворо для цього ряду
    gsap.from(rowCards, {
        y: 70,                     /* Плавна поява знизу вгору */
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,             /* Картки в одному ряду з'являються по черзі */
        scrollTrigger: {
            trigger: rowCards[0],  /* Тригером виступає перша картка в цьому ряду */
            start: "top 85%",      /* Анімація почнеться, коли ряд з'явиться знизу екрану */
            toggleActions: "play none none none",
            markers: false         /* Поставте true, якщо захочете побачити лінії тригерів */
        }
    });
}
