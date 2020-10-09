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
          
           
       
         let xmlns = "http://www.w3.org/2000/svg";
         let svg = document.createElementNS(xmlns, "svg");
         svg.setAttribute("width", 100);
         svg.setAttribute("height", 100);
         svg.setAttribute("viewBox", "0 0 1667 1667");
         svg.setAttribute("stroke-linejoin", "round");
         svg.setAttribute("id", "mySVG");
         
         let pathOne = document.createElementNS(xmlns, "path");
         pathOne.setAttribute("d", "M856.2 151.9L759.3 393 517.6 496.8l19.2 163.6 171.8-63.7 147 152.4.7-597.3z" );
         pathOne.setAttribute("class", "a")
         svg.appendChild(pathOne);
         
         let pathTwo = document.createElementNS(xmlns, "path");
         pathTwo.setAttribute("d", "M848.9 177.6l73.8 43.3 23.1 197.9 241.7 103.8-19.2 163.6-171.8-63.6-147 152.4-.7-597.3z");
         pathTwo.setAttribute("class", "a");
         svg.appendChild(pathTwo);
         
         let pathThree = document.createElementNS(xmlns, "path");
         pathThree.setAttribute("d", "M855.7 723l-150.9-97.1L523 637.5l-40.5-51.7-54.1 16.1-146.9 120.2-40 182.4 9 95.6-4.7 87.1 105.6 235.3 241.2 113 259.5 68.9 3.6-781.5z");
         pathThree.setAttribute("class", "b tomato-fill");
         
         svg.appendChild(pathThree);
         
         let pathFour = document.createElementNS(xmlns, "path");
         pathFour.setAttribute("d", "M814.3 716.7l150.9-97.1 181.8 11.6 40.5-51.7 54.1 16.1 146.9 120.2 40 182.4-9 95.6 4.7 87.1-105.5 235.3-241.2 113-259.5 68.9-3.6-781.5z");
         pathFour.setAttribute("class", "tomato-fill");
         pathFour.setAttribute("id","pathNumFour");
         svg.appendChild(pathFour);
         
         let pathFive =  document.createElementNS(xmlns, "path");
         pathFive.setAttribute("d", "M1162.3 501.3c-42.7-98.5-155.1-116.1-224.6-118.8 1.4-46.1 9.3-79.8 54.2-110.9 9.4-6.5 15-17.2 15-28.6 0-9.2-3.7-18-10.2-24.5l-69.4-69.4c-8.6-8.6-21.2-12.1-33-9.1-147.6 37.2-163.2 145.2-164.9 242.5-69.3 2.6-182.2 20.1-225 118.8-182.6 101-296 280-296 471 0 306.3 280.4 555.6 625 555.6s625-249.2 625-555.6c0-191-113.4-370-296-470.9zm-606.8 89c0-72.1 25.2-138.9 208.3-138.9 19 0 34.7-15.7 34.7-34.7 0-105.4 4.8-173.6 94.1-204l28.1 28c-53.4 41.7-52.8 125.1-52.8 176 0 19 15.7 34.7 34.7 34.7 183.1 0 208.3 66.8 208.3 138.9v32.2c-58.6-8.2-120.8-36.2-142.2-81.8-5.7-12.1-18-19.9-31.4-19.9-19 0-34.7 15.7-34.7 34.7 0 88.2-55.8 136.7-68.7 138.9-14.4-2.3-70.2-50.7-70.2-138.9 0-16-11-30-26.6-33.8-2.7-.6-5.4-1-8.1-.9-13 0-25 7.3-30.9 19-25.8 50.5-90.4 75-142.7 82.5v-32zm277.8 868.1c-306.3 0-555.6-218.1-555.6-486.1 0-149.6 76.8-286.9 208.3-378.6v66.2c0 19 15.7 34.7 34.7 34.7 66.7 0 131.8-21 185.8-60.2C731.7 712.7 790.3 764 833.2 764c42.7 0 101-50.9 126.3-128.6 54.3 38.8 119.4 59.5 186.2 59.2 19 0 34.7-15.7 34.7-34.7v-66.2c131.6 91.8 208.3 229.1 208.3 378.7 0 268-249.2 486.1-555.6 486.1z");
         
         pathFive.setAttribute("class", "line-draw");
         
         svg.appendChild(pathFive); 
       

           let t = document.createElement("li");
           t.setAttribute("class", "full-tomato");
           
           t.appendChild(svg);
           
           
           records[i]= t;

         
           ul.appendChild(t);
           console.log(records.length);}
         
         
         if (records.length%2 != 0){
           let xmlns = "http://www.w3.org/2000/svg";
           let svg = document.createElementNS(xmlns, "svg");
           svg.setAttribute("width", 100);
           svg.setAttribute("height", 100);
           svg.setAttribute("viewBox", "0 0 1667 1667");
           svg.setAttribute("stroke-linejoin", "round");
           svg.setAttribute("id", "mySVG");
           
           let pathOne = document.createElementNS(xmlns, "path");
           pathOne.setAttribute("d", "M856.2 151.9L759.3 393 517.6 496.8l19.2 163.6 171.8-63.7 147 152.4.7-597.3z" );
           pathOne.setAttribute("class", "a")
           svg.appendChild(pathOne);
           
           let pathTwo = document.createElementNS(xmlns, "path");
           pathTwo.setAttribute("d", "M848.9 177.6l73.8 43.3 23.1 197.9 241.7 103.8-19.2 163.6-171.8-63.6-147 152.4-.7-597.3z");
           pathTwo.setAttribute("class", "a");
           svg.appendChild(pathTwo);
           
           let pathThree = document.createElementNS(xmlns, "path");
           pathThree.setAttribute("d", "M855.7 723l-150.9-97.1L523 637.5l-40.5-51.7-54.1 16.1-146.9 120.2-40 182.4 9 95.6-4.7 87.1 105.6 235.3 241.2 113 259.5 68.9 3.6-781.5z");
           pathThree.setAttribute("class", "b tomato-fill");
           
           svg.appendChild(pathThree);
           
           let pathFour = document.createElementNS(xmlns, "path");
           pathFour.setAttribute("d", "M814.3 716.7l150.9-97.1 181.8 11.6 40.5-51.7 54.1 16.1 146.9 120.2 40 182.4-9 95.6 4.7 87.1-105.5 235.3-241.2 113-259.5 68.9-3.6-781.5z");
           pathFour.setAttribute("class", "b white");
           pathFour.setAttribute("id","pathNumFour");
           svg.appendChild(pathFour);
           
           let pathFive =  document.createElementNS(xmlns, "path");
           pathFive.setAttribute("d", "M1162.3 501.3c-42.7-98.5-155.1-116.1-224.6-118.8 1.4-46.1 9.3-79.8 54.2-110.9 9.4-6.5 15-17.2 15-28.6 0-9.2-3.7-18-10.2-24.5l-69.4-69.4c-8.6-8.6-21.2-12.1-33-9.1-147.6 37.2-163.2 145.2-164.9 242.5-69.3 2.6-182.2 20.1-225 118.8-182.6 101-296 280-296 471 0 306.3 280.4 555.6 625 555.6s625-249.2 625-555.6c0-191-113.4-370-296-470.9zm-606.8 89c0-72.1 25.2-138.9 208.3-138.9 19 0 34.7-15.7 34.7-34.7 0-105.4 4.8-173.6 94.1-204l28.1 28c-53.4 41.7-52.8 125.1-52.8 176 0 19 15.7 34.7 34.7 34.7 183.1 0 208.3 66.8 208.3 138.9v32.2c-58.6-8.2-120.8-36.2-142.2-81.8-5.7-12.1-18-19.9-31.4-19.9-19 0-34.7 15.7-34.7 34.7 0 88.2-55.8 136.7-68.7 138.9-14.4-2.3-70.2-50.7-70.2-138.9 0-16-11-30-26.6-33.8-2.7-.6-5.4-1-8.1-.9-13 0-25 7.3-30.9 19-25.8 50.5-90.4 75-142.7 82.5v-32zm277.8 868.1c-306.3 0-555.6-218.1-555.6-486.1 0-149.6 76.8-286.9 208.3-378.6v66.2c0 19 15.7 34.7 34.7 34.7 66.7 0 131.8-21 185.8-60.2C731.7 712.7 790.3 764 833.2 764c42.7 0 101-50.9 126.3-128.6 54.3 38.8 119.4 59.5 186.2 59.2 19 0 34.7-15.7 34.7-34.7v-66.2c131.6 91.8 208.3 229.1 208.3 378.7 0 268-249.2 486.1-555.6 486.1z");
           
           pathFive.setAttribute("class", "line-draw");
           svg.appendChild(pathFive);
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
console.log("hello");



});