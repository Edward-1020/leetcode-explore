class Node {
  constructor (value) {
    this.val = value
    this.next = null
  }
}

class NodeList {
  constructor (arr) {
    let head = new Node(arr.shift())
    let next = head
    arr.forEach(item => {
      next.next = new Node(item)
      next = next.next
    })
    return head
  }
}

let isCircle = (head) => {
  let slow = head
  let fast = head.next
  while (1) {
    if (!fast || !fast.next) {
      return false
    } else if (fast === slow || fast.next === slow) {
      return true
    } else {
      slow = slow.next
      fast = fast.next.next
    }
  }
}

export {
  Node,
  NodeList,
  isCircle
}
