class StringTreeNode {
    constructor() {
        this.count = 0;
        this.left = null;
        this.right = null;
    }
}

class StringTree {
    constructor() {
        this.root = null;
    }

    print() {
        this.printUtil(this.root);
    }

    printUtil(curr) {
        if (((curr != null && curr instanceof StringTreeNode) || curr === null)) {
            if (curr != null) {
                console.log(` value is ::${curr.value}`);
                console.log(` count is :: ${curr.count}`);
                this.printUtil(curr.left);
                this.printUtil(curr.right);
            }
        }
        else
            throw new Error('invalid overload');
    }

    insert(value) {
        this.root = this.insertUtil(value, this.root);
    }

    insertUtil(value, curr) {
        if ((typeof value === 'string') && ((curr != null && curr instanceof StringTreeNode) || curr === null)) {
            let compare;
            if (curr == null) {
                curr = new StringTreeNode(this);
                curr.value = value;
                curr.left = curr.right = null;
                curr.count = 1;
            }
            else {
                compare = curr.value.localeCompare(value);
                if (compare === 0)
                    curr.count++;
                else if (compare === 1)
                    curr.left = this.insertUtil(value, curr.left);
                else
                    curr.right = this.insertUtil(value, curr.right);
            }
            return curr;
        }
        else
            throw new Error('invalid overload');
    }

    freeTree() {
        this.root = null;
    }

    find(value) {
        const ret = this.findUtil(this.root, value);
        console.log(`Find ${value} Return ${ret}`);
        return ret;
    }

    findUtil(curr, value) {
        if (((curr != null && curr instanceof StringTreeNode) || curr === null) && (typeof value === 'string')) {
            let compare;
            if (curr == null)
                return false;
            compare = curr.value.localeCompare(value);
            if (compare === 0)
                return true;
            else {
                if (compare === 1)
                    return this.findUtil(curr.left, value);
                else
                    return this.findUtil(curr.right, value);
            }
        }
        else
            throw new Error('invalid overload');
    }

    frequency(value) {
        return this.frequencyUtil(this.root, value);
    }

    frequencyUtil(curr, value) {
        if (((curr != null && curr instanceof StringTreeNode) || curr === null) && (typeof value === 'string')) {
            let compare;
            if (curr == null)
                return 0;
            compare = curr.value.localeCompare(value);
            if (compare === 0)
                return curr.count;
            else {
                if (compare > 0)
                    return this.frequencyUtil(curr.left, value);
                else
                    return this.frequencyUtil(curr.right, value);
            }
        }
        else
            throw new Error('invalid overload');
    }
}

const tt = new StringTree();
tt.insert("banana");
tt.insert("apple");
tt.insert("mango");
console.log("\nSearch results for apple, banana, grapes and mango :\n");
tt.find("apple");
tt.find("banana");
tt.find("banan");
tt.find("grapes");
tt.find("mango");