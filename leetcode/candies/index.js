//es6新特性
var distributeCandies = function(candies){
    var count = 0;//总类数
//糖果的种类数
var obj ={}
candies.forEach(function(item){
    //如果出现过
    if(!obj[item]){
        obj[item]=1
        count++
    }
})
 return count>=(candies.length/2)?candies.length>>1:count
}
console.log(distributeCandies([1,1,2,3,3,2]));
