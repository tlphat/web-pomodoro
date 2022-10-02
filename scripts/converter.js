class Converter {
  timeToText(time) {
    const minute = Math.floor(time / 60);
    const second = time % 60;
    return `${this.#getTwoDigitText(minute)}:${this.#getTwoDigitText(second)}`;
  }

  #getTwoDigitText(number) {
    if (number < 10) {
      return `0${number}`;
    }
    return `${number}`;
  }
}

export default Converter;
