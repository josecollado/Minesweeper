//this file is for what the board should look like in the beginning stage


const printBoard = board => {
	cosole.log(board.map(row => {
		row.join(' | ').join('\n')
	}))
}

const blankLine = '  |   |  ';
console.log('This is what an empty board would look like:' + blankLine);

const guessLine = '1 |   |  ';
const bombLine = '  | B |  ';

console.log('This is what a board with a guess and a bomb on it would look like:');
console.log(blankLine);
console.log(guessLine);
console.log(bombLine);


let board = [
	[' ',' ',' '],
	[' ',' ',' '],
	[' ',' ',' ']
];

printBoard(board);

board[0][1] = '1';
board[2][2] = 'B';

printBoard(board);