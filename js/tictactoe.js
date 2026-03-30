"use strict";
/*******************************************************
 *     tictactoe.js - 50p.
 *
 *     When you fought Dr. DOM today, to me it looked like two superheroes playing
 *     TIC TAC TOE! At times, it was hard to tell, who would have won which fight...
 *
 *     To solve my misfortune, please write a little program, that takes a (hard-coded)
 *     two-dimensional Array (BATTLEFIELD) and checks if one of the two opponents has
 *     won the battle, and if so, how (vertical, horizontal, main-diagonal, anti-diagonal).
 *
 *     Since you have already had a couple of encounters of different severities, I simply
 *     can't translate all your battles to TIC TAC TOE matches of the same size.
 *     For that reason, your little program should be written in a way, that it can
 *     scale with the size of the battlefield (3x3, 4x4, ..., nxn).
 *
 *     Carina - 2026-03-30
 *******************************************************/

"use strict";
/*******************************************************
 *     tictactoe.js - 50p.
 *******************************************************/

const X = "Savior (X)";
const O = "Dr. DOM (O)";

// Beispiel Battlefield
const BATTLEFIELD =
    [
        [O, X, O],
        [X, X, X],
        [O, O, X],
    ];

//TODO: Check if the battle is over, and if so, announce the winner!

let size = BATTLEFIELD.length;
let winner = null;
let type = "";

// Check Horizontal
//TODO: Check all rows
for (let i = 0; i < size; i++) {
    let first = BATTLEFIELD[i][0];
    if (first === null) continue;

    let win = true;

    for (let j = 1; j < size; j++) {
        if (BATTLEFIELD[i][j] !== first) {
            win = false;
        }
    }

    if (win) {
        winner = first;
        type = "horizontal";
    }
}

// Check Vertical
//TODO: Check all columns
for (let i = 0; i < size && !winner; i++) {
    let first = BATTLEFIELD[0][i];
    if (first === null) continue;

    let win = true;

    for (let j = 1; j < size; j++) {
        if (BATTLEFIELD[j][i] !== first) {
            win = false;
        }
    }

    if (win) {
        winner = first;
        type = "vertical";
    }
}

// Check Main Diagonal
//TODO: Check top-left to bottom-right
if (!winner) {
    let first = BATTLEFIELD[0][0];

    if (first !== null) {
        let win = true;

        for (let i = 1; i < size; i++) {
            if (BATTLEFIELD[i][i] !== first) {
                win = false;
            }
        }

        if (win) {
            winner = first;
            type = "main diagonal";
        }
    }
}

// Check Anti Diagonal
//TODO: Check top-right to bottom-left
if (!winner) {
    let first = BATTLEFIELD[0][size - 1];

    if (first !== null) {
        let win = true;

        for (let i = 1; i < size; i++) {
            if (BATTLEFIELD[i][size - 1 - i] !== first) {
                win = false;
            }
        }

        if (win) {
            winner = first;
            type = "anti diagonal";
        }
    }
}

// Ausgabe
//TODO: Print result
console.log("Battlefield:");
for (let row of BATTLEFIELD) {
    console.log(row);
}

if (winner) {
    console.log("Winner: " + winner);
    console.log("Type: " + type);
} else {
    console.log("No winner");
}
//TODO: Check if the battle is over, and if so, announce the winner!

// Check Horizontal
// Check Vertical
// Check Main Diagonal
// Check Anti Diagonal