import { useState } from "react";
import Grid from "../Grid/Grid";
import styling from "./Game.module.css";
import CheckWinner from "./CheckingWinner";
import { ReactDOM } from "react";

var count = 0;
function Game() {
  const [currentPlayer, setCurrentPlayer] = useState("X");

  const [game, setGame] = useState([
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ]);

  const handleWinning = (matrix) => {
    console.log(count);
    var res = CheckWinner(matrix);
    if (res === "X") {
      setTimeout(() => {
        alert("The Winner is X");
        window.location.reload(true);
      }, 100);
    } else if (res === "Y") {
      setTimeout(() => {
        alert("The Winner is Y");
        window.location.reload(false);
      }, 100);
    } else if (count > 8) {
      setTimeout(() => {
        alert("The Game is a Draw");
        window.location.reload(false);
      }, 100);
    }
  };

  const handleTurn = () => {
    if (currentPlayer === "X") {
      setCurrentPlayer("Y");
    } else if (currentPlayer === "Y") {
      setCurrentPlayer("X");
    }
  };

  const handleMatrix = (r, c) => {
    game[r][c] = currentPlayer;
    setGame([...game]);
  };

  const handleDisable = (e) => {
    e.target.disabled = true;
  };

  const handleClick = (row, col) => {
    // console.log(row,col);
    count++;
    handleTurn();

    handleMatrix(row, col);
    handleWinning(game);
    console.log(game[0]);
    console.log(game[1]);
    console.log(game[2]);
  };

  return (
    <>
      {{ currentPlayer } === "Y" ? (
        <div className={styling.Y}>It is Player {currentPlayer}'s Turn Now</div>
      ) : (
        <div className={styling.X}>It is Player {currentPlayer}'s Turn Now</div>
      )}

      <div className={styling.grid}>
        <Grid
          gridArr={game}
          onClickFn={handleClick}
          handleDisable={handleDisable}
        />
      </div>
    </>
  );
}

export { Game };
