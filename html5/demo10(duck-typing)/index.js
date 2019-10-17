// 鸭子王国，要招1000只鸭子，组成一个鸭子合唱团
 const chior=[];//合唱团
//  加入合唱团
 function joinchior(ani){
     if(ani && typeof ani.ducksinging=='function')
     {  chior.push(ani);}
   
     if(chior.length>=1000)
     {console.log('任务完成')}
     else{
         console.log('你已经完成了'+chior.length+'位招募');
     }
 }
 let duck={
     naeme:'小雅',
     ducksinging:function(){
       console.log("ga ga ga")  ;}

 }

let chicken={
    mame:'shanji',
    chicksinging:function(){
        console.log("ji ji ji")  ;},
        ducksinging:function(){
            console.log("ga ga ga")  ;}

}

for(let i=0;i<999;i++)
{
    joinchior(duck);
}
joinchior(chicken);


