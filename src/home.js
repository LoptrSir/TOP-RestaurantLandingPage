//HomePage

function createHome(){
const home = document.createElement('div');
home.classList.add('home');

const tacoCatImg = document.createElement('img');
tacoCatImg.classList.add('tacoCatImg');
tacoCatImg.src = 'images/tacocat.jpg';
tacoCatImg.alt = 'Taco Cat';

const greetingHeader = document.createElement('h3');
greetingHeader.classList.add('greetingHeader');
greetingHeader.textContent = "Welcome to Loptr's house of TACOS!"

const greeting = document.createElement('p');
greeting.textContent = 'We are focused on the celebration of the glory that is TACOS.';

home.appendChild(tacoCatImg);
home.appendChild(greetingHeader);
home.appendChild(greeting);

return home;
}

function loadHome() {
    const main = document.querySelector(".main");
    main.textContent = "";
    main.appendChild(createHome());
  }
console.log('well here we are at home');

export default loadHome;
