//global variables
var hourNow = moment().format("HH");
var dayNow = moment().format("MMM, DD, YYYY");
$("#currentDay").text(dayNow);
var workHours = ["08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18"];

console.log(hourNow);

//general functions
    //sets the colors for the hour slots
function pastPresentFuture() {
    for (let index = 0; index < workHours.length; index++) {
        var workHour = document.getElementById(`t${workHours[index]}`).dataset.hour;
        var workHourEl = document.getElementById(`t${workHour}`)
        console.log(workHour);
        if (workHour < hourNow) {
            console.log(`${workHour} is past`);
            workHourEl.classList.add("past");
        } else if (workHour == hourNow) {
            console.log(`${workHour} is present`)
            workHourEl.classList.add("present")
        } else {
            console.log(`${workHour} is future`);
            workHourEl.classList.add("future");
        }
    }
};

pastPresentFuture();

    //renders any activities saved in local storage
function renderActivities() {
    for (let j = 0; j < workHours.length; j++) {
        var hourActivity = workHours[j];
        var hourSaved = document.getElementById(`t${hourActivity}`);
        var storedActivity = JSON.parse(localStorage.getItem(`${hourActivity}th`));
        if (storedActivity !== null) {
        hourSaved.setAttribute("value", storedActivity);
        }
    }
};

renderActivities();

//event listeners

document.addEventListener("click", function (event) {
    if (event.target.matches(".btn")) {
        var buttonHour = event.target.dataset.btn;
        console.log(buttonHour);
        var hourInput = document.getElementById(`t${buttonHour}`).value;
        localStorage.setItem(`${buttonHour}th`, JSON.stringify(hourInput))
    }
});
