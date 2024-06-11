class Stack {
  constructor() {
    this.items = []
    this.count = 0
  }

  push(element) {
    this.items[this.count] = element
    this.count += 1
    return this.count - 1
  }

  pop() {
    if (this.count == 0) return undefined
    let deleteItem = this.items[this.count - 1]
    this.count -= 1
    return deleteItem
  }

  peek() {
    return this.items[this.count - 1];
  }

  isEmpty() {
    return this.count == 0
  }

  size() {
    return this.count
  }

  print() {
    let str = ''
    for (let i = 0; i < this.count; i++){
      str += this.items[i] + ' '
    }
    return str
  }

  clear() {
    this.items = []
    this.count = 0
    return this.items
  }
}

const stack = new Stack()

stack.push(100);
stack.push(200)
console.log(stack.print());
stack.pop()
console.log(stack.peek())
console.log(stack.isEmpty())
console.log(stack.size())