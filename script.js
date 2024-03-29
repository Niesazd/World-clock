function changeTheme() {
  let background = document.querySelector("body");
  let worldClock = document.querySelector("#world-clock");
  let button = document.querySelector("button");
  let selectLocation = document.querySelector("#select-location");
  let footer = document.querySelectorAll("a");

  background.classList.toggle("dark-mode");
  worldClock.classList.toggle("world-clock-app-dark");
  button.classList.toggle("button-dark");
  selectLocation.classList.toggle("select-location-time-dark");
  footer.forEach(function link(footer) {
    footer.classList.toggle("link-dark");
  });

  if (button.className === "button-dark") {
    button.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-brightness-high" viewBox="0 0 16 16">
  <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708"/>
</svg> Light mode`;
  } else {
    button.innerHTML = ` <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-moon-fill" viewBox="0 0 16 16">
  <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278"/>
</svg> Dark mode`;
  }
}

function currentTimeCol1() {
  //Los Angeles
  let currentTimeUS = document.querySelector("#time-row-1");
  let currentTimeUSData = moment.tz("America/Los_Angeles").format("h:mm:ss A");

  let currentDateUS = document.querySelector("#date-row-1");
  let currentDateUSData = moment
    .tz("America/Los_Angeles")
    .format("MMMM Do YYYY");

  currentTimeUS.innerHTML = currentTimeUSData;
  currentDateUS.innerHTML = currentDateUSData;

  //Paris
  let currentTimeFR = document.querySelector("#time-row-2");
  let currentTimeFRData = moment.tz("Europe/Paris").format("h:mm:ss A");

  let currentDateFR = document.querySelector("#date-row-2");
  let currentDateFRData = moment.tz("Europe/Paris").format("MMMM Do YYYY");

  currentTimeFR.innerHTML = currentTimeFRData;
  currentDateFR.innerHTML = currentDateFRData;

  //Tokyo
  let currentTimeJP = document.querySelector("#time-row-3");
  let currentTimeJPData = moment.tz("Asia/Tokyo").format("h:mm:ss A");

  let currentDateJP = document.querySelector("#date-row-3");
  let currentDateJPData = moment.tz("Asia/Tokyo").format("MMMM Do YYYY");

  currentTimeJP.innerHTML = currentTimeJPData;
  currentDateJP.innerHTML = currentDateJPData;

  //Sydney
  let currentTimeAU = document.querySelector("#time-row-4");
  let currentTimeAUData = moment.tz("Australia/Sydney").format("h:mm:ss A");

  let currentDateAU = document.querySelector("#date-row-4");
  let currentDateAUData = moment.tz("Australia/Sydney").format("MMMM Do YYYY");

  currentTimeAU.innerHTML = currentTimeAUData;
  currentDateAU.innerHTML = currentDateAUData;
}

setInterval(currentTimeCol1, 1000);

function chooseLocation(event) {
  let otherLocation = document.querySelector("#select-location");
  let text = document.querySelector(".container");

  if (otherLocation.value === "Current location") {
    let timeZone = moment.tz.guess();
    let city = timeZone.split("/")[1].replaceAll("_", " ");
    let time = moment.tz(timeZone).format("h:mm:ss A");
    let date = moment.tz(timeZone).format("MMMM Do YYYY");
    text.innerHTML = `<div class="col-1 row-1">
          <div>
            <h2>${city}</h2>
            <p id="date-row-1">${date}</p>
          </div>
          <div class="current-time">${time}</div>
        </div>`;
  } else if (otherLocation.value === "New York") {
    time = moment.tz("America/New_York").format("h:mm:ss A");
    date = moment.tz("America/New_York").format("MMMM Do YYYY");
    text.innerHTML = `<div class="col-1 row-1">
          <div>
            <h2>New York US</h2>
            <p id="date-row-1">${date}</p>
          </div>
          <div class="current-time">${time}</div>
        </div>`;
  } else if (otherLocation.value === "London") {
    time = moment.tz("Europe/London").format("h:mm:ss A");
    date = moment.tz("Europe/London").format("MMMM Do YYYY");
    text.innerHTML = `<div class="col-1 row-1">
          <div>
            <h2>London UK</h2>
            <p id="date-row-1">${date}</p>
          </div>
          <div class="current-time">${time}</div>
        </div>`;
  }
  // else {
  //   setInterval(currentTimeCol1, 1000);
  // }
}

let locationSelect = document.querySelector("#select-location");

locationSelect.addEventListener("change", chooseLocation);
