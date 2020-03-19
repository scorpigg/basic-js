module.exports = function getSeason(date) {
  console.log(+date);
  if(!date || +date == false){
    return 'Unable to determine the time of year!';
  }
  let month = date.getMonth();
  if(month == 11 || month == 0 || month == 1){
    return 'winter';
  }else if(month >= 2 && month <= 4){
    return 'spring';
  }else if(month >= 5 && month <= 7){
    return 'summer';
  }else if(month >= 8 && month <= 10){
    return 'autumn';
  }
}