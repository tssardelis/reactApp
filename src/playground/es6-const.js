const multiplier={
    numbers:[1,2,3,4,5,6],
    multiplyBy:3,
    multiply:function(){
        return this.numbers.map((item)=>item*this.multiplyBy)
    }
}

console.log(multiplier.multiply())