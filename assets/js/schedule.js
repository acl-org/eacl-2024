function schedule() {
  // CEST (UTC+2)
  const conferenceTimeOffset = 120;

  // Conference start date
  const conferenceDate = "Apr 21 2021";

  let selectTime = document.getElementById("show-time");
  if (!selectTime) return;
  let showTime = selectTime.value;

  const localTimeZoneOffset = (new Date(conferenceDate)).getTimezoneOffset();

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

  const relativeOffset = (localTimeZoneOffset + conferenceTimeOffset) * 60 * 1000;

  let timesEls = document.querySelectorAll(".time");
  const defaultTimes = [];
  for (let i = 0; i < timesEls.length; i++) {
    defaultTimes[i] = timesEls[i].textContent;
  }

  selectTime.addEventListener("change", handleChange);

  function handleChange(e) {
    showTime = e.target.value;
    for (let i = 0; i < timesEls.length; i++) {
      let time = timesEls[i];
      switch (showTime) {
        case "local":
          let date = new Date();
          const [hours, minutes] = time.textContent.split(":");
          date.setHours(hours);
          date.setMinutes(minutes);
          const dateTime = date.getTime();
          const newDateTime = new Date(dateTime - relativeOffset);
          const newHours = newDateTime.getHours();
          const newMinutes = newDateTime.getMinutes();
          const newMinutesFormatted = newMinutes < 10 ? "0" + newMinutes : newMinutes;
          time.textContent = `${newHours}:${newMinutesFormatted}`;
          break;
        default:
          time.textContent = defaultTimes[i];
      }
    }
  }
}

schedule();