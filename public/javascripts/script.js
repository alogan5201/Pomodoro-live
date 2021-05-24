document.addEventListener("DOMContentLoaded", () => {
  window.onload = (event) => {
    let clockText = document.querySelector(".progressbar-text");
    let WorkSessionStatus = document.getElementById("work-session-status");
    function showTime(){
      var date = new Date();
      var h = date.getHours(); // 0 - 23
      var m = date.getMinutes(); // 0 - 59
     
      var session = "AM";
      
      if(h == 0){
          h = 12;
      }
      
      if(h > 12){
          h = h - 12;
          session = "PM";
      }
      
      h = (h < 10) ? "0" + h : h;
      m = (m < 10) ? "0" + m : m;
     
      
      var time = h + ":" + m + ":" + session;
      document.getElementById("MyClockDisplay").innerText = time;
      document.getElementById("MyClockDisplay").textContent = time;
      
      setTimeout(showTime, 1000);
      
  }
  
  showTime();

    window.setInterval(function () {
      document.title = " " + " " + " " + " " + clockText.innerText;
    }, 1000);
    //window.setInterval(function(){ timeLeft.innerHTML = timeSpentInCurrentSession }, 500);
    window.setInterval(function () {
      WorkSessionStatus.innerText = timeSpentInCurrentSession;
    }, 400);

    function myFunc() {
      var today = new Date();
      var dd = today.getDate();

      var mm = today.getMonth() + 1;
      var yyyy = today.getFullYear();
      if (dd < 10) {
        dd = "0" + dd;
      }

      if (mm < 10) {
        mm = "0" + mm;
      }
      today = mm + "-" + dd + "-" + yyyy;
      let ul = document.querySelector("ul.tomatos-block");
      let deleteButton = document.querySelector("#slide-in");
      let fullTomato = document.createElement("li");
      fullTomato.setAttribute("class", "full-tomato");
      /* let listItems = document.querySelector(".tomatos").children;
      const records = Array.from(listItems);
  */
      var objs = document.querySelectorAll(".tomatos li");
      var currentTomatos_arr = [];

      if (objs) {
        for (var i = 0; i < objs.length; i++) {
          var date = objs[i].querySelector("#date").innerText;
          if (date == today) {
            currentTomatos_arr.push({
              date: date,
            });
          }
        }
        console.log(JSON.stringify(currentTomatos_arr));
      }
      const records = currentTomatos_arr;
      var i;

      if (records.length > 0) {
        deleteButton.classList.add("show");
        console.log("greater than 0");
      }
      for (let i = 1; records.length > i; i += 2) {
        let xmlns = "http://www.w3.org/2000/svg";
        let svg = document.createElementNS(xmlns, "svg");
        svg.setAttribute("width", 100);
        svg.setAttribute("height", 100);
        svg.setAttribute("viewBox", "0 0 1667 1667");
        svg.setAttribute("stroke-linejoin", "round");
        svg.setAttribute("id", "mySVG");

        let pathOne = document.createElementNS(xmlns, "path");
        pathOne.setAttribute(
          "d",
          "M856.2 151.9L759.3 393 517.6 496.8l19.2 163.6 171.8-63.7 147 152.4.7-597.3z"
        );
        pathOne.setAttribute("class", "a");
        svg.appendChild(pathOne);

        let pathTwo = document.createElementNS(xmlns, "path");
        pathTwo.setAttribute(
          "d",
          "M848.9 177.6l73.8 43.3 23.1 197.9 241.7 103.8-19.2 163.6-171.8-63.6-147 152.4-.7-597.3z"
        );
        pathTwo.setAttribute("class", "a");
        svg.appendChild(pathTwo);

        let pathThree = document.createElementNS(xmlns, "path");
        pathThree.setAttribute(
          "d",
          "M855.7 723l-150.9-97.1L523 637.5l-40.5-51.7-54.1 16.1-146.9 120.2-40 182.4 9 95.6-4.7 87.1 105.6 235.3 241.2 113 259.5 68.9 3.6-781.5z"
        );
        pathThree.setAttribute("class", "b tomato-fill");

        svg.appendChild(pathThree);

        let pathFour = document.createElementNS(xmlns, "path");
        pathFour.setAttribute(
          "d",
          "M814.3 716.7l150.9-97.1 181.8 11.6 40.5-51.7 54.1 16.1 146.9 120.2 40 182.4-9 95.6 4.7 87.1-105.5 235.3-241.2 113-259.5 68.9-3.6-781.5z"
        );
        pathFour.setAttribute("class", "tomato-fill");
        pathFour.setAttribute("id", "pathNumFour");
        svg.appendChild(pathFour);

        let pathFive = document.createElementNS(xmlns, "path");
        pathFive.setAttribute(
          "d",
          "M1162.3 501.3c-42.7-98.5-155.1-116.1-224.6-118.8 1.4-46.1 9.3-79.8 54.2-110.9 9.4-6.5 15-17.2 15-28.6 0-9.2-3.7-18-10.2-24.5l-69.4-69.4c-8.6-8.6-21.2-12.1-33-9.1-147.6 37.2-163.2 145.2-164.9 242.5-69.3 2.6-182.2 20.1-225 118.8-182.6 101-296 280-296 471 0 306.3 280.4 555.6 625 555.6s625-249.2 625-555.6c0-191-113.4-370-296-470.9zm-606.8 89c0-72.1 25.2-138.9 208.3-138.9 19 0 34.7-15.7 34.7-34.7 0-105.4 4.8-173.6 94.1-204l28.1 28c-53.4 41.7-52.8 125.1-52.8 176 0 19 15.7 34.7 34.7 34.7 183.1 0 208.3 66.8 208.3 138.9v32.2c-58.6-8.2-120.8-36.2-142.2-81.8-5.7-12.1-18-19.9-31.4-19.9-19 0-34.7 15.7-34.7 34.7 0 88.2-55.8 136.7-68.7 138.9-14.4-2.3-70.2-50.7-70.2-138.9 0-16-11-30-26.6-33.8-2.7-.6-5.4-1-8.1-.9-13 0-25 7.3-30.9 19-25.8 50.5-90.4 75-142.7 82.5v-32zm277.8 868.1c-306.3 0-555.6-218.1-555.6-486.1 0-149.6 76.8-286.9 208.3-378.6v66.2c0 19 15.7 34.7 34.7 34.7 66.7 0 131.8-21 185.8-60.2C731.7 712.7 790.3 764 833.2 764c42.7 0 101-50.9 126.3-128.6 54.3 38.8 119.4 59.5 186.2 59.2 19 0 34.7-15.7 34.7-34.7v-66.2c131.6 91.8 208.3 229.1 208.3 378.7 0 268-249.2 486.1-555.6 486.1z"
        );

        pathFive.setAttribute("class", "line-draw");

        svg.appendChild(pathFive);

        let t = document.createElement("li");
        t.setAttribute("class", "full-tomato");
        /*let element = svg.getElementById("pathNumFour");
        element.setAttributeNS(null, 'class', "tomato-fill");*/
        t.appendChild(svg);

        records[i] = t;

        ul.appendChild(t);
        console.log(records.length);
      }

      if (records.length % 2 != 0) {
        let xmlns = "http://www.w3.org/2000/svg";
        let svg = document.createElementNS(xmlns, "svg");
        svg.setAttribute("width", 100);
        svg.setAttribute("height", 100);
        svg.setAttribute("viewBox", "0 0 1667 1667");
        svg.setAttribute("stroke-linejoin", "round");
        svg.setAttribute("id", "mySVG");

        let pathOne = document.createElementNS(xmlns, "path");
        pathOne.setAttribute(
          "d",
          "M856.2 151.9L759.3 393 517.6 496.8l19.2 163.6 171.8-63.7 147 152.4.7-597.3z"
        );
        pathOne.setAttribute("class", "a");
        svg.appendChild(pathOne);

        let pathTwo = document.createElementNS(xmlns, "path");
        pathTwo.setAttribute(
          "d",
          "M848.9 177.6l73.8 43.3 23.1 197.9 241.7 103.8-19.2 163.6-171.8-63.6-147 152.4-.7-597.3z"
        );
        pathTwo.setAttribute("class", "a");
        svg.appendChild(pathTwo);

        let pathThree = document.createElementNS(xmlns, "path");
        pathThree.setAttribute(
          "d",
          "M855.7 723l-150.9-97.1L523 637.5l-40.5-51.7-54.1 16.1-146.9 120.2-40 182.4 9 95.6-4.7 87.1 105.6 235.3 241.2 113 259.5 68.9 3.6-781.5z"
        );
        pathThree.setAttribute("class", "b tomato-fill");

        svg.appendChild(pathThree);

        let pathFour = document.createElementNS(xmlns, "path");
        pathFour.setAttribute(
          "d",
          "M814.3 716.7l150.9-97.1 181.8 11.6 40.5-51.7 54.1 16.1 146.9 120.2 40 182.4-9 95.6 4.7 87.1-105.5 235.3-241.2 113-259.5 68.9-3.6-781.5z"
        );
        pathFour.setAttribute("class", "b white");
        pathFour.setAttribute("id", "pathNumFour");
        svg.appendChild(pathFour);

        let pathFive = document.createElementNS(xmlns, "path");
        pathFive.setAttribute(
          "d",
          "M1162.3 501.3c-42.7-98.5-155.1-116.1-224.6-118.8 1.4-46.1 9.3-79.8 54.2-110.9 9.4-6.5 15-17.2 15-28.6 0-9.2-3.7-18-10.2-24.5l-69.4-69.4c-8.6-8.6-21.2-12.1-33-9.1-147.6 37.2-163.2 145.2-164.9 242.5-69.3 2.6-182.2 20.1-225 118.8-182.6 101-296 280-296 471 0 306.3 280.4 555.6 625 555.6s625-249.2 625-555.6c0-191-113.4-370-296-470.9zm-606.8 89c0-72.1 25.2-138.9 208.3-138.9 19 0 34.7-15.7 34.7-34.7 0-105.4 4.8-173.6 94.1-204l28.1 28c-53.4 41.7-52.8 125.1-52.8 176 0 19 15.7 34.7 34.7 34.7 183.1 0 208.3 66.8 208.3 138.9v32.2c-58.6-8.2-120.8-36.2-142.2-81.8-5.7-12.1-18-19.9-31.4-19.9-19 0-34.7 15.7-34.7 34.7 0 88.2-55.8 136.7-68.7 138.9-14.4-2.3-70.2-50.7-70.2-138.9 0-16-11-30-26.6-33.8-2.7-.6-5.4-1-8.1-.9-13 0-25 7.3-30.9 19-25.8 50.5-90.4 75-142.7 82.5v-32zm277.8 868.1c-306.3 0-555.6-218.1-555.6-486.1 0-149.6 76.8-286.9 208.3-378.6v66.2c0 19 15.7 34.7 34.7 34.7 66.7 0 131.8-21 185.8-60.2C731.7 712.7 790.3 764 833.2 764c42.7 0 101-50.9 126.3-128.6 54.3 38.8 119.4 59.5 186.2 59.2 19 0 34.7-15.7 34.7-34.7v-66.2c131.6 91.8 208.3 229.1 208.3 378.7 0 268-249.2 486.1-555.6 486.1z"
        );

        pathFive.setAttribute("class", "line-draw");
        svg.appendChild(pathFive);
        let b = document.createElement("li");
        b.setAttribute("class", "half-tomato");
        b.appendChild(svg);

        records[i] = b;

        ul.appendChild(b);
      }
    }
    myFunc();
  };

  /*function currentTomatos() {
    let listItems = document.querySelector(".tomatos");
    let dateElements = listItems.document.querySelectorAll("span");
    for (var x in dateElements) {
      console.log(x + ": " + dateElements[x]);
    }
  }
*/

  // currentTomatos();
  /*
  console.log('Client-side code running');

  const button = document.getElementById('myButton');
  button.addEventListener('click', function(e) {
    console.log('button was clicked');
  
    fetch('/routes/deleteAll', {method: 'DELETE'})
      .then(function(response) {
        if(response.ok) {
          console.log('Click was recorded');
          return;
        }
        throw new Error('Request failed.');
      })
      .catch(function(error) {
        console.log(error);
      });
  });
  */

  const startButton = document.querySelector(".o-play-btn");

  const stopButton = document.querySelector("#pomodoro-stop");
  let updatedWorkSessionDuration;
  let updatedBreakSessionDuration;

  let workDurationInput = document.querySelector("#input-work-duration");
  let breakDurationInput = document.querySelector("#input-break-duration");

  workDurationInput.value = "10";
  breakDurationInput.value = "5";
  let isClockRunning = false;
  // in seconds = 30 mins
  let workSessionDuration = 10;
  let currentTimeLeftInSession = 10;
  // in seconds = 5 mins;
  let breakSessionDuration = 5;
  let type = "Work";
  let timeSpentInCurrentSession = 0;
  let currentTaskLabel = document.querySelector("#pomodoro-clock-task");
  let isClockStopped = true;
  const progressBar = new ProgressBar.Circle("#pomodoro-timer", {
    strokeWidth: 2,
    text: {
      value: "00:10",
    },
    trailColor: "#f4f4f4",
  });
  // START
  startButton.addEventListener("click", () => {
    toggleClock();
  });

  // STOP
  stopButton.addEventListener("click", () => {
    toggleClock(true);
  });
  // Close 
/*
  document.querySelector("close-popup1").addEventListener("click", function(event) {
    let popUp1 = document.getElementById("popup1");
        popUp1.classList.remove("visible");
    toggleClock(true);
    event.preventDefault();
}, false);
document.querySelector("close-popup2").addEventListener("click", function(event) {
  let popUp2 = document.getElementById("popup2");
      popUp2.classList.remove("visible");
  toggleClock(true);
  event.preventDefault();
}, false);*/

  // -------------------------(DISABLED FOR DEMO)-------------------------------------------UPDATE WORK TIME----------------------------
  /*workDurationInput.addEventListener("input", () => {
    updatedWorkSessionDuration = minuteToSeconds(workDurationInput.value);
  });*/

  //-----------------------DEMO Version---------------------------------------->>>>>>
  workDurationInput.addEventListener("input", () => {
    updatedWorkSessionDuration = workDurationInput.value;
  });
  breakDurationInput.addEventListener("input", () => {
    updatedBreakSessionDuration = breakDurationInput.value;
  });



   //-----------------------DEMO Version---------------------------------------->>>>>>

  // -------------------------(MODIFIED FOR DEMO--------------------------------------------UPDATE PAUSE TIME-------------------------
  /* breakDurationInput.addEventListener("input", () => {
    updatedBreakSessionDuration = minuteToSeconds(breakDurationInput.value);
  });*/
  class AndrewsProgress {
    constructor(score) {
      this.score = score;
    }
    increment() {
      this.score++;
    }
  }
  const clientCount = function clientCount() {
    let x = document.querySelector(".tomatos").children;
    console.log(Array.from(x));
  };

  const july2020 = new AndrewsProgress(30);

  const minuteToSeconds = (mins) => {
    return mins * 60;
  };
  const setUpdatedTimers = () => {
    if (type === "Work") {
      currentTimeLeftInSession = updatedWorkSessionDuration ?
        updatedWorkSessionDuration :
        workSessionDuration;

      workSessionDuration = currentTimeLeftInSession;
    } else {
      currentTimeLeftInSession = updatedBreakSessionDuration ?
        updatedBreakSessionDuration :
        breakSessionDuration;
      breakSessionDuration = currentTimeLeftInSession;
    }
  };
  const toggleClock = (reset) => {

    togglePlayPauseIcon(reset);

    if (reset) {
      stopClock();
    } else {
      console.log(isClockStopped);
      if (isClockStopped) {
        setUpdatedTimers();
        isClockStopped = false;
      }

      if (isClockRunning === true) {
        // pause
        clearInterval(clockTimer);
        // update icon to the play one
        // set the vale of the button to start or pause
        isClockRunning = false;
      } else {
        // start
        clockTimer = setInterval(() => {
          stepDown();
          displayCurrentTimeLeftInSession();
          progressBar.set(calculateSessionProgress());
        }, 1000);
        isClockRunning = true;
      }
      // new
      showStopIcon();
    }
  };

  const stepDown = () => {

    if (currentTimeLeftInSession > 0) {
      // decrease time left / increase time spent
      currentTimeLeftInSession--;
      timeSpentInCurrentSession++;
    } else if (currentTimeLeftInSession === 0) {
     // timeSpentInCurrentSession = 0;
     let statusText = document.getElementById("work-session-status");
     statusText.innerText = timeSpentInCurrentSession;

      // Timer is over -> if work switch to break, viceversa
      if (type === "Work") {

        let statusText = document.getElementById("work-session-status");
        statusText.innerText = timeSpentInCurrentSession;
              
              let popUp = document.getElementById("popup1");
              popUp.classList.add("visible");
              let continueWork = document.getElementById("continue");
              let takeBreak = document.getElementById("break");
              
              let closePopUp1 = document.getElementById("close-popup1");
              continueWork.onclick = function()
              { 
                currentTimeLeftInSession = workSessionDuration;
               
                displaySessionLog("Work");
                type = "Work";
                timeSpentInCurrentSession = 0;
                setUpdatedTimers();
                currentTaskLabel.value = "Work";
                currentTaskLabel.disabled = false;
                popUp.classList.remove("visible");
              }
              takeBreak.onclick = function(){
                currentTimeLeftInSession = breakSessionDuration;
               
                displaySessionLog("Work");
                type = "Break";
                timeSpentInCurrentSession = 0;
                setUpdatedTimers();
                currentTaskLabel.value = "Break";
                currentTaskLabel.disabled = true;
                popUp.classList.remove("visible");
              }
              closePopUp1.onclick = function(event){
                currentTimeLeftInSession = 10;
               
                timeSpentInCurrentSession = 0;
                currentTaskLabel.value = "Work";
                currentTaskLabel.disabled = true;
                popUp.classList.remove("visible");
                setUpdatedTimers();
                stopClock();
                startButton.classList.remove("o-play-btn--playing");
                event.preventDefault();

              }

              /*
  document.querySelector("close-popup1").addEventListener("click", function(event) {
    let popUp1 = document.getElementById("popup1");
        popUp1.classList.remove("visible");
    toggleClock(true);
    event.preventDefault();
}, false);
document.querySelector("close-popup2").addEventListener("click", function(event) {
  let popUp2 = document.getElementById("popup2");
      popUp2.classList.remove("visible");
  toggleClock(true);
  event.preventDefault();
}, false);*/
       
      } else if (type == "Break"){
        let popUp2 = document.getElementById("popup2");          
        popUp2.classList.add("visible");
        let backToWork = document.getElementById("backtowork");
        let closePopUp2 = document.getElementById("close-popup2");
        backToWork.onclick = function(){
          currentTimeLeftInSession = workSessionDuration;
          timeSpentInCurrentSession = 0;
          type = "Work";
          currentTaskLabel.value = "Work";
         currentTaskLabel.disabled = false;
         
         
          
          popUp2.classList.remove("visible");
        }
        closePopUp2.onclick = function(event){
          currentTimeLeftInSession = 10;
               
          timeSpentInCurrentSession = 0;
          currentTaskLabel.value = "Work";
          currentTaskLabel.disabled = true;
          popUp2.classList.remove("visible");
          setUpdatedTimers();
          stopClock();
          startButton.classList.remove("o-play-btn--playing");
          event.preventDefault();
        }
       }
      
      else {
        currentTimeLeftInSession = workSessionDuration;
        timeSpentInCurrentSession = 0;
        type = "Work";
       
        currentTaskLabel.disabled = false;
        
      }
    }
    displayCurrentTimeLeftInSession();
  };

  const stopClock = () => {
    setUpdatedTimers();
    displaySessionLog(type);
    //updateProgress(type);
    clientCount();
    clearInterval(clockTimer);
    isClockStopped = true;
    isClockRunning = false;
    currentTimeLeftInSession = workSessionDuration;
    displayCurrentTimeLeftInSession();
    type = "Work";

    timeSpentInCurrentSession = 0;
  };

  const displaySessionLog = function displaySessionLog(type) {
    const WorkSessionStatus = document.getElementById("work-session-status");
    let timePassed = WorkSessionStatus.innerText;
    const p = document.createElement("p");
    // let WorkSessionStatusChild = WorkSessionStatus.lastElementChild;
    if (type === "Work") {
      // currentTaskLabel.value = "Break";
      sessionLabel = currentTaskLabel.value ? currentTaskLabel.value : "Work";
      workSessionLabel = sessionLabel;

      
    } else {
      sessionLabel = "Break";
    }
    let xmlns = "http://www.w3.org/2000/svg";
    let svg = document.createElementNS(xmlns, "svg");
    svg.setAttribute("width", 100);
    svg.setAttribute("height", 100);
    svg.setAttribute("viewBox", "0 0 1667 1667");
    svg.setAttribute("stroke-linejoin", "round");
    svg.setAttribute("id", "mySVG");

    let pathOne = document.createElementNS(xmlns, "path");
    pathOne.setAttribute(
      "d",
      "M856.2 151.9L759.3 393 517.6 496.8l19.2 163.6 171.8-63.7 147 152.4.7-597.3z"
    );
    pathOne.setAttribute("class", "a");
    svg.appendChild(pathOne);

    let pathTwo = document.createElementNS(xmlns, "path");
    pathTwo.setAttribute(
      "d",
      "M848.9 177.6l73.8 43.3 23.1 197.9 241.7 103.8-19.2 163.6-171.8-63.6-147 152.4-.7-597.3z"
    );
    pathTwo.setAttribute("class", "a");
    svg.appendChild(pathTwo);

    let pathThree = document.createElementNS(xmlns, "path");
    pathThree.setAttribute(
      "d",
      "M855.7 723l-150.9-97.1L523 637.5l-40.5-51.7-54.1 16.1-146.9 120.2-40 182.4 9 95.6-4.7 87.1 105.6 235.3 241.2 113 259.5 68.9 3.6-781.5z"
    );
    pathThree.setAttribute("class", "b tomato-fill");

    svg.appendChild(pathThree);

    let pathFour = document.createElementNS(xmlns, "path");
    pathFour.setAttribute(
      "d",
      "M814.3 716.7l150.9-97.1 181.8 11.6 40.5-51.7 54.1 16.1 146.9 120.2 40 182.4-9 95.6 4.7 87.1-105.5 235.3-241.2 113-259.5 68.9-3.6-781.5z"
    );
    pathFour.setAttribute("class", "b white");
    pathFour.setAttribute("id", "pathNumFour");
    svg.appendChild(pathFour);

    let pathFive = document.createElementNS(xmlns, "path");
    pathFive.setAttribute(
      "d",
      "M1162.3 501.3c-42.7-98.5-155.1-116.1-224.6-118.8 1.4-46.1 9.3-79.8 54.2-110.9 9.4-6.5 15-17.2 15-28.6 0-9.2-3.7-18-10.2-24.5l-69.4-69.4c-8.6-8.6-21.2-12.1-33-9.1-147.6 37.2-163.2 145.2-164.9 242.5-69.3 2.6-182.2 20.1-225 118.8-182.6 101-296 280-296 471 0 306.3 280.4 555.6 625 555.6s625-249.2 625-555.6c0-191-113.4-370-296-470.9zm-606.8 89c0-72.1 25.2-138.9 208.3-138.9 19 0 34.7-15.7 34.7-34.7 0-105.4 4.8-173.6 94.1-204l28.1 28c-53.4 41.7-52.8 125.1-52.8 176 0 19 15.7 34.7 34.7 34.7 183.1 0 208.3 66.8 208.3 138.9v32.2c-58.6-8.2-120.8-36.2-142.2-81.8-5.7-12.1-18-19.9-31.4-19.9-19 0-34.7 15.7-34.7 34.7 0 88.2-55.8 136.7-68.7 138.9-14.4-2.3-70.2-50.7-70.2-138.9 0-16-11-30-26.6-33.8-2.7-.6-5.4-1-8.1-.9-13 0-25 7.3-30.9 19-25.8 50.5-90.4 75-142.7 82.5v-32zm277.8 868.1c-306.3 0-555.6-218.1-555.6-486.1 0-149.6 76.8-286.9 208.3-378.6v66.2c0 19 15.7 34.7 34.7 34.7 66.7 0 131.8-21 185.8-60.2C731.7 712.7 790.3 764 833.2 764c42.7 0 101-50.9 126.3-128.6 54.3 38.8 119.4 59.5 186.2 59.2 19 0 34.7-15.7 34.7-34.7v-66.2c131.6 91.8 208.3 229.1 208.3 378.7 0 268-249.2 486.1-555.6 486.1z"
    );

    pathFive.setAttribute("class", "line-draw");

    svg.appendChild(pathFive);

    let tomatos = document.getElementById("pomodoro-sessions");
    let lastElm = tomatos.lastElementChild;
    //let mySVG = document.getElementById("mySVG");
    let li = document.createElement("li");
    if (sessionLabel == "Work" && timePassed > 5) {
      if (!lastElm || lastElm.className == "full-tomato") {
        li.setAttribute("class", "half-tomato");
        li.appendChild(svg);
        tomatos.appendChild(li);
      } else if (lastElm.className == "half-tomato") {
        lastElm.setAttribute("class", "full-tomato");
        let mySVG = lastElm.lastElementChild;

        let element = mySVG.getElementById("pathNumFour");
        element.setAttributeNS(null, "class", "tomato-fill");
        lastElm.setAttribute("class", "full-tomato");

        console.log("full-tomato");
      } else {
        console.log("nope");
      }
    }

    /*let elapsedTime = parseInt(timeSpentInCurrentSession / 60);
    elapsedTime = elapsedTime > 0 ? elapsedTime : "< 1";

    const text = document.createTextNode(
      `${sessionLabel} : ${elapsedTime} min`
    );
    const text = document.createTextNode(timeSpentInCurrentSession);
    p.appendChild(text);
    WorkSessionStatus.appendChild(p);*/
  };

  let ourObserver = new MutationObserver((mutations) => {
    for (let mutation of mutations) {
      console.log("Mutation detected");
    }
  });

  ourObserver.observe(document.querySelector(".tomatos-block"), {
    childList: true,
    subtree: true,
    attributes: true,
  });

  /*const updateProgress = function updateProgress() {
    let tomatos = document.getElementById("pomodoro-sessions");
    let lastElm = tomatos.lastElementChild;
    let deleteButton = document.getElementById("#slide-in");
    if(!lastElm){ 
      console.log("no elements");
      
    }else {deleteButton.classList.toggle("show");
    }
    let halfTomatoURL = "url('" + 'http://www.sandboxmulti.com/wp-content/uploads/2020/09/half-tomato.svg?' + (new Date()).getTime() + "')";
let fullTomatoURL = "url('" + 'http://www.sandboxmulti.com/wp-content/uploads/2020/09/full-tomato-1.svg?' + (new Date()).getTime() + "')";
    let halfTomato = document.querySelector("half-tomato");
    halfTomato.style.backgroundImage = halfTomatoURL; 
    let fullTomato = document.querySelector("full-tomato");
    fullTomato.style.backgroundImage = fullTomatoURL; */

  const displayCurrentTimeLeftInSession = () => {
    const secondsLeft = currentTimeLeftInSession;
    let result = "";
    const seconds = secondsLeft % 60;
    const minutes = parseInt(secondsLeft / 60) % 60;
    let hours = parseInt(secondsLeft / 3600);
    // add leading zeroes if it's less than 10
    function addLeadingZeroes(time) {
      return time < 10 ? `0${time}` : time;
    }
    if (hours > 0) result += `${hours}:`;
    result += `${addLeadingZeroes(minutes)}:${addLeadingZeroes(seconds)}`;
    progressBar.text.innerText = result.toString();
  };

  const togglePlayPauseIcon = (reset) => {
    //const playIcon = document.querySelector(".o-play-btn__icon");
    //const pauseIcon = document.querySelector("#pause-icon");
    if (reset) {
      // when resetting -> always revert to play icon
      if (startButton.classList.contains("o-play-btn--playing")) {
        startButton.classList.remove("o-play-btn--playing");
      }
      /*if (!pauseIcon.classList.contains("hidden")) {
        pauseIcon.classList.add("hidden");
      }*/
    } else {
      startButton.classList.toggle("o-play-btn--playing");
      // pauseIcon.classList.toggle("hidden");
    }
  };

  const showStopIcon = () => {
    const stopButton = document.querySelector("#pomodoro-stop");
    stopButton.classList.remove("hidden");
  };

  const calculateSessionProgress = () => {
    // calculate the completion rate of this session
    const sessionDuration =
      type === "Work" ? workSessionDuration : breakSessionDuration;
    return (timeSpentInCurrentSession / sessionDuration) * 10;
  };
});