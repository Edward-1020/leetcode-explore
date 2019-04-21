//  使用快排、忽略空间复杂度条件

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

let swap = (p, q) => {
  let val = p.val
  p.val = q.val
  q.val = val
}

let partion = (begin, end) => {
  let val = begin.val
  let p = begin
  let q = begin.next
  while (q !== end) {
    if (q.val < val) {
      p = p.next
      swap(p, q)
    }
    q = q.next
  }
  //  让基准元素跑到中间
  swap(p, begin)
  return p
}

let sort = (begin, end = null) => {
  if (begin !== end) {
    let part = partion(begin, end)
    sort(begin, part)
    sort(part.next, end)
  }
}

export {
  Node,
  NodeList,
  sort
}
