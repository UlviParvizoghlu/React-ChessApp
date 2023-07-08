import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'
import Board from './Board';
import subjectGame from './Game';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
function App() {
  const [board, setBoard] = useState([])
  useEffect(()=>{
    const subscribe = subjectGame.subscribe(sub => setBoard(sub.chess))
    
    return() => subscribe.unsubscribe();
  },[])
  return (
    <DndProvider backend={HTML5Backend}>
      <Helmet>
        <title>Chess App</title>
      </Helmet>
    <div className='bg-black h-screen flex justify-center items-center' >
      <Board board={board} />
    </div>
    </DndProvider>
  );
}

export default App;
