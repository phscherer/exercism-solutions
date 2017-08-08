const earthSecondsPerYear = 31557600;
const timePlanets = {
  Mercury: 0.2408467,
  Venus: 0.61519726,
  Mars: 1.8808158,
  Jupiter: 11.862615,
  Saturn: 29.447498,
  Uranus: 84.016846,
  Neptune: 164.79132
};

export default (seconds) => ({
  seconds: seconds,
  onEarth: () => +(seconds / earthSecondsPerYear).toFixed(2),
  onMercury: () => +(seconds / earthSecondsPerYear / timePlanets.Mercury).toFixed(2),
  onVenus: () => +(seconds / earthSecondsPerYear / timePlanets.Venus).toFixed(2),
  onMars: () => +(seconds / earthSecondsPerYear / timePlanets.Mars).toFixed(2),
  onJupiter: () => +(seconds / earthSecondsPerYear / timePlanets.Jupiter).toFixed(2),
  onSaturn: () => +(seconds / earthSecondsPerYear / timePlanets.Saturn).toFixed(2),
  onUranus: () => +(seconds / earthSecondsPerYear / timePlanets.Uranus).toFixed(2),
  onNeptune: () => +(seconds / earthSecondsPerYear / timePlanets.Neptune).toFixed(2)
});
