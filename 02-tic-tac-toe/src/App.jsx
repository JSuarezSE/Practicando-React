import { useState } from "react";
import "./App.css";
import confetti from "canvas-confetti";
import { Square } from "./components/square";
import { TURNS } from "./constants";
import { checkWinner, checkEndGame } from "./logic/board";
import { WinnerModal } from "./components/WinnerModal";
import { Board } from "./components/board";
import { saveGametoStorage, deleteGameToStorage } from "./storage";
function App() {
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem("board");
    return boardFromStorage
      ? JSON.parse(boardFromStorage)
      : Array(9).fill(null);
  });

  const [turn, setTurn] = useState(() => {
    const turnFormStorage = window.localStorage.getItem("turn");
    return turnFormStorage ?? TURNS.X;
  });

  const [winner, setWinner] = useState(null);

  const resetGame = () => {
    deleteGameToStorage();
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);
  };

  const updateBoard = (index) => {
    //no se sobrescriba un cuadro
    if (board[index] || winner) return;
    //actualizar el tablero
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);
    //cambiar de turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);
    //guardar
    saveGametoStorage({ board: newBoard, turn: newTurn });
    //revisar al ganador
    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      confetti();
      setWinner(newWinner);
      deleteGameToStorage();
    } else if (checkEndGame(newBoard)) {
      setWinner(false);
    }
  };

  return (
    <main className="board">
      <h1>Tres en raya</h1>
      <button onClick={resetGame}>Borrar tablero</button>
      <Board board={board} updateBoard={updateBoard} />
      <section className="turn">
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>
      <WinnerModal resetGame={resetGame} winner={winner}></WinnerModal>
    </main>
  );
}

export default App;
