class TimeText {
  constructor(text, converter) {
    this.text = text;
    this.converter = converter;
  }

  display(time) {
    this.text.innerText = this.converter.timeToText(time);
  }
}

export default TimeText;
