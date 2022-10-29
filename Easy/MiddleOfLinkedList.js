/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

/*
Given the head of a singly linked list, return the middle node of the linked list.

If there are two middle nodes, return the second middle node.

Ex: 1
Input: head = [1,2,3,4,5]
Output: [3,4,5]
Explanation: The middle node of the list is node 3.


Ex: 2
Input: head = [1,2,3,4,5,6]
Output: [4,5,6]
Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.
*/

// fast variaable moves 2X the speed of slow, when fast var. reach the end, slow would be in the middle.

var middleNode = function (head) {
  let slow = head;
  let fast = head;

  while (fast) {
    if (!fast.next) break;
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
};
