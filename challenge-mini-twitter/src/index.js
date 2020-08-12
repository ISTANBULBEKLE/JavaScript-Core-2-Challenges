function newTwitt(e){
    e.preventDefault();
    let textArea = document.querySelector(".form-control");
    let parentElement = document.querySelector("#tweets");
    let theFirstChild = parentElement.firstChild;
    let newElement = document.createElement("p");
    

    
    //newElement.innerText = textArea.value;
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

   /*  newTwitDeleteButton.setAttribute("type", "button");
    newTwitDeleteButton.setAttribute("value", "Delete");
    newTwitDeleteButton.setAttribute("id", "btnDelete"); */


    newTwitDeleteButton.style.border = "solid yellow 2px";
    newTwitDeleteButton.style.padding = "5px";
    newTwitDeleteButton.innerText= "Delete";

    
    parentElement.insertBefore(newElement, theFirstChild);
    

    newTwitDeleteButton.addEventListener('click', function () {
        this.parentElement.remove();
    }, false); 
    enteredChar.innerHTML = "The total characters entered are: ";

    //if (textArea.value.includes(@)){

        let tweet ="Hello world it is @SomeGuy and his friend @AnotherGuy, let's do it!";
        let arr = tweet.split("@");
        console.log(arr);
        for(let i = 1; i < arr.length; i++){
            let newArr = arr[i].split(" ");
            let anotherArr = newArr[0].split(",");
            let reg = /@ + anotherArr[0]/gi;
            let templ1 = '<a href="www.twitter.com/' + anotherArr[0] + '">@' + anotherArr[0] + '</a>';
            tweet.replace(reg,templ1);
        }
        newElement.innerHTML = 'Hello world it is < href="www.twitter.com/'+SomeGuy+'">@'+ SomeGuy +'</a>' +'and';newElement.appendChild(newTwitDeleteButton);


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


