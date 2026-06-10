
var MyStack = function() {
    this.q1 = [];
};

MyStack.prototype.push = function(x) {
    this.q1.push(x)
};

MyStack.prototype.pop = function() {
    let n = this.q1.length;
    for(let i = 0; i < n - 1; i++){
        this.q1.push(this.q1.shift())
    }
    let ans = this.q1.shift()
    return ans;
};

MyStack.prototype.top = function() {
    let n = this.q1.length;
    for(let i = 0; i < n - 1; i++){
        this.q1.push(this.q1.shift())
    }
    let ans = this.q1[0]
    this.q1.push(this.q1.shift())
    return ans;
    
};

MyStack.prototype.empty = function() {
    return this.q1.length === 0;
};
