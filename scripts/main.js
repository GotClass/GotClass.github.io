var months = {};
var weatherStates = {Rain: "", Sunny: "", Clear: "", Scorching: ""};
var daysOfTheWeek = [];


let generateButton = document.getElementById('generateCalendarButton');

generateButton.addEventListener('click', function(){
    let calendarDays = document.querySelectorAll('.monthDay');
    let calendarMonths = document.querySelectorAll('.monthHeader');
    let monthContainers = document.querySelectorAll('.month');


    calendarDays.forEach(function(day){
        day.remove();
    });

    calendarMonths.forEach(function(month){
        month.remove();
        delete months[month.textContent];
    });

    monthContainers.forEach(function(container){
        container.remove();
        
    });


    createCalendar();
    determineWeekDays();
    drawCalendar();
    generateButton.textContent = 'Re-Generate Calendar';
});


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
                months[monthName] = {Days: Number(monthDays) };
                thisLoop = false;

            }else{
                alert("Please enter a number.");
                continue;
            }
        }

       
        }
        
}

function determineWeekDays(){
    let weekLength = prompt('How many days are there in a week?');

    while(isNaN(weekLength) || weekLength === '')
    {
        alert('Please enter a number.');
        weekLength = prompt('How many days are there in a week?');
    }

    for (let i = 1; i <= Number(weekLength); i++){
        let newWeekDay = prompt('Name day of the week ' + i);
        daysOfTheWeek[i - 1] = newWeekDay;
    }
}



function drawCalendar(){
    let nextDay = 0;
    
    for (let monthKey in months){
        let monthHeader = document.createElement("h2");
        monthHeader.classList.add('monthHeader');
        var calendar = document.getElementById("calendar");
        var container = document.createElement("div");
        container.classList.add("month");
        monthHeader.textContent = monthKey;
        calendar.appendChild(monthHeader);
        calendar.appendChild(container);
        

        for (let i = 1; i <= months[monthKey].Days; i++){
            let newDay = document.createElement("p");
            newDay.classList.add('monthDay');

            let weekDay = document.createElement('p');
            weekDay.textContent = daysOfTheWeek[nextDay]; 

            let eventButton = document.createElement('button');
            eventButton.classList.add('addEventButton');
            eventButton.textContent = 'Add Event';
            
            let weatherKeys = Object.keys(weatherStates);
            let randomIndex = Math.floor(Math.random() * weatherKeys.length);
            let randomWeather = weatherKeys[randomIndex];
            
            let lastDigitOfI = i.toString().slice(-1);
            let secondToLastDigit = i.toString().slice(-2, -1);
            lastDigitOfI = Number(lastDigitOfI);
            secondToLastDigit = Number(secondToLastDigit);
            let suffix = '';
            if (lastDigitOfI === 1 && secondToLastDigit !== 1)
            {
                suffix = 'st';
            }else if(lastDigitOfI === 2 && secondToLastDigit !== 1){
                suffix = 'nd';
            }else if(lastDigitOfI === 3 && secondToLastDigit !== 1){
                suffix = 'rd';
            }else{
                suffix = 'th';
            }

            newDay.innerHTML = weekDay.textContent + '<br>' + ' (' + i + suffix + ') ' + ' - ' + " (" + randomWeather + ") ";
            
            container.appendChild(newDay);
            newDay.appendChild(eventButton);
            
            if (nextDay < daysOfTheWeek.length - 1)
            {
                nextDay = nextDay + 1;
            }else{
                nextDay = 0;
            }
            
            
        }
    }

    eventButtons = document.querySelectorAll(".addEventButton");

    eventButtons.forEach(function(element){
        element.addEventListener('click', function(){
            let newContainer = document.createElement('div');
            newContainer.classList.add('eventContainer');

            let newEvent = document.createElement('p');
            newEvent.classList.add('event');
            newEvent.textContent = 'New Event';

            let deleteButtonContainer = document.createElement('div');
            deleteButtonContainer.classList.add('deleteButtonDiv');

            let deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.classList.add('deleteEventButton');
            
            
            

            newEvent.addEventListener('click',function(){
                newEvent.setAttribute('contenteditable', 'true');
                event.stopPropagation();
            });

            deleteButton.addEventListener('click',function(){
                this.parentNode.previousElementSibling.remove();
                deleteButton.parentNode.remove();
                deleteButton.remove();
                event.stopPropagation();
            });

            this.parentNode.appendChild(newEvent);
            newEvent.parentNode.appendChild(deleteButtonContainer);
            deleteButtonContainer.appendChild(deleteButton);
            
        });
    });

}

