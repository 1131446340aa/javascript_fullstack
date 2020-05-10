let arr =[4,5,6];
function copy(obj){
    let newobj = null;   
    if(typeof(obj) == 'object' && obj !== null){ 
        newobj = obj instanceof Array? [] : {};   
        for(var i in obj){  
            newobj[i] = copy(obj[i])
        }
    }else{
        newobj = obj
    }    
    return newobj;    
}

let a=copy(arr)
console.log(arr);




