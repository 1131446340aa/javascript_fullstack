/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let len=0
    let child=""
    if(s.length>1){
            for(let i=0;i<s.length;i++){
       for(let j=s.length-1;j>i;j--){
           if(s[i]===s[j]){
            //    console.log(s.slice(i,j+1));
            //    console.log([...s.slice(i,j+1)].reverse().join(""));
               
               if(s.slice(i,j+1)===[...s.slice(i,j+1)].reverse().join("")){

                   
                   if(s.slice(i,j+1).length>child.length){
                        child=s.slice(i,j+1)
                        console.log(1);
                        
                        console.log(child.length);
                        
                   }
               }
           }
       }
       if(child===""){
           child=s[0]
       }
    }
    }
    if(s.length<=1){
        child=s
    }
    return child
};
console.log(longestPalindrome('ccc'));
