## 每一个对象都有一个__proto__属性,先在自身的__proto__查找某个属性,如果没找到则往父级查找,直到找到Object.prototype.__proto__

## 每一个函数都有一个prototype属性,这个属性是一个对象,称为原型,每一个原型对象都有一个constructor属性,指向prototype属性所在的构造函数