import Meal from './burger.jpg';

export default function createBaseHTML() {
  // Get the body
  const contentDiv = document.querySelector('#content');
  contentDiv.innerHTML = "";

  // Update current button class
  const currentBtn = document.querySelector('.burger-btn');
  currentBtn.classList.add('active-tab');
  const pizzaBtn = document.querySelector('.pizza-btn');
  const sushiBtn = document.querySelector('.sushi-btn');
  pizzaBtn.classList.remove('active-tab');
  sushiBtn.classList.remove('active-tab');

  // Create the header
  const header = document.createElement('div');
  header.classList.add('header-tab');
  const headerDiv = document.createElement('div');
  headerDiv.classList.add('headline');
  headerDiv.innerHTML = 'What a wonderful restaurant!';

  header.appendChild(headerDiv);

  const main = document.createElement('main');
  const mainImg = document.createElement('img');
  mainImg.classList.add('insane-meal');
  mainImg.src = Meal;

  const descriptionDiv = document.createElement('div');
  descriptionDiv.classList.add('description');
  descriptionDiv.innerHTML = 'Insane meal right there. WOW!!';

  main.appendChild(mainImg);
  main.appendChild(descriptionDiv);

  // Append to body
  contentDiv.appendChild(header);
  contentDiv.appendChild(main);
}
