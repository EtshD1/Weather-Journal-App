(function () {
  /* Global variables */
  // Get today's date/time
  const todayDate = new Date();
  const UsFormat = todayDate.getMonth() + '.' + todayDate.getDate() + '.' + todayDate.getFullYear();
  const hour = todayDate.getHours();
  // HTML elements
  const generateBtn = document.querySelector("#generate");
  const userEntry = {
    zip: document.querySelector("#zip"),
    feelings: document.querySelector("#feelings")
  };
  const entryHolder = {
    main: document.querySelector("#entryHolder"),
    date: document.querySelector("#date"),
    temp: document.querySelector("#temp"),
    content: document.querySelector("#content")
  };
  /* Personal API Key for OpenWeatherMap API */
  const APIurl = "api.openweathermap.org/data/2.5/weather?zip=";
  const APIkey = "&appid=83cc7105451f87232b0b70e1aabb757d";

  /* Events */
  // Change background depending on the hour
  if (hour >= 6 && hour < 18) {
    document.body.classList.add("day");
  } else {
    document.body.classList.add("night");
  }
  generateBtn.addEventListener("click", generateFun);
  entryHolder.date.innerHTML = UsFormat;

  /* Functions */
  function generateFun() {
    console.log(userEntry.zip.value);
    console.log(userEntry.feelings.value);
  }

})()