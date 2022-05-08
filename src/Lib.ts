enum TreePart {
    Trunk, Branch, Leaf
}

function strMap(tp: TreePart): string {
    switch (tp) {
        case TreePart.Trunk:
            return 'T';
        case TreePart.Branch:
            return 'B';
        case TreePart.Leaf:
            return 'L';
    }
}

class Node {
    children: Node[];
    value: TreePart;
    constructor(v: TreePart) {
        this.children = [];
        this.value = v;
    }
    add(node: Node) {
        this.children.push(node);
    }
    print(indent: string, last: boolean) {
        let printFmt = "";
        printFmt += indent;
        if (last) {
            printFmt += '\\-';
            indent += '  ';
        } else {
            printFmt += '|-';
            indent += '| ';
        }
        printFmt += strMap(this.value);
        console.log(printFmt);
        for (let i = 0; i < this.children.length; i++) 
            this.children[i].print(indent, i == this.children.length - 1);
    }
}

class Tree {
    root: Node;
    constructor(rootVal: TreePart) {
        this.root = new Node(rootVal);
    }
    print() {
        this.root.print("", true);
    }
}

export function randBetween(n1: number, n2: number): number {
    const lower = Math.min(n1, n2);
    const upper = Math.max(n1, n2);
    const diff = upper - lower;
    return Math.random() * diff + lower;
}

export const tree = new Tree(TreePart.Trunk);
tree.root.add(new Node(TreePart.Trunk));
tree.root.children[0].add(new Node(TreePart.Branch));
tree.root.children[0].add(new Node(TreePart.Branch));
tree.root.children[0].add(new Node(TreePart.Branch));
tree.root.children[0].children[0].add(new Node(TreePart.Leaf));
tree.root.children[0].children[0].add(new Node(TreePart.Leaf));
tree.root.children[0].children[1].add(new Node(TreePart.Leaf));
tree.root.children[0].children[1].add(new Node(TreePart.Leaf));
tree.root.children[0].children[2].add(new Node(TreePart.Leaf));
tree.root.children[0].children[2].add(new Node(TreePart.Leaf));

