class TimeDisplay {
  constructor(converter) {
    this.converter = converter;
  }

  display(time) {
    const toDisplay = this.converter.timeToText(time);
    this.#displayClockText(toDisplay);
    this.#displayTitle(toDisplay);
  }

  #displayClockText(toDisplay) {
    document.getElementById("time").innerText = toDisplay;
  }

  #displayTitle(toDisplay) {
    document.title = toDisplay;
  }
}

export default TimeDisplay;
