//slides declaration
const slides = [
  {
    "image":"slide1.jpg",
    "tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
  },
  { 
    "image":"slide2.jpg", 
    "tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
  },
  {
    "image":"slide3.jpg",
    "tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
  },
  {
    "image":"slide4.png",
    "tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
  }
];

// elements recuperation
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');
const bannerImg = document.querySelector('.banner-img'); 
const bannerText = document.querySelector('#banner p');

// adding event listeners
arrowLeft.addEventListener('click', slideLeft);
arrowRight.addEventListener('click', slideRight);

// adding bulletpoints
const dotsContainer = document.querySelector('.dots');
const nbSlides = slides.length;

for(let i = 0; i < nbSlides; i++) {
  const dot = document.createElement('div');
  dot.classList.add('dot');
  dotsContainer.appendChild(dot); 
}

let currentIndex = 0;
updateUI();

// funtion to update the UI (UserInterface)
function updateUI() {

  // reseting bulletpoins
  dotsContainer.querySelectorAll('.dot')
             .forEach(dot => dot.classList.remove('dot_selected'));
  
  // selecting the right bulletpoint
  dotsContainer.children[currentIndex].classList.add('dot_selected');

  // updating image
  const imagePath = `./assets/images/slideshow/${slides[currentIndex].image}`;
  bannerImg.src = imagePath;

  // updating text
  bannerText.innerHTML = slides[currentIndex].tagLine;
}

// funtion for click on right arrow
function slideRight() {
  currentIndex++;
  updateUI();
}
// funtion for click on left arrow
function slideLeft() {
  currentIndex--;
  updateUI(); 
}