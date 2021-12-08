import { Game } from "./Components/Game/Game";
import "./styles.css";
import myGif from "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Tic Tac Toe</h1>
      <img
        className="myGif"
        src="https://i.pinimg.com/originals/e1/d6/e1/e1d6e11c15cb627a63fda9113ba863ea.gif"
        alt="game"
      />
      <Game />
    </div>
  );
}
