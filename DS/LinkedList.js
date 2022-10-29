
// // each specific node
// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head = null;
//         this.size = 0;
//     }

//     // methods
//     isEmpty() {
//         return this.size === 0;
//     }

//     getSize() {
//         return this.size;
//     }

//     // inserts node when list is empty
//     prepend(value) {
//         // creating new node
//         const node = new Node(value);
//         // starting point node check
//         if(this.isEmpty()) {
//             this.head = node;
//         } else {
//             node.next = this.head;
//             this.head = node;
//         }
//         // incrementing list size
//         this.size++;
//     }
//     get() {
//         if(this.isEmpty()) {
//             console.log("List is empty")
//         } else {
//             let curr = this.head;
//             while(curr.next) {
//                 console.log(curr)
//                 curr = curr.next
//             }
//         }

//     }
// }

// const list = new LinkedList();
// list.prepend(11);
// list.prepend(13);
// list.prepend(15);

// console.log(list.get())