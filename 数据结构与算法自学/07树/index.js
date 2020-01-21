function BST() {
    this.root = null
    this.length = 0
    function Node(data) {
        this.data = data
        this.left = null
        this.right = null
        this.parent = null
    }
    //插入节点
    BST.prototype.push = function (data) {
        let newNode = new Node(data)
        if (this.root === null) {
            this.root = newNode
            this.length++
        } else {
            newNode.parent = this.root
            this.pushNode(newNode)
            this.length++
        }
    }
    BST.prototype.pushNode = function (Node) {
        if (Node.data < Node.parent.data) {
            if (Node.parent.left == null) {
                Node.parent.left = Node
            }
            else {
                Node.parent = Node.parent.left
                this.pushNode(Node)
            }
        }
        else {
            if (Node.parent.right == null) {
                Node.parent.right = Node
            }
            else {
                Node.parent = Node.parent.right
                this.pushNode(Node)
            }
        }
    }
    //前序遍历
    BST.prototype.preorderTraversal = function () {
        if (this.length === 0) {
            return -1
        }
        else {
            this.preorderTraversalNode(this.root)
        }
    }
    BST.prototype.preorderTraversalNode = function (Node) {

        console.log(Node.data);
        if (Node.left) {
            this.preorderTraversalNode(Node.left)
        }
        if (Node.right) {
            this.preorderTraversalNode(Node.right)
        }
    }
    //后序遍历
    BST.prototype.postorderTraversal = function () {
        if (this.length === 0) {
            return -1
        }
        else {
            this.postorderTraversalNode(this.root)
        }
    }
    BST.prototype.postorderTraversalNode = function (Node) {
        if (Node.left) {
            this.postorderTraversalNode(Node.left)
        }
        if (Node.right) {
            this.postorderTraversalNode(Node.right)
        }
        console.log(Node.data);
    }
    //中序遍历
    BST.prototype.inorderTraversal = function () {
        if (this.length === 0) {
            return -1
        }
        else {
            this.inorderTraversalNode(this.root)
        }
    }
    BST.prototype.inorderTraversalNode = function (Node) {
        if (Node.left) {
            this.inorderTraversalNode(Node.left)
        }
        console.log(Node.data);
        if (Node.right) {
            this.inorderTraversalNode(Node.right)
        }

    }
    //max值
    BST.prototype.max = function () {
        let current = this.root
        while (current.right) {
            current = current.right
        }
        return current.data
    }
    //最小值
    BST.prototype.min = function () {
        let current = this.root
        while (current.left) {
            current = current.left
        }
        return current.data
    }
    //搜索特定key
    BST.prototype.search = function (key) {
        let current = this.root
        while (current != null) {
            if (key === current.data) {
                return current
            }
            if (key < current.data) {
                current = current.left
            }
            if (key > current.data) {
                current = current.right
            }
        }
        return -1
    }
    //删除操作
    BST.prototype.remove = function (key) {
        if (this.length === 0) {
            return -1
        }
        else {
            let deleteElement = this.search(key)
            if(deleteElement===-1){
                return deleteElement
            }
            if (deleteElement.left == null && deleteElement.right == null) {
                if (deleteElement.parent) {
                    if (deleteElement.data < deleteElement.parent.data) {
                        deleteElement.parent.left = null
                    }
                    else {
                        deleteElement.parent.right = null
                    }
                }
                else {
                    this.root = null
                }
               
            }
            else if (deleteElement.right == null) {
                if (deleteElement.data < deleteElement.parent.data) {
                    deleteElement.parent.left = deleteElement.left
                }
                else {
                    deleteElement.parent.right = deleteElement.left
                }
               
            }
            else if (deleteElement.left == null) {
                if (deleteElement.data < deleteElement.parent.data) {
                    deleteElement.parent.left = deleteElement.right
                }
                else {
                    deleteElement.parent.right = deleteElement.right
                }
            }
            else {
                let PrecursorNode = deleteElement.left
                while (PrecursorNode.right) {
                    PrecursorNode = PrecursorNode.right
                }
                if (PrecursorNode.left) {
                    PrecursorNode.parent.right = PrecursorNode.left
                }
                else {
                    PrecursorNode.parent.right = null
                }
                PrecursorNode.left = deleteElement.left
                PrecursorNode.right = deleteElement.right
                PrecursorNode.parent = deleteElement.parent

                if (!deleteElement.parent) {

                    this.root = PrecursorNode
                }
                else {


                    if (deleteElement.data > deleteElement.parent.data) {
                        deleteElement.parent.right = PrecursorNode
                    }
                    else {
                        deleteElement.parent.left = PrecursorNode
                    }
                }
              
            }
            this.length--
        }
    }
}
let Bst = new BST()
Bst.push(11)
Bst.push(7)
Bst.push(15)
Bst.push(5)
Bst.push(3)
Bst.push(9)
Bst.push(8)
Bst.push(10)
Bst.push(13)
Bst.push(12)
Bst.push(14)
Bst.push(20)
Bst.push(18)
Bst.push(25)
console.log(Bst.remove(200));

// Bst.preorderTraversal()
// console.log(Bst);






