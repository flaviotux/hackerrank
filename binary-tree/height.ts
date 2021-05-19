'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');
let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;
process.stdin.on('data', function(inputStdin: string): void {
    inputString += inputStdin;
});

process.stdin.on('end', function(): void {
    inputLines = inputString.split('\n');
    inputString = '';
    main();
});

function readLine(): string {
    return inputLines[currentLine++];
}

type NodeType = {
    data?: number;
    left?: NodeType;
    right?: NodeType;
}

function height(root: NodeType): number {
    if(!Object.keys(root).length) return -1;
    var leftHeight = height(root.left);
    var rightHeight = height(root.right);

    return Math.max(leftHeight, rightHeight) + 1;
}

function insertNode(node: NodeType, data: number) {
    if(node.data) {
        if(data > node.data) {
            insertNode(node.right, data);
        } else {
            insertNode(node.left, data);
        }
    } else {
        node.data = data;
        node.left = {};
        node.right = {};
    }
}

function main() {
    const numberOfLines: number = parseInt(readLine());
    const nodes: number[] = readLine()
        .replace(/\s+$/g, '')
        .split(' ')
        .map(indexesTemp => parseInt(indexesTemp, 10));
    const root: NodeType = {};

    nodes.forEach(data => insertNode(root, data));

    console.log(height(root));
}
