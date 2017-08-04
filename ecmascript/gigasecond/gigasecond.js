export default class Gigasecond {
  constructor(fooDate) {
    this.fooDate = fooDate;
  }

  date() {
    return new Date(this.fooDate.getTime() + 1000000000000);
  }
}
