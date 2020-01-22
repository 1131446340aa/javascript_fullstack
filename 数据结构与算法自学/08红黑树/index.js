function RBT() {//创建红黑树的类
    this.root = null//根节点
    this.length = 0
    function Node(key) {//新节点
        this.key = key
        this.parent = null
        this.left = new NIL()//每创建一个节点默认有两个NIL节点
        this.right = new NIL()
        this.color = 'red'
        //简化一点，不加入value信息
    }
    function NIL() {//空节点
        this.color = 'black'
    }
    // 1.插入方法
    RBT.prototype.push = function (key) {//插入函数
        let newNode = new Node(key)
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
    RBT.prototype.pushNode = function (Node) {
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
    RBT.prototype.BST_TO_RBT = function (Node) {
        // 搜索二叉树转红黑树
        if (Node.parent) {
            if (Node.parent.parent) {//根据红黑树的变化规则可以知道，如果不存在爷爷节点，只需要将根节点变为黑色即可
                if (Node.parent.color === "red") {//如果父亲的颜色为黑色直接插入就行，不需要任何变化
                    if (Node.parent == Node.parent.parent.left) {//如果父亲是爷爷的左孩子
                        if (Node.parent.parent.right.color === "red") {
                            // 如果叔叔是红色,进行情况四变换
                            Node.parent.color = "black"
                            Node.parent.parent.color = "red"
                            Node.parent.parent.right.color = "black"
                            // console.log(Node.parent.parent);

                            // this.BST_TO_RBT(Node.parent.parent)//将爷爷当作新的节点进行递归操作
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
                            if (Node == Node.parent.left) { // 如果自己是父亲的左孩子，则进行情况5变化
                                Node.parent.color = 'black'
                                Node.parent.parent.color = "red"
                                if (Node.parent.parent.parent == null) {//如果爷爷是根节点
                                    Node.parent.right.parent = Node.parent.parent
                                    Node.parent.parent.right = Node.parent.right
                                    Node.parent.right = Node.parent.parent
                                    Node.parent.parent = Node.parent.parent.parent
                                    Node.parent.right.parent = Node.parent
                                    this.root = Node.parent
                                }
                                else {
                                    if (Node.parent.parent == Node.parent.parent.parent.left) {
                                        //如果爷爷是曾祖父的左孩子
                                        Node.parent.right.parent = Node.parent.parent
                                        Node.parent.parent.right = Node.parent.right
                                        Node.parent.right = Node.parent.parent
                                        Node.parent.parent = Node.parent.parent.parent
                                        Node.parent.parent.left = Node.parent
                                        Node.parent.right.parent = Node.parent

                                    }
                                    else {
                                        //如果爷爷是曾祖父的右孩子
                                        Node.parent.right.parent = Node.parent.parent
                                        Node.parent.parent.right = Node.parent.right
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
                                Node.parent.parent.right = Node
                                Node.parent.right = Node.left
                                Node.left = Node.parent
                                Node.parent = Node.parent.parent
                                Node.left.parent = Node
                                this.BST_TO_RBT(Node)
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
    //前序遍历
    RBT.prototype.preorderTraversal = function () {
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
    RBT.prototype.postorderTraversalNode = function (Node) {
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
    RBT.prototype.inorderTraversalNode = function (Node) {
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
}
let Rbt = new RBT()
Rbt.push(10)
Rbt.push(9)
Rbt.push(8)
Rbt.push(7)
Rbt.push(6)
Rbt.push(5)
Rbt.push(4)






