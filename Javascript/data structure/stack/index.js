class Stack {
  constructor() {
    this.items = [];
    this.count = 0;
  }

  push(element) {
    this.items[this.count] = element;
    this.count++;
  }

  pop() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    this.count--;
    const result = this.items[this.count];
    delete this.items[this.count];
    return result;
  }

  peek() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.items[this.count - 1];
  }

  isEmpty() {
    return this.count === 0;
  }

  size() {
    return this.count;
  }

  print() {
    let result = '';
    for (let i = 0; i < this.count; i++) {
      result = this.items[i] + ' ' + result;
    }
    console.log(result.trim());
  }

  clear() {
    this.items = {};
    this.count = 0;
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