let selectTime = document.getElementById("show-time");
let showTime = selectTime.value;

const localTimeZoneOffset = (new Date()).getTimezoneOffset();
const offset = (localTimeZoneOffset + 60) * 60 * 1000;

let timesEls = document.querySelectorAll(".time");
const cetTimes = [];
for (let i = 0; i < timesEls.length; i++) {
  cetTimes[i] = timesEls[i].textContent;
}

selectTime.addEventListener("change", handleChange);

function handleChange(e) {
  showTime = e.target.value;
  for (let i = 0; i < timesEls.length; i++) {
    let time = timesEls[i];
      let date = new Date();
      if (showTime === "local") {
      const [hours, minutes] = time.textContent.split(":");
      date.setHours(hours);
      date.setMinutes(minutes);
      const dateTime = date.getTime();
      const newDateTime = new Date(dateTime - offset);
      const newHours = newDateTime.getHours();
      const newMinutes = newDateTime.getMinutes();
      time.textContent = `${newHours}:${newMinutes || "00"}`;
    }
    if (showTime === "cet") {
      time.textContent = cetTimes[i];
    }
  }
}