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
                                Node.left.right.parent = Node.left
                                this.BST_TO_RBT(Node.left)
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
                                Node.right.left.parent = Node.right
                                // if (this.search(16) !== -1) {
                                //     console.log(Node.right.left.parent.key);
                                // }
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
                if (!(deleteelement.right instanceof NIL)) {
                    let subNode = deleteelement.right
                    while (!(subNode.left instanceof NIL)) {
                        subNode = subNode.left
                    }
                    let key = deleteelement.key
                    let value = deleteelement.value
                    //将后继节点的值和要删除的值互换，
                    deleteelement.key = subNode.key
                    deleteelement.value = subNode.value
                    subNode.key = key
                    subNode.value = value
                    this.remove_BST_TO_RBT(subNode)
                }
                else {
                    //如果后继为空
                    this.remove_BST_TO_RBT(deleteelement)
                }
            }
            this.length--
        }
    }
    this.remove_BST_TO_RBT = function (Node) {
        if (Node.color === 'black') {
            if (!Node.parent) {//根节点。不做变化       
                this.root = null
                Node = null
            }
            else {
                if (Node.parent.right === Node) {//删除(节点是右孩子
                    if (Node.right.color === 'red') {//有一个右节点，而且肯定为红，直接用孩子代替父亲
                        Node.right.color = 'black'
                        Node.right.parent = Node.parent
                        Node.parent.right = Node.right
                        Node = null
                    }
                    else {
                        //没有孩子                                              
                        if (Node.parent.left.color === 'red') {
                            //如果兄弟是红色，兄弟不可能有孩子，父亲必定黑色，兄换色，然后右旋
                            Node.parent.left.color === 'black'
                            Node.parent.color = 'red'
                            if (Node.parent.parent.left === Node.parent) {//判断父亲是左孩子还是右孩子
                                Node.parent.parent.left = Node.parent.right
                            }
                            else {
                                Node.parent.parent.right = Node.parent.right
                            }
                            Node.parent.left.parent = Node.parent.parent
                            Node.parent.left.right = Node.parent
                            Node.parent.parent = Node.parent.left
                            Node.parent.left = new NIL()
                            Node.parent.right = new NIL()
                            Node = null
                        }
                        else {
                            //如果兄弟是黑色
                            if (Node.parent.left.right instanceof NIL) {
                                //如果右节点为空，父节点为黑色，再右旋
                                // Node.parent.color = "black"
                                // console.log(Node.key);
                                if (Node.parent.left.left instanceof NIL) {
                                    Node.parent.color = "red"
                                }
                                if (!Node.parent.parent) {
                                    this.root = Node.parent.left
                                }
                                else {
                                    if (Node.parent.parent.left === Node.parent) {
                                        Node.parent.parent.left = Node.parent.left
                                    }
                                    else {
                                        Node.parent.parent.right = Node.parent.left
                                    }
                                }
                                Node.parent.left.parent = Node.parent.parent
                                Node.parent.left.right = Node.parent
                                Node.parent.parent = Node.parent.left
                                Node.parent.left = new NIL()
                                Node.parent.right = new NIL()
                                Node = null
                            }
                            else {
                                // console.log(Node.key);                                
                                //如果兄弟右节点存在，必定红色，先变为黑色，再左旋，就变成了兄黑，兄右孩子黑，再进行递归
                                Node.parent.left.right.color = 'black'
                                Node.parent.color = "black"
                                Node.parent.left.right.parent = Node.parent
                                Node.parent.left.right.left = Node.parent.left
                                Node.parent.left.parent = Node.parent.left.right
                                Node.parent.left = Node.parent.left.right
                                Node.parent.left.left.right = new NIL()
                                // console.log(this.search(17).parent.color);
                                this.remove_BST_TO_RBT(Node)
                            }
                        }
                    }
                }
                else {
                    //删除节点是左孩子
                    if (Node.right.color === 'red') {//有一个右节点，而且肯定为红，直接用孩子代替父亲
                        Node.right.color = 'black'
                        Node.right.parent = Node.parent
                        Node.parent.left = Node.right
                        Node = null
                    }
                    else {
                        if (Node.parent.right.color === 'red') {
                            //如果兄弟是红色，兄弟不可能有孩子，父亲必定黑色，兄换色，然后左旋
                            Node.parent.right.color = 'black'
                            Node.parent.color = 'red'
                            // console.log(Node.key);


                            if (Node.parent.parent.left === Node.parent) {//判断父亲是左孩子还是右孩子
                                Node.parent.parent.left = Node.parent.right
                            }
                            else {
                                Node.parent.parent.right = Node.parent.right
                            }
                            Node.parent.right.parent = Node.parent.parent
                            Node.parent.right.left = Node.parent
                            Node.parent.parent = Node.parent.right
                            Node.parent.left = new NIL()
                            Node.parent.right = new NIL()
                            Node = null
                        }
                        else {
                            //如果兄弟是黑色
                            if (Node.parent.right.left instanceof NIL) {
                                //如果左节点为空，父节点为黑色，再左旋
                                // Node.parent.color = 'black'
                                if (Node.parent.right.right instanceof NIL) {
                                    Node.parent.color = "red"
                                }
                                if (!Node.parent.parent) {
                                    this.root = Node.parent.parent
                                }
                                else {
                                    if (Node.parent.parent.left === Node.parent) {
                                        Node.parent.parent.left = Node.parent.right
                                    }
                                    else {
                                        Node.parent.parent.right = Node.parent.right
                                    }
                                }
                                Node.parent.right.parent = Node.parent.parent
                                Node.parent.right.left = Node.parent
                                Node.parent.parent = Node.parent.right
                                Node.parent.left = new NIL()
                                Node.parent.right = new NIL()
                                Node = null
                            }
                            else {
                                //如果兄弟左节点存在，必定红色，先变为黑色，再右旋，就变成了兄黑，兄右孩子黑，再进行递归
                                Node.parent.right.left.color = 'black'
                                Node.parent.color = "black"
                                Node.parent.right.left.parent = Node.parent
                                Node.parent.right.left.right = Node.parent.right
                                Node.parent.right.parent = Node.parent.right.left
                                Node.parent.right = Node.parent.right.left
                                Node.parent.right.right.left = new NIL()
                                this.remove_BST_TO_RBT(Node)
                            }
                        }
                    }

                }
            }
        }
        else {
            //红色只有将删除节点设为空
            if (Node.parent.left === Node) {
                Node.parent.left = new NIL()
                Node = null
            }
            else {
                Node.parent.right = new NIL()
                Node = null
            }
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
    this.preorderTraversalNode = function (Node) {

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
Rbt.push(2, 10)
Rbt.push(0, 10)
Rbt.push(11, 10)
Rbt.push(7, 10)
Rbt.push(19, 10)
Rbt.push(4, 10)
Rbt.push(15, 10)
Rbt.push(18, 10)
Rbt.push(5, 10)
Rbt.push(14, 10)
Rbt.push(13, 10)
Rbt.push(10, 10)
Rbt.push(16, 10)
Rbt.push(6, 10)
Rbt.push(3, 10)
Rbt.push(8, 10)
Rbt.push(17, 10)
Rbt.remove(12)
Rbt.remove(1)
Rbt.remove(9)
Rbt.remove(2)
Rbt.remove(0)
Rbt.remove(11)
Rbt.remove(7)
Rbt.remove(19)
Rbt.remove(4)
Rbt.remove(15)
Rbt.remove(18)
Rbt.remove(5)
Rbt.remove(14)
Rbt.remove(13)
// Rbt.remove(10)
// Rbt.remove(16)
console.log(Rbt.search(16).color);
Rbt.preorderTraversal()

