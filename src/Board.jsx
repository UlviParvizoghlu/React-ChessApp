import React from 'react'
import SquareBoard from './SquareBoard'
import Square from './Square'

const Board = ({board}) => {
    // console.log("boardd", board.flat())
  return (
    <div className='w-[640px] h-[640px] bg-green-700' >
        {
          board.flat().map((brd,index) => {
            return(
                <Square key={index}>
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