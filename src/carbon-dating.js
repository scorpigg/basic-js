const MODERN_ACTIVITY= 15;
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity){
  if(typeof(sampleActivity) != 'string' || sampleActivity == false || sampleActivity < 0 || sampleActivity > 15 || !parseFloat(sampleActivity)){
    return false;
  }
  return Math.ceil(Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity)) * HALF_LIFE_PERIOD / 0.693);
};
