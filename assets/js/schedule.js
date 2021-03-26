let selectTime = document.getElementById("show-time");
let showTime = selectTime.value;

const localTimeZoneOffset = (new Date("Apr 21 2021")).getTimezoneOffset();
const offset = (localTimeZoneOffset + 60) * 60 * 1000;

const optionLocal = document.getElementById("option-local");

function getReadableOffset(offsetNumberRaw) {
  const offsetNumber = offsetNumberRaw * -1;
  const offsetHours = offsetNumber > 0 ? Math.floor(offsetNumber / 60) : Math.ceil(offsetNumber / 60);
  const remainderMinutes = Math.abs(offsetNumber % 60);
  const displayHours = hours => hours < 0 ? "" + hours : "+" + hours;
  if (remainderMinutes === 0) return displayHours(offsetHours);

  const displayMinutes = minutes => minutes < 10 ? "0" + minutes : "" + minutes;
  return `${displayHours(offsetHours)}:${displayMinutes(remainderMinutes)}`
}

optionLocal.textContent += ` (UTC ${getReadableOffset(localTimeZoneOffset)})`;

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
    if (showTime === "local") {
      let date = new Date();
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