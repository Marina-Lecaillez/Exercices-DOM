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


//////////////////////////
//// LISTE DE COURSES ////
//////////////////////////

function ajouterElement() {
    let itemInput = document.getElementById("item");
    let itemValue = itemInput.value.trim();
  
    if (itemValue !== "") {
        let listItem = document.createElement("li");
        let itemSpan = document.createElement("span");
      itemSpan.innerText = itemValue;
  
      let deleteButton = document.createElement("button");
      deleteButton.innerText = "Supprimer";
      deleteButton.classList.add("delete-button");
      deleteButton.onclick = function() {
        listItem.remove();
      };
  
      listItem.appendChild(itemSpan);
      listItem.appendChild(deleteButton);
  
      document.getElementById("liste").appendChild(listItem);
  
      itemInput.value = "";
    }
  }
  