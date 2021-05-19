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

function isEmpty(node: NodeType): boolean {
    return Object.keys(node).length === 0;
}

function levelOrder(node: NodeType) {
    const queue: NodeType[] = [];
    queue.push(node);

    while(queue.length) {
        const tempNode: NodeType = queue.shift();
        if(!isEmpty(tempNode.left))
            queue.push(tempNode.left);
        if(!isEmpty(tempNode.right))
            queue.push(tempNode.right);
        process.stdout.write(`${tempNode.data} `);
    }
}

function main() {
    const numberOfLines: number = parseInt(readLine());
    const nodes: number[] = readLine()
        .replace(/\s+$/g, '')
        .split(' ')
        .map(indexesTemp => parseInt(indexesTemp, 10));
    const root: NodeType = {};

    for(let i = 0; i < numberOfLines; i++) {
        insertNode(root, nodes[i]);
    }
    
    levelOrder(root);
}
