export default class Bob {
  constructor() {
    this.isSilence = message => message.trim().length === 0;
    this.isShouting = message => (message.toUpperCase() === message) && (/[A-Z]+/).test(message);
    this.isQuestion = message => message.charAt(message.length - 1) === '?';
    this.isAllNumbers = message => message.search(/(\d+,?\s?)+[\.!\?]*/) != -1;
    this.isExclamation = message => message.charAt(message.length - 1) === '!';
  }

  hey(message) {
    if (this.isShouting(message) && !this.isAllNumbers(message)) {
      return 'Whoa, chill out!';
    } else if (this.isQuestion(message)) {
      return 'Sure.';
    }
    if (this.isSilence(message)) {
      return 'Fine. Be that way!';
    }
    if (this.isAllNumbers(message) && this.isExclamation(message)) {
      return 'Whoa, chill out!';
    }
    return 'Whatever.';
  }
}
