'use strict';

import { WriteStream, createWriteStream } from "fs";
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

/*
 * Complete the 'contacts' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts 2D_STRING_ARRAY queries as parameter.
 */

function contacts(queries: string[][]): number[] {
    const trie: Record<string, any> = {};
    const results: number[] = [];
    
    for(let i = 0; i < queries.length; i++) {
        const [operation, value] = queries[i];
        
        if(operation === 'add') {
            add(trie, value);
            continue;
        }
        
        if (operation === 'find') {
            results.push(find(trie, value));
        }
    }
    
    return results;
}

function add(trie: Record<string, any>, contact: string): void {
    const letters: string[] = contact.split('');
    

    for(let i = 0; i < letters.length; i++) {
        if(trie[letters[i]]) {
            trie[letters[i]].count++
        } else {
            trie[letters[i]] = { count: 1 };
        }
        
        trie = trie[letters[i]];
    }
}


function find(trie: Record<string, any>, term: string) {
    const letters: string[] = term.split('');
    let node: Record<string, any> = trie;

    for(let i = 0; i < letters.length; i++) {
        node = node[letters[i]];
        
        if(!node) {
            break;
        }
    }

    return node ? node.count : 0;
}

function main() {
    const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

    const queriesRows: number = parseInt(readLine().trim(), 10);

    let queries: string[][] = Array(queriesRows);

    for (let i: number = 0; i < queriesRows; i++) {
        queries[i] = readLine().replace(/\s+$/g, '').split(' ');
    }

    const result: number[] = contacts(queries);

    ws.write(result.join('\n') + '\n');

    ws.end();
}
