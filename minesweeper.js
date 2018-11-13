// const printBoard = board => {
// 	// console.log('Current Board:');
// 	// console.log(board[0].join(' | '));
// 	// console.log(board[1].join(' | '));
// 	// console.log(board[2].join(' | '));
// 	cosole.log(board.map(row => {
// 		row.join(' | ').join('\n')
// 	}))
// }

// const blankLine = '  |   |  ';
// console.log('This is what an empty board would look like:' + blankLine);

// const guessLine = '1 |   |  ';
// const bombLine = '  | B |  ';

// console.log('This is what a board with a guess and a bomb on it would look like:');
// console.log(blankLine);
// console.log(guessLine);
// console.log(bombLine);


// let board = [
// 	[' ',' ',' '],
// 	[' ',' ',' '],
// 	[' ',' ',' ']
// ];

// printBoard(board);

// board[0][1] = '1';
// board[2][2] = 'B';

// printBoard(board);

const printBoard = board => {
  console.log(board.map(row => row.join(' | ')).join('\n'));
};


const generatePlayerBoard = (numberOfRows, numberOfColumns) =>{
	let board = [];
	for (let i = 0; i < numberOfRows; i++){
		let row = [];
		for (let i = 0; i < numberOfColumns; i++){
			row.push(' ');
		}
		board.push(row);
	}
	return board;
};

const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {
	let board = [];
	for (let i = 0; i < numberOfRows; i++){
		let row = [];
		for (let i = 0; i < numberOfColumns; i++){
			row.push(null);
		}
		board.push(row);
	}
	let numberOfBombsPlaced = 0;
	while (numberOfBombsPlaced < numberOfBombs){
		const randomRowIndex = Math.floor(Math.random() * numberOfRows);
		const randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
		board[randomRowIndex][randomColumnIndex] = 'B';
		numberOfBombsPlaced ++;
		// The code in your while loop has the potential to place bombs 
		// on top of already existing bombs. This will be fixed when you learn about control flow
	}
	return board;
};


let playerBoard = generatePlayerBoard(3, 4);
let bombBoard = generateBombBoard(3,4,5);

console.log('Player Board: ');
printBoard(playerBoard);

console.log('Bomb board: ');
printBoard(bombBoard);









