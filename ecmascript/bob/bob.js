export default class Bob {
  constructor() {
    this.isSilence = message => message.trim().length === 0;
    this.isShouting = message => (message.toUpperCase() === message) && (/[A-Z]+/).test(message);
    this.isQuestion = message => message.charAt(message.length - 1) === '?';
    this.isAllNumbers = message => message.search(/(\d+,?\s?)+[\.!\?]*/) != -1;
    this.isExclamation = message => message.charAt(message.length - 1) === '!';
  }

  hey(message) {
    let response = 'Whatever.';

    if (this.isShouting(message) && !this.isAllNumbers(message)) {
      response = 'Whoa, chill out!';
    } else if (this.isQuestion(message)) {
      response = 'Sure.';
    }
    if (this.isSilence(message)) {
      response = 'Fine. Be that way!';
    }
    if (this.isAllNumbers(message) && this.isExclamation(message)) {
      response = 'Whoa, chill out!';
    }

    return response;
  }
}
