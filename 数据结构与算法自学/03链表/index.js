function LinkList() {
    this.head = null
    this.length = 0
    function Node(data) {
        this.data = data
        this.next = null
    }

    LinkList.prototype.append = function (data) {
        let newNode = new Node(data)
        if (this.length === 0) {
            this.head = newNode
        }
        else {
            var current = this.head
            while (current.next) {
                current = current.next
            }
            current.next = newNode
        }
        this.length++
    }
    LinkList.prototype.toString = function () {
        var current = this.head
        var listString = ''
        while (current) {
            listString += current.data + ' '
            current = current.next
        }
        return listString
    }
    LinkList.prototype.insert = function (data, index) {

        if (index < 0 || index > this.length) {
            return false
        }
        else {
            let newNode = new Node(data)
            if (index === 0) {
                newNode.next = this.head
                this.head = newNode
            }
            else {
                var ids = 0
                var current = this.head
                var previous = null
                while (ids++ < index) {
                    previous = current
                    current = current.next
                }
                newNode.next = current
                previous.next = newNode
            }
        }
        this.length++
    }
    LinkList.prototype.update = function (index, data) {
        if (index < 0 || index >= this.length) {
            return false
        }
        else {
            let newNode = new Node(data)
            if (index === 0) {
                newNode.next = this.head
                this.head = newNode
            }
            else {
                let id = 0
                let current = this.head
                while (id++ < index) {
                    current = current.next
                }
                current.data = data
            }

        }
    }
    LinkList.prototype.get = function (index) {
        if (index < 0 || index >= this.length) {
            return false
        }
        else {
            let current = this.head
            let id = 0
            while (id++ < index) {
                current = current.next
            }
            return current.data
        }
    }
    LinkList.prototype.indexOf = function (data) {
        let id = 0
        let current = this.head
        while (id++ < this.length) {
            if (current.data === data) {

                return id - 1
            }
            else {
                current = current.next
                if (id === this.length) {
                    return -1
                }
            }
        }
    }
    LinkList.prototype.removeAt = function (index) {
        if (index < 0 || index >= this.length) {
            return false
        }
        else {
            if (index === 0) {
                this.head.data=null
                this.head = this.head.next
                // this.head.next = null
                // this.head.data = null
            }
            else {
                let id = 0
                let current = this.head
                let perious = null
                while (id++ < index) {
                    perious = current
                    current = current.next                  
                }
                perious.next = current.next
                current.data = null
                current.next = null
            }
            this.length--
        }

    }
}
var list = new LinkList()
list.append('abc')
list.append('cddds')
list.append('s')
list.insert('xxx', 1)
list.update(1, 'aa')
list.removeAt(0)
// console.log(list.get(4));
// console.log(list.indexOf('s'));
console.log(list.toString());


