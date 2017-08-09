export default class Binary {
  constructor(number) {
    this.binary = 0;
    if (number.match(/[^0-1]/)) {
      return;
    }

    number.split('').reverse().forEach((c, i) => this.binary += parseInt(c) * Math.pow(2, i));
  }

  toDecimal() {
    return this.binary;
  }
}
