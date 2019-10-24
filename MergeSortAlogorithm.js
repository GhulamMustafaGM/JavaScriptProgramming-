// MergeSortWork Algorithm 

function MergeSortWork (ValueArry) {    
    if (ValueArry.length < 2) return ValueArry;
    var MiddleIndex = Math.floor(ValueArry.length / 2);
    var FirstHalf = ValueArry.slice(0, MiddleIndex);
    var SecondHalf = ValueArry.slice(MiddleIndex);
    
    return Merge(MergeSortWork(FirstHalf), MergeSortWork(SecondHalf));
}

function Merge (ValueArry1, ValueArry2) { 
    var result = [];
    while (ValueArry1.length && ValueArry2.length) {
      var MinElement;
      if (ValueArry1[0] < ValueArry2[0]) MinElement = ValueArry1.shift();
      else MinElement = ValueArry2.shift();
      result.push(MinElement);
    }
    
    if (ValueArry1.length) result = result.concat(ValueArry1);
    else result =result.concat(ValueArry2);
    return result;
}

MergeSortWork ([9000, 7500, 54, 207, 5, 749, 400, 954, 194, 769, 1, 8, 2, 1]);