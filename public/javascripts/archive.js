document.addEventListener("DOMContentLoaded", () => {
    function myFunction(){
        //let ul = document.querySelector("ul.post-archive");

 // let li= document.createElement("li");
 
  let listItems = document.querySelector(".archive-list");
  let txt = listItems.innerText;
  const records = Array.from(listItems);
const toSearch = {name: 'half-tomato'};
 if (txt.match("September")){
     console.log("September-Yes!");
     
 } else {console.log("September-NO!")}
 
    };
    myFunction();
});