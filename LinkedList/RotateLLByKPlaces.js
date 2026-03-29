
var rotateRight = function(head, k) {
    if(!head || !head.next) return head;

    let len = 0;
    let curr = head;
    while(curr){
        curr = curr.next;
        len++
    }

    k = k % len;
    let second = head;
    let first = head;
    for(let i = 0; i < k; i++){
        first  = first.next;
    }

    while(first.next){
        second = second.next;
        first = first.next
    }

    first.next = head;
    let newHead = second.next;
    second.next = null;
    return newHead;
    
};