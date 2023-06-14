//////////////////////////
//// LISTE DE COURSES ////
//////////////////////////

function ajout() {
    let itemInput = document.getElementById("item");
    let itemValue = itemInput.value.trim();
  
    if (itemValue !== "") {
      let listItem = document.createElement("li");
      let itemSpan = document.createElement("span");
      itemSpan.innerText = itemValue;
  
      let deleteButton = document.createElement("button");
      deleteButton.innerText = "Supprimer";
      deleteButton.classList.add("delete-button");
      deleteButton.onclick = function () {
        listItem.remove();
      };
  
      listItem.appendChild(itemSpan);
      listItem.appendChild(deleteButton);
  
      document.getElementById("liste").appendChild(listItem);
  
      itemInput.value = "";
    }
  }