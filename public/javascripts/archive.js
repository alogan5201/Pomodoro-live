document.addEventListener("DOMContentLoaded", () => {
  /*

    function myFunc(){

  
        
       
         //let monthVariable = 
         let archiveList = document.querySelector(".archive-list");
         let listItems = archiveList.querySelectorAll("li.october");
         
         
         let ul = document.querySelector(".October-archive");
         const records = Array.from(listItems);
         
         var i;
         
         for (let i = 1; records.length > i; i+= 2){
          
           
       
       

           let t = document.createElement("li");
           t.setAttribute("class", "full-tomato");
           
           t.appendChild(svg);
           
           
           records[i]= t;

         
           ul.appendChild(t);
           console.log(records.length);}
         
         
         if (records.length%2 != 0){
           
           
         let b = document.createElement("li");
           b.setAttribute("class", "half-tomato");
           b.appendChild(svg)
           
           records[i]= b;
          
           ul.appendChild(b);}
         }
         myFunc();


         function otherFunction(){
            var newItem = document.createElement("LI");
            var textnode = document.createTextNode("Water");
            newItem.appendChild(textnode);
          
            var list = document.getElementById("list");
            list.insertBefore(newItem, list.childNodes[0]);

         }
         otherFunction();



*/
  const displayJanuaryArchive = () => {
    let archiveList = document.querySelector(".archive-list");
    let listItems = archiveList.querySelectorAll("li.January");
    let ul = document.querySelector("#January-archive");
    const records = Array.from(listItems);

    var i;
    if (records.length > 0 && ul.className == "hidden") {
      ul.classList.remove("hidden");
    } else if (records.length == 0) {
      ul.setAttribute("class", "hidden");
    }
    for (let i = 1; records.length > i; i += 2) {
      let fullTomatoSVG = document.createElement("img");
      fullTomatoSVG.src =
        "full-tomato.svg";
      let t = document.createElement("li");

      t.appendChild(fullTomatoSVG);

      records[i] = t;

      ul.appendChild(t);
      console.log(records.length);
    }

    if (records.length % 2 != 0) {
      let halfTomatoSVG = document.createElement("img");
      halfTomatoSVG.src =
        "half.svg";
      let b = document.createElement("li");

      b.appendChild(halfTomatoSVG);

      records[i] = b;

      ul.appendChild(b);
    }
  };
  const displayFebruaryArchive = () => {
    let archiveList = document.querySelector(".archive-list");
    let listItems = archiveList.querySelectorAll("li.February");
    let ul = document.querySelector("#February-archive");
    const records = Array.from(listItems);

    var i;
    if (records.length > 0 && ul.className == "hidden") {
      ul.classList.remove("hidden");
    } else if (records.length == 0) {
      ul.setAttribute("class", "hidden");
    }
    for (let i = 1; records.length > i; i += 2) {
      let fullTomatoSVG = document.createElement("img");
      fullTomatoSVG.src =
        "full-tomato.svg";
      let t = document.createElement("li");

      t.appendChild(fullTomatoSVG);

      records[i] = t;

      ul.appendChild(t);
      console.log(records.length);
    }

    if (records.length % 2 != 0) {
      let halfTomatoSVG = document.createElement("img");
      halfTomatoSVG.src =
        "half.svg";
      let b = document.createElement("li");

      b.appendChild(halfTomatoSVG);

      records[i] = b;

      ul.appendChild(b);
    }
  };
  const displayMarchArchive = () => {
    let archiveList = document.querySelector(".archive-list");
    let listItems = archiveList.querySelectorAll("li.March");
    let ul = document.querySelector("#March-archive");
    const records = Array.from(listItems);

    var i;
    if (records.length > 0 && ul.className == "hidden") {
      ul.classList.remove("hidden");
    } else if (records.length == 0) {
      ul.setAttribute("class", "hidden");
    }
    for (let i = 1; records.length > i; i += 2) {
      let fullTomatoSVG = document.createElement("img");
      fullTomatoSVG.src =
        "full-tomato.svg";
      let t = document.createElement("li");

      t.appendChild(fullTomatoSVG);

      records[i] = t;

      ul.appendChild(t);
      console.log(records.length);
    }

    if (records.length % 2 != 0) {
      let halfTomatoSVG = document.createElement("img");
      halfTomatoSVG.src =
        "half.svg";
      let b = document.createElement("li");

      b.appendChild(halfTomatoSVG);

      records[i] = b;

      ul.appendChild(b);
    }
  };
  const displayAprilArchive = () => {
    let archiveList = document.querySelector(".archive-list");
    let listItems = archiveList.querySelectorAll("li.April");
    let ul = document.querySelector("#April-archive");
    const records = Array.from(listItems);

    var i;
    if (records.length > 0 && ul.className == "hidden") {
      ul.classList.remove("hidden");
    } else if (records.length == 0) {
      ul.setAttribute("class", "hidden");
    }
    for (let i = 1; records.length > i; i += 2) {
      let fullTomatoSVG = document.createElement("img");
      fullTomatoSVG.src =
        "full-tomato.svg";
      let t = document.createElement("li");

      t.appendChild(fullTomatoSVG);

      records[i] = t;

      ul.appendChild(t);
      console.log(records.length);
    }

    if (records.length % 2 != 0) {
      let halfTomatoSVG = document.createElement("img");
      halfTomatoSVG.src =
        "half.svg";
      let b = document.createElement("li");

      b.appendChild(halfTomatoSVG);

      records[i] = b;

      ul.appendChild(b);
    }
  };
  const displayMayArchive = () => {
    let archiveList = document.querySelector(".archive-list");
    let listItems = archiveList.querySelectorAll("li.May");
    let ul = document.querySelector("#May-archive");
    const records = Array.from(listItems);

    var i;
    if (records.length > 0 && ul.className == "hidden") {
      ul.classList.remove("hidden");
    } else if (records.length == 0) {
      ul.setAttribute("class", "hidden");
    }
    for (let i = 1; records.length > i; i += 2) {
      let fullTomatoSVG = document.createElement("img");
      fullTomatoSVG.src =
        "full-tomato.svg";
      let t = document.createElement("li");

      t.appendChild(fullTomatoSVG);

      records[i] = t;

      ul.appendChild(t);
      console.log(records.length);
    }

    if (records.length % 2 != 0) {
      let halfTomatoSVG = document.createElement("img");
      halfTomatoSVG.src =
        "half.svg";
      let b = document.createElement("li");

      b.appendChild(halfTomatoSVG);

      records[i] = b;

      ul.appendChild(b);
    }
  };
  const displayJuneArchive = () => {
    let archiveList = document.querySelector(".archive-list");
    let listItems = archiveList.querySelectorAll("li.June");
    let ul = document.querySelector("#June-archive");
    const records = Array.from(listItems);

    var i;
    if (records.length > 0 && ul.className == "hidden") {
      ul.classList.remove("hidden");
    } else if (records.length == 0) {
      ul.setAttribute("class", "hidden");
    }
    for (let i = 1; records.length > i; i += 2) {
      let fullTomatoSVG = document.createElement("img");
      fullTomatoSVG.src =
        "full-tomato.svg";
      let t = document.createElement("li");

      t.appendChild(fullTomatoSVG);

      records[i] = t;

      ul.appendChild(t);
      console.log(records.length);
    }

    if (records.length % 2 != 0) {
      let halfTomatoSVG = document.createElement("img");
      halfTomatoSVG.src =
        "half.svg";
      let b = document.createElement("li");

      b.appendChild(halfTomatoSVG);

      records[i] = b;

      ul.appendChild(b);
    }
  };
  const displayJulyArchive = () => {
    let archiveList = document.querySelector(".archive-list");
    let listItems = archiveList.querySelectorAll("li.July");
    let ul = document.querySelector("#July-archive");
    const records = Array.from(listItems);

    var i;
    if (records.length > 0 && ul.className == "hidden") {
      ul.classList.remove("hidden");
    } else if (records.length == 0) {
      ul.setAttribute("class", "hidden");
    }
    for (let i = 1; records.length > i; i += 2) {
      let fullTomatoSVG = document.createElement("img");
      fullTomatoSVG.src =
        "full-tomato.svg";
      let t = document.createElement("li");

      t.appendChild(fullTomatoSVG);

      records[i] = t;

      ul.appendChild(t);
      console.log(records.length);
    }

    if (records.length % 2 != 0) {
      let halfTomatoSVG = document.createElement("img");
      halfTomatoSVG.src =
        "half.svg";
      let b = document.createElement("li");

      b.appendChild(halfTomatoSVG);

      records[i] = b;

      ul.appendChild(b);
    }
  };
  const displayAugustArchive = () => {
    let archiveList = document.querySelector(".archive-list");
    let listItems = archiveList.querySelectorAll("li.August");
    let ul = document.querySelector("#August-archive");
    const records = Array.from(listItems);

    var i;
    if (records.length > 0 && ul.className == "hidden") {
      ul.classList.remove("hidden");
    } else if (records.length == 0) {
      ul.setAttribute("class", "hidden");
    }
    for (let i = 1; records.length > i; i += 2) {
      let fullTomatoSVG = document.createElement("img");
      fullTomatoSVG.src =
        "full-tomato.svg";
      let t = document.createElement("li");

      t.appendChild(fullTomatoSVG);

      records[i] = t;

      ul.appendChild(t);
      console.log(records.length);
    }

    if (records.length % 2 != 0) {
      let halfTomatoSVG = document.createElement("img");
      halfTomatoSVG.src =
        "half.svg";
      let b = document.createElement("li");

      b.appendChild(halfTomatoSVG);

      records[i] = b;

      ul.appendChild(b);
    }
  };

  const displaySeptemberArchive = () => {
    let archiveList = document.querySelector(".archive-list");
    let listItems = archiveList.querySelectorAll("li.September");
    let ul = document.querySelector("#September-archive");
    const records = Array.from(listItems);

    var i;
    if (records.length > 0 && ul.className == "hidden") {
      ul.classList.remove("hidden");
    } else if (records.length == 0) {
      ul.setAttribute("class", "hidden");
    }
    for (let i = 1; records.length > i; i += 2) {
      let fullTomatoSVG = document.createElement("img");
      fullTomatoSVG.src =
        "full-tomato.svg";
      let t = document.createElement("li");

      t.appendChild(fullTomatoSVG);

      records[i] = t;

      ul.appendChild(t);
      console.log(records.length);
    }

    if (records.length % 2 != 0) {
      let halfTomatoSVG = document.createElement("img");
      halfTomatoSVG.src =
        "half.svg";
      let b = document.createElement("li");

      b.appendChild(halfTomatoSVG);

      records[i] = b;

      ul.appendChild(b);
    }
  };
  const displayOctoberArchive = () => {
    let archiveList = document.querySelector(".archive-list");
    let listItems = archiveList.querySelectorAll("li.October");
    let ul = document.querySelector("#October-archive");
    const records = Array.from(listItems);

    var i;
    if (records.length > 0 && ul.className == "hidden") {
      ul.classList.remove("hidden");
    } else if (records.length == 0) {
      ul.setAttribute("class", "hidden");
    }
    for (let i = 1; records.length > i; i += 2) {
      let fullTomatoSVG = document.createElement("img");
      fullTomatoSVG.src =
        "full-tomato.svg";
      let t = document.createElement("li");

      t.appendChild(fullTomatoSVG);

      records[i] = t;

      ul.appendChild(t);
      console.log(records.length);
    }

    if (records.length % 2 != 0) {
      let halfTomatoSVG = document.createElement("img");
      halfTomatoSVG.src =
        "half.svg";

      let b = document.createElement("li");

      b.appendChild(halfTomatoSVG);

      records[i] = b;

      ul.appendChild(b);
    }
  };
  const displayNovemberArchive = () => {
    let archiveList = document.querySelector(".archive-list");
    let listItems = archiveList.querySelectorAll("li.November");
    let ul = document.querySelector("#November-archive");
    const records = Array.from(listItems);

    var i;
    if (records.length > 0 && ul.className == "hidden") {
      ul.classList.remove("hidden");
    } else if (records.length == 0) {
      ul.setAttribute("class", "hidden");
    }
    for (let i = 1; records.length > i; i += 2) {
      let fullTomatoSVG = document.createElement("img");
      fullTomatoSVG.src =
        "full-tomato.svg";
      let t = document.createElement("li");

      t.appendChild(fullTomatoSVG);

      records[i] = t;

      ul.appendChild(t);
      console.log(records.length);
    }

    if (records.length % 2 != 0) {
      let halfTomatoSVG = document.createElement("img");
      halfTomatoSVG.src =
        "half.svg";
      let b = document.createElement("li");

      b.appendChild(halfTomatoSVG);

      records[i] = b;

      ul.appendChild(b);
    }
  };
  const displayDecemberArchive = () => {
    let archiveList = document.querySelector(".archive-list");
    let listItems = archiveList.querySelectorAll("li.December");
    let ul = document.querySelector(".December-archive");
    const records = Array.from(listItems);

    var i;
    if (records.length > 0 && ul.className == "hidden") {
      ul.classList.remove("hidden");
    } else if (records.length == 0) {
      ul.setAttribute("class", "hidden");
    }
    for (let i = 1; records.length > i; i += 2) {
      let fullTomatoSVG = document.createElement("img");
      fullTomatoSVG.src =
        "full-tomato.svg";
      let t = document.createElement("li");

      t.appendChild(fullTomatoSVG);

      records[i] = t;

      ul.appendChild(t);
      console.log(records.length);
    }

    if (records.length % 2 != 0) {
      let halfTomatoSVG = document.createElement("img");
      halfTomatoSVG.src =
        "half.svg";
      let b = document.createElement("li");

      b.appendChild(halfTomatoSVG);

      records[i] = b;

      ul.appendChild(b);
    }
  };
  const hideEmptyArchives = () => {
    let archiveList = document.querySelector(".post-archive");
    let listItems = archiveList.querySelectorAll("ul");

    const records = Array.from(listItems);

    var i;

    for (let i = 0; records.length > i; i++) {
      console.log(`the length is ${records.length}`);
    }
  };

  const displayAllArchives = () => {
    displayDecemberArchive();
    displayNovemberArchive();
    displayOctoberArchive();
    displaySeptemberArchive();
    displayAugustArchive();
    displayJulyArchive();
    displayJuneArchive();
    displayMayArchive();
    displayAprilArchive();
    displayMarchArchive();
    displayFebruaryArchive();
    displayJanuaryArchive();
  };

  const displayArchive = () => {
    displayAllArchives();
  };
  window.onload = (event) => {
    displayArchive();
    //hideEmptyArchives();
  };
});
