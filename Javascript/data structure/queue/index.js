class Queue {
  constructor() {
    this.items = {};
    this.frontIndex = 0;
    this.backIndex = 0;
  }

  enqueue(element) {
    this.items[this.backIndex] = element;
    this.backIndex++;
  }

  dequeue() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    const item = this.items[this.frontIndex];
    delete this.items[this.frontIndex];
    this.frontIndex++;
    return item;
  }

  front() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.items[this.frontIndex];
  }

  isEmpty() {
    return this.frontIndex === this.backIndex;
  }

  size() {
    return this.backIndex - this.frontIndex;
  }

  print() {
    let result = '';
    for (let i = this.frontIndex; i < this.backIndex; i++) {
      result += this.items[i] + ' ';
    }
    console.log(result.trim());
  }
}