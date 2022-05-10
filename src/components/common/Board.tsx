import { ReactElement } from "react";
import "./Board.css";

interface BoardProps {
	rows: number;
	tiles: number;
}

function Board(props: BoardProps) {
	const generateBoard = (rows: number, tiles: number): Array<ReactElement> => {
		const rowsArray: Array<ReactElement> = [];
		for (let i = 0; i < rows; i++) {
			const tilesArray: Array<ReactElement> = [];
			for (let j = 0; j < tiles; j++) {
				tilesArray.push(
					<div className="boardTile" id={"tile" + String(i) + String(j)}>
						{String(i) + String(j)}
					</div>
				);
			}
			rowsArray.push(<div className="boardRow">{tilesArray}</div>);
		}
		return rowsArray;
	};
	return (
		<div className="boardContainer">
			<div className="board">{generateBoard(props.rows, props.tiles)}</div>
		</div>
	);
}

export default Board;
