// User Story
// AS AN employee with a busy schedule
// I WANT to add important events to a daily planner
// SO THAT I can manage my time effectively

// Acceptance Criteria
// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist

//moment.js to display day/date at top of calendar
//create timeblock cards for 8am - 6pm time slots.
    // if current time (h) > time block time = past color
    // if current time (h) === time block time = current color
    // if current time (h) < time block time = future color
    // if current time not in time blocks, no color?...
//text input boxes for each time box
    // local storage function for each time block, with key for each hour?
    //save button for local storage can probably use event.target to get the buttons associated hour block, and therefore have only one event listener for the save buttons?...
    //render function that checks local storage status and renders any saved inputs

var hourNow = moment().hour(14).format("HH");
var dayNow = moment().format("MMM, DD, YYYY");
$("#currentDay").text(dayNow);
var workHours = ["08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18"];

console.log(hourNow);

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

