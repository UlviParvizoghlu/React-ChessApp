import { Chess } from 'chess.js';
import { BehaviorSubject } from 'rxjs';

const chess = new Chess();
const subjectGame = new BehaviorSubject();

export default subjectGame;

export const initGame = () =>{
    updateGame()
}

export const move = (from, to) => {
  const moveResult = chess.move({ from, to });

  if (moveResult !== null) {
    updateGame();
  }
};

const updateGame = () => {
  subjectGame.next({ chess: chess.board() });
};
