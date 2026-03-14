
var isPalindrome = function(head) {
    let arr = [];
    let curr = head;
    while(curr){
        arr.push(curr.val)
        curr = curr.next;
    }
    let n = arr.length
    for(let i = 0; i < n/2; i++){
        if(arr[i] !== arr[n-i-1]){
            return false
        }
    }
    return true
};

var isPalindrome = function(head) {
    //Middle of LL
    slow = head;
    fast = head;
    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
    }
    //Reverse the left half from mid to null
    prev = null;
    curr = slow;
    while(curr){
        temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }
    //Compare the right half with the reversed left half
    let rightHalf = head;
    let reversedLeftHalf = prev;
    while(reversedLeftHalf){
        if(rightHalf.val !== reversedLeftHalf.val){
            return false
        }
        rightHalf = rightHalf.next;
        reversedLeftHalf = reversedLeftHalf.next
    }
    return true;
};