module.exports = function countCats(arr) {
  let countCats = 0;
  let cats = arr.flat();
  for( let i = 0; i < cats.length; i++){
    if(cats[i] == "^^"){
      countCats++;
    }
  }
  return countCats;
};
