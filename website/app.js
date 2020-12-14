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
  const APIkey = "83cc7105451f87232b0b70e1aabb757d";
  /* Events */
  // Change background depending on the hour
  if (hour >= 6 && hour < 18) {
    document.body.classList.add("day");
  } else {
    document.body.classList.add("night");
  }
  generateBtn.addEventListener("click", generateFun);
  /* Functions */
  async function generateFun() {
    getData()
  }
  // Async function for sending a GET request to the OpenWeatherMap API
  async function getData() {
    const URL = "http://api.openweathermap.org/data/2.5/weather?zip=" + userEntry.zip.value + "&appid=" + APIkey;
    const response = await fetch(URL);
    const newData = await response.json();
    const entryData = {
      temperature: newData.main.temp,
      date: UsFormat,
      content: userEntry.feelings.value,
    }
    setInfo(entryData);
    return entryData;
  }
  // Sets fetched information to HTML
  function setInfo(data = {}) {
    entryHolder.temp.innerHTML = data.temperature;
    entryHolder.date.innerHTML = data.date;
    entryHolder.content.innerHTML = data.content;
  }
})();