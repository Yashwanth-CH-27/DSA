
var addTwoNumbers = function(l1, l2) {
    let dummy = new ListNode(0);
    let ans = dummy;
    let carry = 0;
    let curr1 = l1;
    let curr2 = l2;
    while(curr1 || curr2 || carry){
        let val1 = curr1 ? curr1.val : 0;
        let val2 = curr2 ? curr2.val : 0;
        let sum = val1 + val2 + carry;
        let digit = Math.floor(sum % 10);
        carry = Math.floor(sum / 10);
        let newNode = new ListNode(digit);
        ans.next = newNode;
        ans = ans.next;
        if(curr1) curr1 = curr1.next;
        if(curr2) curr2 = curr2.next;
    }
    return dummy.next
};