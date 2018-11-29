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
		let randomRowIndex = Math.floor(Math.random() * numberOfRows);
		let randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
		if (board[randomRowIndex][randomColumnIndex] !== 'B') {
			board[randomRowIndex][randomColumnIndex] = 'B';
			numberOfBombsPlaced++;
		}
		board[randomRowIndex][randomColumnIndex] = 'B';
		numberOfBombsPlaced ++;
		// The code in your while loop has the potential to place bombs 
		// on top of already existing bombs. This will be fixed when you learn about control flow
	}
	return board;
};

const getNumberOfNeighborBombs = (bombBoard, rowIndex, columnIndex) =>{
	const neighborOffsets = [];
};


let playerBoard = generatePlayerBoard(3, 4);
let bombBoard = generateBombBoard(3,4,5);

console.log('Player Board: ');
printBoard(playerBoard);

console.log('Bomb board: ');
printBoard(bombBoard);









