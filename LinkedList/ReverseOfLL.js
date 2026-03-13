
var reverseList = function(head) {
    let prev = null;
    let curr = head;
    while(curr){
        temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }
    return prev
};