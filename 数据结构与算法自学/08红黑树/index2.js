function RBT() {//创建红黑树的类
    this.root = null//根节点
    this.length = 0
    function Node(key, value) {//新节点
        this.key = key
        this.value = value
        this.parent = null
        this.left = new NIL()//每创建一个节点默认有两个NIL节点
        this.right = new NIL()
        this.color = 'red'
    }
    function NIL() {//空节点
        this.color = 'black'
    }
    // 1.插入方法
    RBT.prototype.push = function (key, value) {//插入函数
        let newNode = new Node(key, value)
        if (this.root == null) {
            this.root = newNode
        }
        else {
            newNode.parent = this.root
            this.pushNode(newNode)
        }
        //1.通过以上方法已经完美转化成一颗搜索二叉树，现在只要将搜索二叉树转化成红黑树即可，调用BST_TO_RBT方法实现
        this.BST_TO_RBT(newNode)
        this.length++
    }
    this.pushNode = function (Node) {
        if (Node.key < Node.parent.key) {
            if (!(Node.parent.left instanceof NIL)) {
                Node.parent = Node.parent.left
                this.pushNode(Node)
            }
            else {
                Node.parent.left = Node
            }
        }
        else {
            if (!(Node.parent.right instanceof NIL)) {
                Node.parent = Node.parent.right
                this.pushNode(Node)
            }
            else {
                Node.parent.right = Node
            }
        }
    }
    this.BST_TO_RBT = function (Node) {
        // 搜索二叉树转红黑树
        if (Node.parent) {
            if (Node.parent.parent) {//根据红黑树的变化规则可以知道，如果不存在爷爷节点，只需要将根节点变为黑色即可
                if (Node.parent.color === "red" && Node.color === 'red') {//只有父亲和孩子都是红色才要变化
                    if (Node.parent == Node.parent.parent.left) {//如果父亲是爷爷的左孩子
                        if (Node.parent.parent.right.color === "red") {
                            // 如果叔叔是红色,进行情况四变换

                            Node.parent.color = "black"
                            Node.parent.parent.color = "red"
                            Node.parent.parent.right.color = "black"
                            // console.log(Node.parent.parent);

                            this.BST_TO_RBT(Node.parent.parent)//将爷爷当作新的节点进行递归操作
                        }
                        else {
                            // 如果叔叔是黑色

                            if (Node == Node.parent.left) { // 如果自己是父亲的左孩子，则进行情况5变化
                                Node.parent.color = 'black'
                                Node.parent.parent.color = "red"
                                if (Node.parent.parent.parent == null) {//如果爷爷是根节点


                                    Node.parent.right.parent = Node.parent.parent
                                    Node.parent.parent.left = Node.parent.right
                                    Node.parent.right = Node.parent.parent
                                    Node.parent.parent = Node.parent.parent.parent
                                    Node.parent.right.parent = Node.parent
                                    this.root = Node.parent
                                }
                                else {
                                    if (Node.parent.parent == Node.parent.parent.parent.left) {
                                        //如果爷爷是曾祖父的左孩子

                                        Node.parent.right.parent = Node.parent.parent
                                        Node.parent.parent.left = Node.parent.right
                                        Node.parent.right = Node.parent.parent
                                        Node.parent.parent = Node.parent.parent.parent
                                        Node.parent.parent.left = Node.parent
                                        Node.parent.right.parent = Node.parent

                                    }
                                    else {
                                        //如果爷爷是曾祖父的右孩子
                                        Node.parent.right.parent = Node.parent.parent
                                        Node.parent.parent.left = Node.parent.right
                                        Node.parent.right = Node.parent.parent
                                        Node.parent.parent = Node.parent.parent.parent
                                        Node.parent.parent.right = Node.parent
                                        Node.parent.right.parent = Node.parent
                                    }
                                }
                                this.BST_TO_RBT(Node.parent)
                            }
                            else {
                                // 如果自己是父亲的右孩子，则进行情况6变化
                                Node.parent.parent.left = Node
                                Node.parent.right = Node.left
                                Node.left = Node.parent
                                Node.parent = Node.parent.parent
                                Node.left.parent = Node
                                this.BST_TO_RBT(Node)
                            }
                        }
                    }
                    else {//如果父亲是爷爷的右孩子
                        if (Node.parent.parent.left.color === "red") {
                            // 如果叔叔是红色,进行情况四变换
                            Node.parent.color = "black"
                            Node.parent.parent.color = "red"
                            Node.parent.parent.left.color = "black"
                            this.BST_TO_RBT(Node.parent.parent)//将爷爷当作新的节点进行递归操作
                        }
                        else {
                            // 如果叔叔是黑色
                            if (Node == Node.parent.right) { // 如果自己是父亲的右孩子，则进行情况5变化
                                Node.parent.color = 'black'
                                Node.parent.parent.color = "red"
                                if (Node.parent.parent.parent == null) {//如果爷爷是根节点
                                    Node.parent.left.parent = Node.parent.parent
                                    Node.parent.parent.right = Node.parent.left
                                    Node.parent.left = Node.parent.parent
                                    Node.parent.parent = Node.parent.parent.parent
                                    Node.parent.left.parent = Node.parent
                                    this.root = Node.parent
                                }
                                else {
                                    if (Node.parent.parent == Node.parent.parent.parent.left) {
                                        //如果爷爷是曾祖父的左孩子
                                        Node.parent.left.parent = Node.parent.parent
                                        Node.parent.parent.right = Node.parent.left
                                        Node.parent.left = Node.parent.parent
                                        Node.parent.parent = Node.parent.parent.parent
                                        Node.parent.parent.left = Node.parent
                                        Node.parent.left.parent = Node.parent
                                    }
                                    else {
                                        //如果爷爷是曾祖父的右孩子
                                        Node.parent.left.parent = Node.parent.parent
                                        Node.parent.parent.right = Node.parent.left
                                        Node.parent.left = Node.parent.parent
                                        Node.parent.parent = Node.parent.parent.parent
                                        Node.parent.parent.right = Node.parent
                                        Node.parent.left.parent = Node.parent
                                    }
                                }
                                this.BST_TO_RBT(Node.parent)
                            }
                            else {
                                // 如果自己是父亲的左孩子，则进行情况6变化
                                Node.parent.parent.right = Node
                                Node.parent.left = Node.right
                                Node.right = Node.parent
                                Node.parent = Node.parent.parent
                                Node.right.parent = Node
                                this.BST_TO_RBT(Node.right)
                            }
                        }
                    }
                }
            }
        }
        if (this.root.color === "red") {
            this.root.color = "black"//条件四
        }
    }
    RBT.prototype.remove = function (key) {
        if (this.length === 0) {
            return -1
        }
        else {
            let deleteelement = this.search(key)
            if (deleteelement === -1) {
                return -1
            }
            else {
                if (deleteelement.left instanceof NIL && deleteelement.right instanceof NIL) {//如果左右孩子都是NIL节点
                    if (!deleteelement.parent) {//根节点
                        this.root = null
                    }
                    else {
                        if (deleteelement.parent.left == deleteelement) {//如果要删除的元素是左孩子
                            deleteelement.parent.left = new NIL()//将左孩子设为NIl
                        }
                        else {
                            deleteelement.parent.right = new NIL()//如果要删除的元素是右孩子
                        }
                    }
                }
                else if (deleteelement.right instanceof NIL) {
                    if (deleteelement.parent == null) {//如果是根节点
                        deleteelement.left.parent = null
                        this.root = deleteelement.left
                        deleteelement = null
                    }
                    else {
                        if (deleteelement.parent.left == deleteelement) {
                            deleteelement.parent.left = deleteelement.left
                            deleteelement.left.parent = deleteelement.parent
                            deleteelement = null//将deletetelement为null
                        }
                        else {
                            deleteelement.parent.right = deleteelement.left
                            deleteelement.left.parent = deleteelement.parent
                            deleteelement = null
                        }
                    }
                }
                else if (deleteelement.left instanceof NIL) {
                    if (deleteelement.parent == null) {//如果是根节点
                        deleteelement.right.parent = null
                        this.root = deleteelement.right
                        deleteelement = null
                    }
                    else {
                        if (deleteelement.parent.left == deleteelement) {
                            deleteelement.parent.left = deleteelement.right
                            deleteelement.right.parent = deleteelement.parent
                            deleteelement = null//将deletetelement为null
                        }
                        else {
                            deleteelement.parent.right = deleteelement.right
                            deleteelement.right.parent = deleteelement.parent
                            deleteelement = null
                        }
                    }
                }
                else {
                    //如果两个孩子都不为NIl
                    let precursorNode = deleteelement.left
                    if (precursorNode.right instanceof NIL) {
                        if (!deleteelement.parent) {
                            this.root = precursorNode
                        }
                        else {
                            if (deleteelement.parent.left == deleteelement) {
                                deleteelement.parent.left = precursorNode
                            }
                            else {
                                deleteelement.parent.right = precursorNode
                            }
                        }
                        precursorNode.parent = deleteelement.parent
                        precursorNode.right = deleteelement.right
                        deleteelement.right.parent = precursorNode
                        deleteelement = null
                    }
                    else {
                        while (!(precursorNode.right instanceof NIL)) {
                            precursorNode = precursorNode.right
                        }
                        if (precursorNode.left) {
                            precursorNode.parent.right = precursorNode.left
                            precursorNode.left.parent = precursorNode.parent
                        }
                        else {
                            PrecursorNode.parent.right = new NIL()
                        }
                        if (!deleteelement.parent) {
                            this.root = precursorNode
                        }
                        else {
                            if (deleteelement.parent.left == deleteelement) {
                                deleteelement.parent.left = precursorNode
                            }
                            else {
                                deleteelement.parent.right = precursorNode
                            }
                        }
                        precursorNode.parent = deleteelement.parent
                        precursorNode.right = deleteelement.right
                        precursorNode.left = deleteelement.left
                        deleteelement.right.parent = precursorNode
                        deleteelement.left.parent = precursorNode
                        deleteelement = null
                    }
                }
            }

            this.length--
        }
    }
    this.remove_BST_TO_RBT = function (deleteNode, Node) {
        if (deleteNode.color === 'black') {
            if (Node.color === 'red') {
                Node.color = 'black'
                //节点为红色，直接设为黑色即可
            }
            else {
                if (!Node.parent) {
                    //节点为根，什么都不用做
                }
                else {
                    //是黑色且不为根
                    if (Node.parent.left == Node) {//左孩子
                        if (Node.parent.right === 'red') {
                            Node.parent.right.color = 'black'
                            Node.parent.color = 'red'
                            
                        }
                    }
                    else {//右孩子

                    }

                }
            }
        }
    }
    //前序遍历
    this.preorderTraversal = function () {
        if (this.length === 0) {
            return -1
        }
        else {
            this.preorderTraversalNode(this.root)
        }
    }
    RBT.prototype.preorderTraversalNode = function (Node) {

        console.log(Node.key);
        if (!(Node.left instanceof NIL)) {
            this.preorderTraversalNode(Node.left)
        }
        if (!(Node.right instanceof NIL)) {
            this.preorderTraversalNode(Node.right)
        }
    }
    //后序遍历
    RBT.prototype.postorderTraversal = function () {
        if (this.length === 0) {
            return -1
        }
        else {
            this.postorderTraversalNode(this.root)
        }
    }
    this.postorderTraversalNode = function (Node) {
        if (!(Node.left instanceof NIL)) {
            this.postorderTraversalNode(Node.left)
        }
        if (!(Node.right instanceof NIL)) {
            this.postorderTraversalNode(Node.right)
        }
        console.log(Node.key);
    }
    //中序遍历
    RBT.prototype.inorderTraversal = function () {
        if (this.length === 0) {
            return -1
        }
        else {
            this.inorderTraversalNode(this.root)
        }
    }
    this.inorderTraversalNode = function (Node) {
        if (!(Node.left instanceof NIL)) {
            this.inorderTraversalNode(Node.left)
        }
        console.log(Node.key);
        if (!(Node.right instanceof NIL)) {
            this.inorderTraversalNode(Node.right)
        }

    }
    //max值
    RBT.prototype.max = function () {
        let current = this.root
        while (!(current.right instanceof NIL)) {
            current = current.right
        }
        return current.key
    }
    //最小值
    RBT.prototype.min = function () {
        let current = this.root
        while (!(current.left instanceof NIL)) {
            current = current.left
        }
        return current.key
    }
    //搜索特定key
    RBT.prototype.search = function (key) {
        let current = this.root
        while (current.key != null) {
            if (key === current.key) {
                return current
            }
            if (key < current.key) {
                current = current.left
            }
            if (key > current.key) {
                current = current.right
            }
        }
        return -1
    }
    //更新数据
    RBT.prototype.update = function (key, value) {
        this.search(key).value = value
    }

}
let Rbt = new RBT()
Rbt.push(12, 10)
Rbt.push(1, 10)
Rbt.push(9, 10)

Rbt.preorderTraversal()