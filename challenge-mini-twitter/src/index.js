function newTwitt(e){
    e.preventDefault();
    let textArea = document.querySelector(".form-control");
    let parentElement = document.querySelector("#tweets");
    let theFirstChild = parentElement.firstChild;
    let newElement = document.createElement("p");
    

    let innerHTML = textArea.value;
    newElement.style.border = "solid black 3px";
    newElement.style.borderRadius = "5px";
    newElement.style.padding = "15px";
    newElement.style.display = "flex";
    newElement.style.justifyContent = "space-between";
    
    newElement.style.width = "90%";
    textArea.value = "";

    let newTwitDeleteButton = document.createElement("button");
    newTwitDeleteButton.className = "btn btn-secondary";

    newTwitDeleteButton.style.border = "solid yellow 2px";
    newTwitDeleteButton.style.padding = "5px";
    newTwitDeleteButton.innerText= "Delete";

    
    parentElement.insertBefore(newElement, theFirstChild);
    

    newTwitDeleteButton.addEventListener('click', function () {
        this.parentElement.remove();
    }, false); 
    enteredChar.innerHTML = "The total characters entered are: ";



    let arr = innerHTML.split("@");
    for(let i = 1; i < arr.length; i++){
    
    let name = arr[i].split(" ")[0].split(",")[0].split("!")[0].split(".")[0].split("?")[0].split(":")[0].split(";")[0];
    let whatReplace = "@"+ name;
    let replacedString = '<a href = "www.twitter.com/'+ name +'">@' + name + '</a>'
    innerHTML = innerHTML.replace(whatReplace, replacedString);

    };

    newElement.innerHTML = innerHTML;
        
    newElement.appendChild(newTwitDeleteButton);


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


