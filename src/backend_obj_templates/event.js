export default class Event {
  constructor(startDate, endDate, name, link) {
    this.startDate = startDate;
    this.endDate = endDate;
    this.name = name;
    this.link = link;
    this.checkStartAndEnd();
    this.done = false;
  }

  checkStartAndEnd() {
    let [start, end] = [this.startDate, this.endDate];
    if (
      start.getDate() !== end.getDate() ||
      start.getMonth() !== end.getMonth() ||
      start.getFullYear() !== end.getFullYear()
    ) {
      throw new Error(
        `Invalid start date (${start.toString()}) and end date (${end.toString()}) for the event with the name ${
          this.name
        }.`
      );
    }
  }
}
