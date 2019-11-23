// BubbleSortWork Algorithm

function BubbleSortWork(ValueArray) {
    for (var a = ValueArray.length; a > 0; a--) {
      for (var b = 0; b < a; b++) {
        if (ValueArray[b] > ValueArray[b + 1]) {
          var temp = ValueArray[b];
          ValueArray[b] = ValueArray[b + 1];
          ValueArray[b + 1] = temp;
        }
      }
    }
    
    return ValueArray;
}
 
BubbleSortWork([8000, 5000, 44, 303, 5, 646, 150, 884, 298, 76, 19, 3, 1]);