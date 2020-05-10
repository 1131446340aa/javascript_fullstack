import a from './a'
import b from './b'
import pic from './img/2017-10-31_0067dt7egy1fl1ebxlnm8j31111jkx6p.jpg'
import './index.css' 
let img = new Image()
img.src = pic
document.getElementById('root').appendChild(img)
a()
b()
function lm() {
    console.log('welecom');
}
lm()