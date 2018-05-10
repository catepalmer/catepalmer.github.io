function min (a, b) {
    return(Math.min(a, b));
  }



function isEven (num) {
    if (num < 0) {
        num *= -1;
    }
  for (i = num; i >= 0; i = i - 2) {
    if (i == 1) {
      return false;
    }
    else if (i == 0) {
        return true;
  }
}
}


// let numBs = 0;
// function countBs (str) {
//    for (char = "str"[i]; i < str.length; i++) {
//        if (char == "B") {
//            numBs++;
//        }
//        return numBs;
//    }
// }



function countBs(str) {
    return countChar(str, 'B');
  }
  
  function countChar(str, chr) {
    var counter = 0
    for (var i = 0; i < str.length; i++) {
      if (str.charAt(i) === chr) {counter++;}
    }
    return counter;
  }