const earthSecondsPerYear = 31557600;

export default (seconds) => ({
  seconds: seconds,

  onEarth() {
    return parseFloat((seconds / earthSecondsPerYear).toFixed(2));
  },

  onMercury() {
    return parseFloat((seconds / earthSecondsPerYear / 0.2408467).toFixed(2));
  },

  onVenus() {
    return parseFloat((seconds / earthSecondsPerYear / 0.61519726).toFixed(2));
  },

  onMars() {
    return parseFloat((seconds / earthSecondsPerYear / 1.8808158).toFixed(2));
  },

  onJupiter() {
    return parseFloat((seconds / earthSecondsPerYear / 11.862615).toFixed(2));
  },

  onSaturn() {
    return parseFloat((seconds / earthSecondsPerYear / 29.447498).toFixed(2));
  },

  onUranus() {
    return parseFloat((seconds / earthSecondsPerYear / 84.016846).toFixed(2));
  },

  onNeptune() {
    return parseFloat((seconds / earthSecondsPerYear / 164.79132).toFixed(2));
  }
});
