var send=document.getElementById('send');  
var parent=document.getElementById('content-items');
send.addEventListener('click',function()

{ /*var html=$(' <li class="content-item">'+
'<div class="pic">'+
   ' <img src="http://img.zcool.cn/community/01b44b5d511452a8012187f4acf159.jpg@1280w_1l_2o_100sh.jpg" alt="">'+

'</div>'+
'<div class="message">'+
        ' <p class="name">江西移动10086</p>'+

'<p class="detail">小推车</p> '+
'</li> ')
html.appendTO(parent)*/
var li=document.createElement('li');
li.setAttribute('class','content-item');
var divpic=document.createElement('div');
divpic.setAttribute('class','pic');
li.appendChild(divpic);
var img=document.createElement('img');
img.setAttribute('src','http://img.zcool.cn/community/01b44b5d511452a8012187f4acf159.jpg@1280w_1l_2o_100sh.jpg')
divpic.appendChild(img);
var message=document.createElement('message');
li.appendChild(message);
var p1=document.createElement('p');
p1.setAttribute('class','name');
var p1text=document.createTextNode('蜗牛');
p1.appendChild(p1text);
message.appendChild(p1);
var p2=document.createElement('p');
p2.setAttribute('class','detail');
var p2text=document.createTextNode('wdfwe');
p2.appendChild(p2text);
message.appendChild(p2);

parent.appendChild(li);
console.log(li);
});




