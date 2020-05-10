const wrap = document.getElementById('wrap');

let count = 0;
let images = [
    
    './image/h1.jpg',
    './image/h2.jpg',
    './image/h3.jpg',
    './image/h4.jpg',
    './image/h5.jpg',
    './image/h6.jpg',
    './image/h1.jpg',
    './image/h2.jpg',
    './image/h3.jpg',
    './image/h4.jpg',
    './image/h5.jpg',
    './image/h6.jpg',
]

images.sort((a, b) => 0.5 - Math.random());

init();
const allImg=document.querySelectorAll('#wrap img');
function init() {
    for (let i = 0; i < 12; i++) {
        let img = document.createElement('img');
        img.src = "./image/bg.jpg";

        img.onclick = function () {
            changeImage(img, i);
            console.log(i)
           

        }
        wrap.appendChild(img);
    }

}
let firstId=null;
let firstCard=null;
function changeImage(imgNode, i) {
//     if (count === 0) {
//        firstId=i;
//         firstCard=images[i];
     imgNode.src = images[i];
//         imgNode.classList.add('rotate');
//     }
//     if(count===1&&i===firstId){return;}
//     if (count === 1) {
//         imgNode.src = images[i];
//         imgNode.classList.add('rotate');
//         setTimeout(() => {
//             // start
//             if (firstCard === images[i]) {
//               // 1
//               wrap.removeChild(allImg[firstId]);
//               wrap.removeChild(allImg[i]);
//             } else {
//               // 2
//               allImg[firstId].src = './image/bg.jpg';
//               allImg[i].src = './image/bg.jpg';
//          allImg[firstId].className='';
//          allImg[i].className='';


//             }
//             count = 0;
//             firstId = null;
//             firstCard = null;
//             // end
//           }, 1100);
        
//     }
// count++;
}

