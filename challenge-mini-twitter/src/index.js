function newTwitt(e){
    e.preventDefault();
    let textArea = document.querySelector(".form-control");
    let parentElement = document.querySelector("#tweets");
    let theFirstChild = parentElement.firstChild;
    let newElement = document.createElement("p");
    

    
    newElement.innerText = textArea.value;
    newElement.style.border = "solid black 3px";
    newElement.style.borderRadius = "5px";
    newElement.style.padding = "15px";
    
    newElement.style.width = "100%";
    textArea.value = "";

    let newTwitDeleteButton = document.createElement("button");
    newTwitDeleteButton.className = "btn btn-secondary";
    newTwitDeleteButton.style.border = "solid yellow 2px";
    newTwitDeleteButton.style.padding = "5px";
    newTwitDeleteButton.innerText= "X";
    parentElement.insertBefore(newTwitDeleteButton,theFirstChild);
    parentElement.insertBefore(newElement, newTwitDeleteButton);

}
document.querySelector(".btn-primary").addEventListener("click" ,newTwitt);



let textArea = document.querySelector(".form-control");
let enteredChar = document.querySelector(".entered-char");

textArea.onkeyup = function () {
  enteredChar.innerHTML = "The total characters entered are: " + this.value.length;
  if (this.value.length > 280){
      this.style.backgroundColor ="red";
  }else{this.style.backgroundColor ="white"};

};


