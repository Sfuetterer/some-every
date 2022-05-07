
function extractValue(arr, key){
    return arr.reduce(function(acc,next){
        acc.push(next[key]);
        return acc;
    },[]);
}

function vowelCount(str) {
    const vowels = "aeiou";
    return str.split("").reduce(function(acc, next) {
      let lowerCasedLetter = next.toLowerCase()
      if (vowels.indexOf(lowerCasedLetter) !== -1) {
        if (acc[lowerCasedLetter]) {
          acc[lowerCasedLetter]++;
        } else {
          acc[lowerCasedLetter] = 1;
        }
    }
    return acc;
  }, {});
}

function addKeyAndValue(arr, key, value) {
    return arr.reduce(function(acc, next, idx){
        acc[idx][key]=value;
        return acc;
      },arr);
}

function isEven(val){
    return val % 2 === 0;
  }

function partition(arr, cb){
    return arr.reduce(function(acc,next){
        if(cb(next)){
            acc[0].push(next);
        } else {
            acc[1].push(next);
        }
        return acc;
    }, [[],[]]);
}

function isLongerThanThreeCharacters(val){
    return val.length > 3;
  }



