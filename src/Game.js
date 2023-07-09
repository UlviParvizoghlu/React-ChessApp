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
  const isGameOver = chess.isGameOver()
  subjectGame.next({ chess: chess.board(), isGameOver, result: isGameOver ? getGameResult() : null});
};

const getGameResult = () =>{
    if(chess.isCheckmate()){
        const winner = chess.turn() === 'w' ? 'Black' : 'White';
        return `ŞAH MAT - Winner : ${winner}`
    }else if(chess.isDraw()){
        let reason = "50 həmlə qaydası";
        if(chess.isStalemate()){
            reason = 'Çıxmaz döngü'
        }else if(chess.isThreefoldRepetition()){
            reason = '3-dən çox təkrarlama'
        }else if(chess.isInsufficientMaterial()){
            reason = "Yetərsiz hərəkət"
        }
        return reason;

    }else{
        return 'Bilinməyən vəziyyət'
    }

}
