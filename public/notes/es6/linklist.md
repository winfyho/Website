# Js数据结构：链表

## 单向链表

使用Es5语法编写案例
### 0、数据结构
- **Node**节点类
    - data 存储数据
    - next 指向下一个节点的**引用**(指针)
- **LinkedList**链表主体
    - head 链表头，指向第一个节点
    - leng th记录节点数，以便后续获取链表长度
``` js
function Node(data) {
    this.data = data;
    this.next = null;
}
function LinkedList() {
    this.head = null;
    this.length = 0;
}
```

### 1、增加Create
- LinkedList.append(data)
``` js
LinkedList.prototype.append = function (data) {
    // 1. 判断链表是否为空，为空则head指向新Node
    // 2. 否则查找到最后一个节点，将其next指向新节点，length += 1

    var newNode = new Node(data);
    if (this.head === null) {
        this.head = newNode;
    } else {
        var current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    }

    this.length += 1;
}
```

- LinkedList.insert(position, data)
``` js
LinkedList.prototype.insert = function (position, data) {
    if (position < 0 || position > this.length) {
        return false
    } else if (position === 0) {
        var newNode = new Node(data);
        newNode.next = this.head
        this.head = newNode;
        this.length += 1;
    }
    var current = this.head;
    var i = 0
    while (current) {
        if (i + 1 === position) {
            var newNode = new Node(data);
            newNode.next = current.next;
            current.next = newNode;
            this.length += 1;
            return data

        }
        current = current.next;
        i += 1;
    }
}
```


### 2、读取Read
- LinkedList.get(position)
``` js
LinkedList.prototype.get = function (position) {
        var current = this.head;
        var index = 0;
        if (position < 0 || position > this.length - 1) {
            return false
        }
        while (current) {
            if (index === position) {
                return current.data
            }
            current = current.next;
            index += 1;
        }
    }
```


- LinkedList.indexOf(position)
``` js
LinkedList.prototype.indexOf = function (target) {
    if (!target) {
        return -1
    }
    var current = this.head;
    var index = 0
    while (current) {
        if (current.data === target) {
            return index;
        }
        current = current.next;
        index += 1;
    }
    return -1
}
```


- LinkedList.isEmpty()
``` js 
LinkedList.prototype.isEmpty =function (){
    if(this.length === 0 && this.head === null){
        return true
    }
    return false
}
```

- LinkedList.size()
``` js
LinkedList.prototype.size =function (){
    return this.length
}
```


- LinkedList.toString(splitMark)
``` js
LinkedList.prototype.toString = function (splitMark) {
    splitMark = splitMark || ','
    var current = this.head
    var listString = ''

    while (current) {
        listString += current.data.toString()
        listString += (current.next ? splitMark : '')
        current = current.next
    }
    return listString
}
```

- LinkedList.toArray(isReverse)
``` js
LinkedList.prototype.toArray = function (isReverse) {
    isReverse = isReverse || false
    var current = this.head;
    var list = [];

    while (current) {
        if (isReverse) {
            list.unshift(current.data);
        } else {
            list.push(current.data);
        }
        current = current.next;
    }
    return list
}
```



### 3、更新Update
LinkedList.update(position,data)
``` js
LinkedList.prototype.update = function (position, data) {
    var current = this.head;
    var index = 0;
    if (position < 0 || position > this.length - 1) {
        return false
    }
    while (current) {
        if (index === position) {
            current.data = data;
            return {
                updateData: current.data,
                index: index
            };
        }
        current = current.next;
        index += 1;
    }
}
```


### 4、删除Delete
LinkedList.removeAt(position)
``` js
LinkedList.prototype.removeAt = function (position) {
    var current = this.head;
    var index = 0;
    if (position < 0 || position > this.length - 1) {
        return false
    }
    while (current) {
        if (index + 1 === position) {
            var nextNode = current.next.next;
            var removeNode = current.next;
            var removeData = removeNode.data;
            var removeIndex = index + 1;
            removeNode = null;
            current.next = nextNode;
            this.length -= 1;
            return {
                removeData: removeData,
                index: removeIndex
            }
        }
        current = current.next;
        index += 1;
    }
}
```


LinkedList.remove(target)
``` js
LinkedList.prototype.remove = function (target) {
    if (!target) {
        return false
    }
    var current = this.head;
    var previous = null;
    var index = 0
    while (current) {
        if (current.data === target) {
            previous.next = current.next;
            current = null;
            this.length -= 1;
            return index;
        }
        previous = current;
        current = current.next;
        index += 1;
    }
    return false
}
```















## 双向链表