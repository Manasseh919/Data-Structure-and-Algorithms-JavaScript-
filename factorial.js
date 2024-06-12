function Factorial(n){
    let result = 1
    if(n == 0){
        return false
    }
    for (let i = 2;i<=n ;i++){
        result = result * i
    }
    return result
}


console.log(Factorial(5))

//Big-O = O(n)