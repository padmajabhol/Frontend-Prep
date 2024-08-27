class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  };
}

class Stack {
  constructor() {
    this.head = null;
    this.size = 0;
  };

  push(element) {
    const newNode = new Node(element);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
  };

  pop() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    const poppedData = this.head.data;
    this.head = this.head.next;
    this.size--;
    return poppedData;
  };

  peek() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.head.data;
  };

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  print() {
    if (this.isEmpty()) {
      console.log("Stack is empty");
      return;
    }
    let current = this.head;
    let result = '';
    while (current !== null) {
      result = current.data + ' ' + result;
      current = current.next;
    }
    console.log(result.trim());
  }

  clear() {
    this.head = null;
    this.size = 0;
  }
}

// Create a new stack
const stack = new Stack();

// Test 1: Check if the stack is initially empty
console.log("Test 1: Is stack empty?", stack.isEmpty());  // Expected: true

// Test 2: Push elements onto the stack
stack.push(10);
stack.push(20);
stack.push(30);
console.log("Test 2: Stack size after pushing 3 elements:", stack.getSize());  // Expected: 3

// Test 3: Print the stack
console.log("Test 3: Stack contents:");
stack.print();  // Expected: 30 20 10

// Test 4: Peek at the top element
console.log("Test 4: Top element:", stack.peek());  // Expected: 30

// Test 5: Pop an element
console.log("Test 5: Popped element:", stack.pop());  // Expected: 30
console.log("Stack size after pop:", stack.getSize());  // Expected: 2

// Test 6: Print the stack after pop
console.log("Test 6: Stack contents after pop:");
stack.print();  // Expected: 20 10

// Test 7: Pop remaining elements
console.log("Test 7: Popped element:", stack.pop());  // Expected: 20
console.log("Test 7: Popped element:", stack.pop());  // Expected: 10
console.log("Test 7: Popped element:", stack.pop());  // Expected: "Stack is empty"

// Test 8: Check if the stack is empty after popping all elements
console.log("Test 8: Is stack empty?", stack.isEmpty());  // Expected: true

// Test 9: Try to peek at an empty stack
console.log("Test 9: Peek at empty stack:", stack.peek());  // Expected: "Stack is empty"

// Test 10: Push after emptying the stack
stack.push(100);
console.log("Test 10: Stack size after pushing to empty stack:", stack.getSize());  // Expected: 1
stack.print();  // Expected: 100

// Test 11: Clear the stack
stack.clear();
console.log("Test 11: Stack size after clear:", stack.getSize());  // Expected: 0
console.log("Test 11: Is stack empty after clear?", stack.isEmpty());  // Expected: true