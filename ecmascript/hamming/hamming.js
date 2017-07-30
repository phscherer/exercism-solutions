export default () => ({
  compute: (a, b) => {
    if (a.length !== b.length) {
      throw new Error("DNA strands must be of equal length.");
    }

    let distance = 0;
    for (let i = 0; i < a.length; i++) {
      let x = a[i], y = b[i];
      if(x !== y) {
        distance++;
      }
    }

    return distance;
  }
});
