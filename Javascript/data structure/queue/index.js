function Queue() {
  let items = []
  let front = 0
  let rear = -1
  let count = 0

  this.enqueu = (element) => {
    items[++rear] = element;
    count++
  }

  this.dequeue = () => {
    if (this.isEmpty) {
      return "Queue is empty";
    }

    let current = front++;
    let temp = items[current];
    items[current] = null;
    count--;
    return temp;
  }

  this.front = () => {
    return items[front];
  }

  this.rear = () => {
    return items[rear];
  }

  this.size = () => {
    return count;
  }

  this.isEmpty = () => {
    return count === 0;
  }
}