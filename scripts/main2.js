class Day{
    constructor(name, month, numb){
        this.name = name;
        this.month = month;
        this.numb = numb;
    }

}

class Month{
    constructor(name, dayMax){
        this.name = name;
        this.dayMax = dayMax;
    }
}


function setDate()
{
    let seasonDisplay = document.getElementById("season");
    let monthDisplay = document.getElementById("month");
    let dayDisplay = document.getElementById("day");
    let yearDisplay = document.getElementById("year");
    
    seasonDisplay.textContent = "Fall";
    monthDisplay.textContent = "9";
    dayDisplay.textContent = "15";
    yearDisplay.textContent = "2023";
}

var months = {};
var weatherStates = {Rain: "", Sunny: "", Clear: "", Scorching: ""};
var dayOfTheWeek = {Sunday:"", Monday: "", Tuesday: "", Wednesday: "", Thursday: "", Friday: "", Saturday: ""};

function createCalendar(){
    let monthCount = prompt("How many months?");

    if (monthCount){
       
        if (!isNaN(monthCount))
        {
            monthCount = Number(monthCount);
            detailMonths(monthCount);

        }else{
            alert("Please enter a number");
            createCalendar();
        }
    }else{
        alert("Please enter the amount of months.");
        createCalendar();
    }
}

function detailMonths(amount){

    for (let i = 1; i <= amount; i++){
        let monthName = prompt("Name the " + i + " month.");
        

        let thisLoop = true;

        while(thisLoop){
            let monthDays = prompt("How many days?");

            if (!isNaN (monthDays)){
                new Month(monthName, monthDays);
                thisLoop = false;

            }else{
                alert("Please enter a number.");
                continue;
            }
        }

       
        }
        
}

function weekMax(){
    let weekInputLoop = true;
        
    while(weekInputLoop){
        weekLimit = prompt("How many days per week?");

        if (isNaN (weekLimit) || (!weekLimit)){
            alert("Please enter a number.");
        }else{
            weekLimit = Number(weekLimit);
            weekInputLoop = false;
        }
    }
}


createCalendar();
weekMax();

for (let monthKey in months){
    let monthHeader = document.createElement("h2");
    var calendar = document.getElementById("calendar");
    var container = document.createElement("div");
    container.classList.add("month");
    monthHeader.textContent = monthKey;
    calendar.appendChild(monthHeader);
    calendar.appendChild(container);
    

    for (let i = 1; i <= months[monthKey].Days; i++){
        let newDay = document.createElement("p");
        newDay.classList.add("monthDay");
        let weatherKeys = Object.keys(weatherStates);
        let randomIndex = Math.floor(Math.random() * weatherKeys.length);
        let randomWeather = weatherKeys[randomIndex];
        newDay.textContent = i + " (" + randomWeather + ")";
        container.appendChild(newDay);
        
    }
}



