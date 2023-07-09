import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import Board from './Board';
import subjectGame, { initGame, move } from './Game';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';

function App() {
  const [board, setBoard] = useState([]);
  const [isGameOver, setIsGameOver] = useState();
  const [result, setResult] = useState();


  useEffect(() => {
    initGame()
    const subscribe = subjectGame.subscribe((sub) =>{

      setBoard(sub.chess)
      setIsGameOver(sub.isGameOver)
      setResult(sub.result)

    }  );

    return () => {
      subscribe.unsubscribe();
    };
  }, []);

  return (
    <DndProvider backend={HTML5Backend}>
      <Helmet>
        <title>Chess App</title>
      </Helmet>
      <div className='bg-black h-screen flex justify-center items-center relative'>
        {
          isGameOver && <div className='absolute bg-white bg-opacity-80 rounded-lg p-3 flex flex-col justify-center items-center '>
            <h1 className='font-extrabold'>Game Over !</h1>
            {result && <div className='font-bold'>{result}</div>}
          </div>
        }
        <Board board={board} />
      </div>
    </DndProvider>
  );
}

export default App;

