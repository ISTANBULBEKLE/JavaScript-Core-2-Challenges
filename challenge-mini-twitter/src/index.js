function newTwitt(e){
    e.preventDefault();
    let textArea = document.querySelector(".form-control");
    let parentElement = document.querySelector("#tweets");
    let theFirstChild = parentElement.firstChild;


    let newElement = document.createElement("p");
    
   
    parentElement.insertBefore(newElement, theFirstChild);
    newElement.innerText = textArea.value;
    newElement.style.border = "solid black 3px";
    newElement.style.borderRadius = "5px";
    newElement.style.padding = "15px";
    
    newElement.style.width = "100%";
    //newElement.style.height = "100px";
}
document.querySelector(".btn-primary").addEventListener("click" ,newTwitt);