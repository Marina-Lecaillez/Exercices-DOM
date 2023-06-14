//////////////////////////
//////// CAROUSEL ////////
//////////////////////////


let carousel = document.getElementById("carousel");
let boutonSuivant = document.getElementById("suivant");
let boutonPrecedent = document.getElementById("precedent");
let positionCarousel = 0;

function suivant() {
  carousel.children[positionCarousel].classList.remove("active");
  positionCarousel++;

  if (positionCarousel === carousel.children.length) {
    positionCarousel = 0;
  }

  carousel.children[positionCarousel].classList.add("active");
}

function precedent() {
  carousel.children[positionCarousel].classList.remove("active");
  positionCarousel--;

  if (positionCarousel < 0) {
    positionCarousel = carousel.children.length - 1;
  }

  carousel.children[positionCarousel].classList.add("active");
}

boutonSuivant.addEventListener("click", suivant);
boutonPrecedent.addEventListener("click", precedent);