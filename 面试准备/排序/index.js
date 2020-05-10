let arr=[1,3,4,3,2,5]
arr.sort((a,b)=>b-a)//大到小
arr.sort((a,b)=>a-b)//小到大
arr.sort(()=>Math.random()-0.5)//乱序
arr.sort(()=>-0.1)//倒序,小于0倒序等同于arr.reverse()

arr.sort(()=>0)//顺序 大于等于0顺序
console.log(arr);
