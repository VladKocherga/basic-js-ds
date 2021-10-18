const { NotImplementedError } = require("../extensions/index.js");

const { ListNode } = require("../extensions/list-node.js");

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
module.exports = class Queue {
  constructor() {
    this.val = null;
  }

  getUnderlyingList() {
    return this.val;
  }

  enqueue(value) {
    if (this.val == null) {
      this.val = new ListNode(value);
    } else {
      let next = this.val,
        parent;
      while (next != null) {
        parent = next;
        next = parent.next;
      }
      parent.next = new ListNode(value);
    }
  }

  dequeue() {
    let result = null;
    if (this.val != null) {
      result = this.val.value;
      this.val = this.val.next;
    }
    return result;
  }
};
