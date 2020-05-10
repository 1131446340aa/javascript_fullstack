function hasTable() {
    this.storage = []
    this.count = 0
    this.limit = 7
    hasTable.prototype.hasfn = function (str, size) {
        let hasCode = 0
        for (let i = 0; i < str.length; i++) {
            hasCode = hasCode * 37 + str.charCodeAt(i)
        }
        let index = hasCode % size
        return index
    }
    hasTable.prototype.put = function (key, value) {
        var index = this.hasfn(key, this.limit)
        var bucket = this.storage[index]
        if (bucket == null) {
            bucket = []
            this.storage[index] = bucket
        }

        for (var i = 0; i < bucket.length; i++) {
            var tuple = bucket[i]
            if (tuple[0] === key)
                tuple[1] = value
            return
        }
        bucket.push([key, value])
        this.count++
        if (this.count > this.limit * 0.75) {
            this.resize(this.limit*2)
        }
    }
    hasTable.prototype.get = function (key) {
        let index = this.hasfn(key, this.limit)
        if (!this.storage[index]) {
            return null;
        }
        else {
            let bucket = this.storage[index]
            for (let i = 0; i < bucket.length; i++) {
                let tuple = bucket[i]
                if (tuple[0] === key) {
                    return tuple[1]
                }
            }
            return null
        }
    }
    hasTable.prototype.delete = function (key) {
        let index = this.hasfn(key, this.limit)
        let bucket = this.storage[index]
        if (bucket == null) {
            return false
        }
        else {
            for (let i = 0; i < bucket.length; i++) {
                let tuple = bucket[i]
                if (tuple[0] === key) {
                    bucket.splice(i, 1)
                    this.count--
                    if (this.limit > 7 && this.count < this.limit * 0.25) {
                        this.resize(Math.floor(this.limit/2))
                    }
                    return tuple[1];
                }
            }
            return false;
        }
    }
    hasTable.prototype.resize = function (newlimit) {
        var oldstorage = this.storage
        this.storage = []
        this.count = 0
        this.limit = newlimit
        for (var i = 0; i < oldstorage.length; i++) {
            let bucket = oldstorage[i]
            if (bucket == null) {
                continue
            }
            for (let j = 0; j < bucket.length; j++) {
                let tuple = bucket[j]
                this.put(tuple[0], tuple[1])
            }
        }
    }
}
var ht = new hasTable()
ht.put('abc', '123')
ht.put('abd', '456')
console.log(ht.get('abc'));

ht.put('abc', '520')
ht.delete('abc')
console.log(ht.get('abc'))
