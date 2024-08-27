class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue{
  constructor() {
    this.front = null;
    this.back = null;
    this.size = 0;
  }

  enqueue(element) {
    const newNode = Node(element);
    if (this.isEmpty()) {
      this.front = newNode;
      this.back = newNode;
    } else {
      this.back.next = newNode;
      this.back = newNode;
    }
    this.size++;
  }

  dequeue() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    const dequeuedData = this.front.data;
    this.front = this.front.next;
    this.size--;
    if (this.isEmpty()) {
      this.back = null;
    }
    return dequeuedData;
  }

  peek() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.front.data;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  print() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
      return;
    }
    let current = this.front;
    let result = '';
    while (current !== null) {
      result += current.data + ' ';
      current = current.next;
    }
    console.log(result.trim());
  }

  clear() {
    this.front = null;
    this.rear = null;
    this.size = 0;
  }
}