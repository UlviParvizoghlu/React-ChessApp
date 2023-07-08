import React from 'react'
import SquareBoard from './SquareBoard'
import Square from './Square'

const Board = ({board}) => {

  const colorControl = (index)=>{
    const x = index % 8;
    const y = Math.abs(Math.floor(index / 8) - 7)
    return (x+y) % 2 === 0
  }

  return (
    <div className='w-[640px] h-[640px] bg-green-700 flex flex-wrap' >
        {
          board.flat().map((brd,index) => {
            return(
                <Square colorValue = {colorControl(index)} key={index}>
                    {
                        brd && <SquareBoard brd ={brd}/>
                    }
                </Square>
            )
          })
        }
    </div>
  )
}

export default Board