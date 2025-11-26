
import { T } from "../node_modules/ts-toolbelt/out/index";
import { P } from "../node_modules/ts-toolbelt/out/Object/_api";

class ListNode<T> {
  data: T;
  next: ListNode<T> | null;
  constructor(data: T, next: ListNode<T> | null = null) {
    this.data = data;
    this.next = next;
  }
}
export class LinkedList<TElement> {
  head: ListNode<TElement> | null;
  cur: ListNode<TElement> | null;
  cnt = 0;
  constructor() {
    this.head = null;
    this.cur = this.head;
  }
  public push(element: TElement) {
    const newNode = new ListNode(element);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  public pop(): TElement | null {
    if (!this.head) return this.head;
    if (!this.head.next) {
      const poppedNode = this.head;
      this.head = null;
      return poppedNode.data;
    }
    let current = this.head;
    let prev: ListNode<TElement> | null = null;
    while (current.next) {
      prev = current;
      current = current.next;
    }
    if (prev) {
      prev.next = null;
    }
    return current.data;
  }

  public shift(): TElement | null {
    // remove from front
    if (!this.head) return this.head;
    if (!this.head.next) {
      const poppedNode = this.head;
      this.head = null;
      return poppedNode.data;
    }
    const poppedNode = this.head;
    this.head = this.head.next;
    return poppedNode.data;
  }

  public unshift(element: TElement) {
    // insert into front
    const newNode = new ListNode(element);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    newNode.next = this.head;
    this.head = newNode;
  }

  public delete(element: TElement) {
    if (!this.head) return;
    if (this.head.data === element) {
      this.head = null;
      return;
    }
    let prev: ListNode<TElement> | null = null;
    let current = this.head;
    while (current.next) {
      prev = current;
      current = current.next;
      if (current.data === element) {
        prev.next = current.next;
        break;
      }
    }
  }

  public count(): number {
    let ans: number = 0;
    if (!this.head) return ans;
    let current:ListNode<TElement>|null = this.head;
    while (current) {
      current = current.next;
      ans++;
    }
    return ans;
  }
}

const list = new LinkedList<number>();
list.push(30);
list.push(20);
console.log(list.pop());
console.log(list.pop());
