var tree = {
    value: 1,
    left: {
        value: 2,
        left: {
            value: 4
        }
    },
    right: {
        value: 3,
        left: {
            value: 5,
            left: {
                value: 7
            },
            right: {
                value: 8
            }
        },
        right: {
            value: 6
        }
    }
}

var proOrder = function (node) {
    if (node) {
        console.log(node.value);

        proOrder(node.left)
        proOrder(node.right)
    }
}
proOrder(tree)
//速度优先
var proOrderUnrecur = function (node) {
    if (!node) {
        throw new Error('empty Tree')
    }
    var stack = []
    stack.push(node)
    while (stack.length !== 0) {
        node = stack.pop()
        console.log(node.value);
        if(node.right)stack.push(node.right)
        if(node.left)stack.push(node.left)
        
    }
}
var breadth = function(node){
    let queue=[]
    queue.push(node)
    while(queue.length!==0){
        let node = queue.shift()
        console.log(node.value);
        if(node.left)queue.push(node.left)
        if(node.right)queue.push(node.right)
        
    }
}