function PriorityQueue() {
    let tree = [];

    //takes only MathToken!!!
    this.enqueue = function (token) {
        tree.push(token);
        heapifyUp();
    }

    this.dequeue = function () {
        result = tree[0];
        tree[0] = tree.pop();
        heapifyDown();
        return result;
    }

    function heapifyDown() {
        let index = 0;
        while (index < tree.length) {
            index = bubbleDown(index);
        }
    }

    function heapifyUp() {
        let index = tree.length - 1;
        while (index > 0) {
            index = bubbleUp(index);
        }
    }

    function bubbleUp(index) {

        if (tree[index].getPrecedence() > tree[Math.floor((index - 1) / 2)].getPrecedence()) {
            let temp = tree[index];
            tree[index] = tree[Math.floor((index - 1) / 2)];
            tree[Math.floor((index - 1) / 2)] = temp;
            return Math.floor((index - 1) / 2);
        }
        else
            return -1;


    }

    function bubbleDown(index) {

        if (tree.length <= (index * 2 + 1))
            return tree.length;

        if (tree[index].getPrecedence() < tree[(index * 2 + 1)].getPrecedence()) {
            let temp = tree[index];
            tree[index] = tree[index * 2 + 1];
            tree[index * 2 + 1] = temp;
            return index * 2 + 1;
        }
        
        if (tree.length <= (index * 2 + 2))
            return tree.length;

        if (tree[index].getPrecedence() < tree[(index * 2 + 2)].getPrecedence()) {
            let temp = tree[index];
            tree[index] = tree[index * 2 + 2];
            tree[index * 2 + 2] = temp;
            return index * 2 + 2;
        }
        
        return tree.length;
    }

    this.getSize = function () {
        return tree.length - 1;
    }
}