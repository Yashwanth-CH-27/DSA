//Two pass approach, Two full traversals
var removeNthFromEnd = function(head, n) {
    let sentinal = new ListNode();
    sentinal.next = head;
    
    let length = 0;
    while(head){
        head = head.next;
        length++
    }

    let prevDelPointer = length - n;
    let prev = sentinal;
    
    for(let i = 0; i < prevDelPointer; i ++){
        prev = prev.next;
    }
    prev.next = prev.next.next;
    return sentinal.next
};

//One pass, one full traversal
var removeNthFromEnd = function(head, n) {
    let sentinal = new ListNode()
    sentinal.next = head;
    let first = sentinal;

    for(let i = 0; i < n; i++){
        first = first.next
    }

    let second = sentinal;

    while(first.next){
        second = second.next;
        first = first.next
    }

    second.next = second.next.next;
    return sentinal.next
    
};