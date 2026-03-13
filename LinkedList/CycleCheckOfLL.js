//HashMap or in Js Set Approach; Space Complexity is O(n)
var hasCycle = function(head) {
    let set = new Set();
    let curr = head;
    while(curr){
        if(set.has(curr)){
            return true
        }
        set.add(curr)
        curr = curr.next
    }
    return false
    
};
// Floyd's Algo, Two pointer approach, Space Complexity is O(1)
var hasCycle = function(head) {
    if(head == null) return false
    let slow = head;
    let fast = head.next;
    while(slow != fast){
        if(fast == null || fast.next == null){
            return false
        }
        slow = slow.next;
        fast = fast.next.next;
    }
    return true;
};