class Timer {
  constructor(timeText) {
    this.timeText = timeText;
  }

  startCounting(value) {
    this.stopCounting();

    const id = setInterval(() => {
      this.timeText.display(value--);
      if (value < 0) {
        clearInterval(id);
        setTimeout(() => alert("Times up"), 500);
      }
    }, 1000);
    this.id = id;
  }

  stopCounting() {
    if (this.id !== undefined) {
      clearInterval(this.id);
    }
  }
}

export default Timer;
