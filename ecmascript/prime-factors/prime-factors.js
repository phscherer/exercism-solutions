export default () => ({
  for: (number) => {
    let factor = [], divisor = 2;
    while (number !== 1) {
      if (number % divisor === 0) {
        factor.push(divisor);
        number /= divisor;
      } else {
        divisor++;
      }
    }
    return factor;
  }
});
