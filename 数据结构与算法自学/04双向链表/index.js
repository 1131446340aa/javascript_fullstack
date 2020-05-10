function DoublyLinkList() {
    this.head = null
    this.tail = null
    this.length = 0
    function Node(data) {
        this.data = data
        this.prex = null
        this.next = null
    }
    DoublyLinkList.prototype.append = function (data) {
        let newNode = new Node(data)
        if (this.length === 0) {
            this.head = newNode
            this.tail = newNode
        }
        else {
            newNode.prex = this.tail;
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
    }
    DoublyLinkList.prototype.toString = function () {
        let current = this.head
        let result = ""
        while (current) {
            result += current.data + " "
            current = current.next
        }
        return result;
    }
    DoublyLinkList.prototype.insert = function (data, index) {
        if (index < 0 || index > this.length) {
            return false
        }
        let newNode = new Node(data)
        if (!this.length) {
            this.tail = newNode
            this.head = newNode
        }
        else {
            if (index === 0) {
                newNode.next = this.head
                this.head = newNode
            }
            if (index > 0 && index < this.length) {
                let current = this.head
                let id = 0
                while (id++ < index) {
                    current = current.next
                }
                newNode.prex = current.prex
                newNode.next = current
                current.prex.next = newNode
                current.prex = newNode
            }
            if (index === this.length) {
                newNode.prex = this.tail
                this.tail.next = newNode
                this.tail = newNode
            }
        }

        this.length++
    }
    DoublyLinkList.prototype.get = function (index) {
        let id = 0
        let current = this.head
        while (id++ < index) {
            current = current.next
        }
        return current.data
    }
    DoublyLinkList.prototype.update = function (index, data) {
        let id = 0
        let current = this.head
        while (id++ < index) {
            current = current.next
        }
        current.data = data
    }
    DoublyLinkList.prototype.removeAt = function (index) {
        if (index < 0 || index >= this.length) {
            return false
        }
        if (this.length === 1) {
            this.tail = null
            this.head = null
        }
        else {
            if (index === 0) {
                this.head.next.prex = null
                this.head = this.head.next

            }
            if (index === this.length - 1) {
                this.tail.prex.next = null
                this.tail = this.tail.prex
            }
            if (index > 0 && index < this.length - 1) {
                let id = 0
                let current=this.head
                while (id++ < index){
                    current=current.next
                }
                current.next.prex=current.prex
                current.prex.next=current.next
                current.data=null//清除节点信息，释放内存
                current.prex=null
                current.next=null
            }
        }
        this.length--
    }
}
let DoublyLink = new DoublyLinkList()
DoublyLink.append('aaa')
DoublyLink.append('bbb')
DoublyLink.append('ccc')
DoublyLink.append('ddd')
DoublyLink.insert('111', 0)
DoublyLink.append('eee')
DoublyLink.update(1, "xxx")
DoublyLink.removeAt(2)
// console.log(DoublyLink.get(5));

console.log(DoublyLink.toString());
