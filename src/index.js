import pizza from './first_load';
import burger from './other_meal';
import sushi from './yet_another_one';

const body = document.querySelector('body');
const header = document.createElement('header');

const buttonPizza = document.createElement('button');
const buttonBurger = document.createElement('button');
const buttonSushi = document.createElement('button');
buttonPizza.classList.add('pizza-btn');
buttonBurger.classList.add('burger-btn');
buttonSushi.classList.add('sushi-btn');

buttonPizza.innerHTML = 'Pizza';
buttonBurger.innerHTML = 'Burger';
buttonSushi.innerHTML = 'Sushi';

buttonPizza.onclick = pizza;
buttonBurger.onclick = burger;
buttonSushi.onclick = sushi;

header.appendChild(buttonPizza);
header.appendChild(buttonBurger);
header.appendChild(buttonSushi);

body.prepend(header);

pizza();
