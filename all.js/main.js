// Регистрируем плагин GSAP
gsap.registerPlugin(ScrollTrigger);

// 1. Контейнеры
const menuSushiContainer = document.querySelector(".menu-sushi");
const menuSetsContainer = document.querySelector(".menu-sets");
const menuDrinksContainer = document.querySelector(".menu-drinks");
const menuSushiBurgersContainer = document.querySelector(".menu-sushiBurgers");


// Плавный скролл к якорям с офсетом
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return; 
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            e.preventDefault(); 
            const offset = 130; 
            const offsetPosition = targetElement.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
    });
});

// 2. ДАННЫЕ МЕНЮ

const menuBurgersData = [
  { name: "Суші бургер з ікрою", weight: "265 г", price: "236 грн", sale: "", image: "./images/суші-бургер5.png", description: "Рис, норі, ікра лосося імітована, крем-сир, краб-крем, спайс соус, темпура, огірок, сухарі панко, соус унагі" },
  { name: "Суші бургер з печеним лососем", weight: "265 г", price: "242 грн", sale: "269 грн", image: "./images/суші-бургер4.png", description: "Рис, норі, крем-сир, огірок, лосось норвезький печений, синя цибуля, темпура, сухарі панко, соус унагі, спайс соус" },
  { name: "Суші бургер з тунцем", weight: "270 г", price: "234 грн", sale: "", image: "./images/суші-бургер3.png", description: "Рис, норі, крем-сир, огірок, тунець, краб-крем, темпура, сухарі панко, соус унагі, спайс соус" },
  { name: "Суші-бургер з креветкою", weight: "280 г", price: "247 грн", sale: "", image: "./images/суші-бургер2.png", description: "Рис, норі, тигрова креветка, краб-крем, салат айсберг, огірок, спайс соус, горіховий соус, темпура, suхарі панко" },
  { name: "Суші-бургер з лососем", weight: "335 г", price: "269 грн", sale: "", image: "./images/суші-бургер1.png", description: "Рис, норі, лосось норвезький слабосолений, огірок, крем-сир, краб-крем, темпура, соус унагі, спайс соус, сухарі панко" }
];


const menuDrinksData = [
  { name: "Вода Моршинська", weight: "0.5 л", price: "35 грн", sale: "", image: "./images/напій1.png", description: "Природна мінеральна негазована вода, ідеально освіжає" },
  { name: "Сік Садочок Яблуко-Виноград", weight: "0.5 л", price: "45 грн", sale: "", image: "./images/напій2.png", description: "Натуральний нектар із соковитих яблук та стиглого білого винограду" },
  { name: "Сік Садочок Персик-Яблуко", weight: "0.95 л", price: "65 грн", sale: "", image: "./images/напій3.png", description: "Густий та ароматний сік з м'якоттю соковитого персика та яблука" },
  { name: "Сік Садочок Мультивітамін", weight: "0.95 л", price: "65 грн", sale: "", image: "./images/напій4.png", description: "Яскравий мікс екзотичних та домашніх фруктів з м'якоттю" },
  { name: "Monster Energy Ultra White", weight: "0.5 л", price: "85 грн", sale: "", image: "./images/напій5.png", description: "Енергетичний напій без цукру з легким цитрусовим смаком" },
  { name: "Monster Energy Classic", weight: "0.5 л", price: "80 грн", sale: "", image: "./images/напій6.png", description: "Класичний заряд енергії з фірмовим оригінальним смаком" },
  { name: "Sprite", weight: "0.5 л", price: "40 грн", sale: "", image: "./images/напій7.png", description: "Кришталєво чистий газований напій зі смаком лимона та лайма" },
  { name: "Fanta Orange", weight: "0.5 л", price: "40 грн", sale: "", image: "./images/напій8.png", description: "Освіжаючий газований напій з вираженим смаком натурального апельсина" },
  { name: "Coca-Cola Classic", weight: "0.5 л", price: "40 грн", sale: "", image: "./images/напій9.png", description: "Легендарний та улюблений газований напій, що пасує до будь-яких ролів" }
];

const menusushiData = [
  { name: "Рол креветка-ікра", weight: "300 г", price: "235 грн", sale: "274 грн", image: "./images/Знімок_екрана_2026-10-11_223720-removebg-preview.png", description: "Рис, норі, крем-сир, креветка темпура, сурімі тамаго, гриби шиїтаке, ікра лосося імітована, кунжут чорний" },
  { name: "Теплий рол сирний", weight: "230 г", price: "187 грн", sale: "", image: "./images/Знімок_екрана_2026-10-11_223724-removebg-preview.png", description: "Рис, норі, сир плавлений, тамаго, крем-сир, темпура, соус манго-чилі" },
  { name: "Вершковий сирний рол", weight: "250 г", price: "157 грн", sale: "", image: "./images/Знімок_екрана_2026-10-11_223728-removebg-preview.png", description: "Рис, норі, крем-сир, сир плавлений, тамаго, кунжут білий, соус манго-чилі" },
  { name: "Запечений рол з крабом", weight: "250 г", price: "167 грн", sale: "", image: "./images/Знімок_екрана_2026-10-11_223731-removebg-preview.png", description: "Рис, норі, тамаго, сир плавлений, краб-крем, кунжут, соус унагі (не відноситься до категорії теплих)" },
  { name: "Запечений рол з тамаго", weight: "260 г", price: "182 грн", sale: "", image: "./images/Знімок_екрана_2026-10-11_223735-removebg-preview.png", description: "Рис, норі, крем-сир, тамаго, салат айсберг, кунжут чорний, сирний соус (*у складі горчиця), соус унагі (не відноситься до категорії теплих)" },
  { name: "Запечений рол з шиїтаке", weight: "290 г", price: "169 грн", sale: "", image: "./images/Знімок_екрана_2026-10-11_223738-removebg-preview.png", description: "Рис, норі, крем сир, гриби шиїтаке, тамаго, кунжут білий, сирний соус, соус унагі, соєвий соус" },
  { name: "Каліфорнія з креветкою", weight: "245 г", price: "194 грн", sale: "", image: "./images/Знімок_екрана_2026-10-11_223743-removebg-preview.png", description: "Рис, норі, крем-сир, тамаго, спайс соус, креветка, кунжут, соус манго-чилі" },
  { name: "Каліфорнія з креветкою темпура", weight: "245 г", price: "188 грн", sale: "", image: "./images/Знімок_екрана_2026-10-11_223748-removebg-preview.png", description: "Рис, норі, креветка, кунжут білий, спайс соус, огірок, тамаго, соус унагі, темпура, сухарі панко, соєвий соус" },
  { name: "Каліфорнія креветка-мигдаль", weight: "250 г", price: "196 грн", sale: "", image: "./images/Знімок_екрана_2026-10-11_223830-removebg-preview.png", description: "Рис, норі, креветки, тамаго, темпура, сухарі панко, крем-сир, соус манго-чилі, мигдальні пластівце" },
  { name: "Крабовий боніто", weight: "220 г", price: "149 грн", sale: "", image: "./images/Знімок_екрана_2026-10-11_223835-removebg-preview.png", description: "Рис, норі, сир плавлений, краб-крем, салат айсберг, соус унагі, стружка тунця, спайс соус" },
  { name: "Рол краб-тунець", weight: "320 г", price: "238 грн", sale: "", image: "./images/Знімок_екрана_2026-10-11_223841-removebg-preview.png", description: "Рис, норі, крем-сир, тунець, огірок, краб-крем, рисові кульки, спайс соус, мікрогрін" },
  { name: "Філадельфія преміум з тунцем", weight: "315 г", price: "234 грн", sale: "", image: "./images/Знімок_екрана_2026-10-11_223845-removebg-preview.png", description: "Рис, норі, крем-сир, тунець, огірок, ікра лосося імітована, сир фета, мікрогрін" },
  { name: "Вершковий лосось-ікра", weight: "270 г", price: "227 грн", sale: "", image: "./images/Знімок_екрана_2026-10-11_223851-removebg-preview.png", description: "Рис, норі, крем сир, лосось норвезький слабосолений, огірок, ікра лосося імітована, кунжут чорний, кунжут білий" },
  { name: "Запечений сирний з мигдалем", weight: "290 г", price: "186 грн", sale: "", image: "./images/Знімок_екрана_2026-10-11_223855-removebg-preview.png", description: "Рис, норі, крем-сир, тамаго, сир моцарела, кунжут, соєвий соус (*у складі сої), соус унагі, мигдальні пластівці (не відноситься до категорії теплих)" },
  { name: "Запечений футомакі краб-шиїтаке", weight: "325 г", price: "186 грн", sale: "", image: "./images/Знімок_екрана_2026-10-11_223858-removebg-preview.png", description: "Рис, норі, крем-сир, краб-крем, гриби шиїтаке, сирний соус, спайс соус, кунжут білий" },
  { name: "Запечений хосомакі з лососем", weight: "145 г", price: "162 грн", sale: "", image: "./images/Знімок_екрана_2026-10-11_223903-removebg-preview.png", description: "Рис, норі, лосось норвезький слабосолений, сирний соус, соус унагі, кунжут білий" }
];

const menuSetsData = [
  { name: "Кілограм", weight: "990 г", price: "794 грн", sale: "885 грн", image: "./images/сет1.png", description: "Філадельфія, Рол крем-ікра, Теплий сирний рол, Каліфорнія з креветкою" },
  { name: "Суші-бокс №1", weight: "650 г", price: "598 грн", sale: "724 грн", image: "./images/сет2.png", description: "Філадельфія мікс, Вершковий сирний рол, Запечений хосомакі з печеним лососем (не належить до теплих)" },
  { name: "Суші-бокс №2", weight: "920 г", price: "782 грн", sale: "1032 грн", image: "./images/сет3.png", description: "Філадельфія мікс, Дракон червоний, Дракон з креветкою, Запечений хосомакі з лососем (не належить до теплих)" },
  { name: "Суші-бокс №3", weight: "1230 г", price: "914 грн", sale: "1024 грн", image: "./images/сет4.png", description: "Філадельфія мікс, Вершковий лосось-ікра, Крабове боніто, Фісташкова каліфорнія, Запечений рол з тамаго (не належить до категорії теплих)" },
  { name: "Хітовий Сет", weight: "775 г", price: "648 грн", sale: "", image: "./images/сет5.png", description: "Філадельфія Мікс, Вершковий тунець, Рол з печеним лососем (не належить до категорії теплих)" },
  { name: "Сет Філадельфія", weight: "760 г", price: "724 грн", sale: "", image: "./images/сет6.png", description: "Філадельфія, Філадельфія Мікс, Філадельфія з вугрем" },
  { name: "Бестселер", weight: "970 г", price: "814 грн", sale: "", image: "./images/сет7.png", description: "Філадельфія Мікс, Теплий сирний, Сурімі з авокадо, Рол з печеним лососем (не належить до категорії теплих)" },
  { name: "Лосось-тунець-креветка", weight: "1020 г", price: "952 грн", sale: "", image: "./images/сет8.png", description: "Вершковий тунець, Каліфорнія креветка-мигдаль, Syрний з вугрем, Запечений рол з лососем (не належить до теплих)" }
];

// 3. ИСПРАВЛЕННАЯ ФУНКЦИЯ ВЫВОДА КАРТОЧЕК
function renderMenu(menuArray, container) {
  if (!container) return;
  
  let cardsHTML = "";
  
  menuArray.forEach(item => {
    // Проверяем скидку: если она есть, выводим старую цену
    const saleHTML = item.sale ? `<span class="old-price">${item.sale}</span>` : "";
    
    cardsHTML += `
      <div class="sushi-card">
        <img class="sushi-img" src="${item.image}" alt="${item.name}">
        <h3 class="sushi-title">${item.name}</h3>
        <p class="sushi-weight">${item.weight}</p>
        <p class="sushi-desc">${item.description}</p>
        <div class="sushi-price-block">
          <div class="sushi-price-group">
            ${saleHTML}
            <span class="current-price">${item.price}</span>
          </div>
          <button class="sushi-btn">Вибрати</button>
        </div>
      </div>
    `;
  });
  
  container.innerHTML = cardsHTML;
}

// Генерируем карточки на странице
renderMenu(menusushiData, menuSushiContainer);
renderMenu(menuSetsData, menuSetsContainer); 
renderMenu(menuDrinksData, menuDrinksContainer);
renderMenu(menuBurgersData, menuSushiBurgersContainer);

// 4. АНИМАЦИИ GSAP
const tlHero = gsap.timeline({
    scrollTrigger: { trigger: ".hero-container", start: "top 75%", toggleActions: "play none none none" }
});
tlHero.from("#n68 p", { y: -50, opacity: 0, duration: 1.0, stagger: 0.2 }, "-=0.4")
      .from("#n79 p", { x: 50, opacity: 0, duration: 0.8, stagger: 0.1 }, "-=0.3")
      .from(".menu-btn", { scale: 0, opacity: 0, duration: 0.5, ease: "bounce.out" }, "-=0.2");

const tlnavigation = gsap.timeline({
    scrollTrigger: { trigger: ".menu", start: "top 75%", toggleActions: "play none none none" }
});
tlnavigation.from(".navigation-box", { y: -50, opacity: 0, duration: 0.5 })
            .from(".navigation a", { y: -30, opacity: 0, duration: 0.5, stagger: 0.1 }, "-=0.2");
