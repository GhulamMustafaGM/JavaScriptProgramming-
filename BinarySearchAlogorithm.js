// BinarySearchWork Algorithm

function BinarySearchWork(ValueArray, k) {
    var middleIndex = Math.floor(ValueArray.length / 2);
    var middleElement = ValueArray[middleIndex];
    
    if (middleElement === k) return true;
    else if (middleElement < k && ValueArray.length > 1) {
        return BinarySearchWork(ValueArray.splice(middleIndex, ValueArray.length), k);
    }
    else if (middleElement > k && ValueArray.length > 1) {
        return BinarySearchWork(ValueArray.splice(0, middleIndex), k);
    }
    else return false;
}

BinarySearchWork([5, 8, 13, 19, 32, 35, 42, 46, 88], 57);