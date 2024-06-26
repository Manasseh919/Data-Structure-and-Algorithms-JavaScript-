function recursiveBinarySearch(arr,target){
        return search(arr,target,0,arr.length-1)
}

function search(arr,target,leftIndex,rightIndex){
    if(leftIndex>rightIndex){
        return -1
    }
    let middleIndex = Math.floor((leftIndex+rightIndex)/2)
    if(target===arr[middleIndex]){
        return middleIndex
    }
    if(target<arr[middleIndex]){
       return search(arr,target,leftIndex,middleIndex-1)
    }else{
       return search(arr,target,middleIndex+1,rightIndex)
    }
}


// Big-O = O(logn)

console.log(recursiveBinarySearch([-5, -2, -1, 4, 6, 7], 4));
console.log(recursiveBinarySearch([-5, -2, -1, 4, 6, 7], 20));
console.log(recursiveBinarySearch([-5, -2, -1, 4, 6, 7], 6));