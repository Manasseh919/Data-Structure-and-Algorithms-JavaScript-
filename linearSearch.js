function linearSearch(arr, target) {
    for(i = 0;i<arr.length;i++){
        if(arr[i] === target){
            return i
        }
    }
    return -1
}

console.log(linearSearch([-5, -2, -1, 4, 6, 7], 4));
console.log(linearSearch([-5, -2, -1, 4, 6, 7], 20));
console.log(linearSearch([-5, -2, -1, 4, 6, 7], 6));

// Big-O = O(n)