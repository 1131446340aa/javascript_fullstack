let Epub=require('epubjs')

let book=new Epub('./book/33场革命.epub')
let rendtion=book.renderTo('read',{
    width:window.innerWidth,
    height:window.innerHeight,
    method:'default'
})
// console.log(rendtion);
// console.log(Epub.Book);

