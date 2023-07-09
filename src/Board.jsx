import React from 'react'
import SquareBoard from './SquareBoard'
import Square from './Square'

const Board = ({board}) => {

  const colorControl = (index)=>{
    const x = index % 8;
    const y = Math.abs(Math.floor(index / 8) - 7)
    return (x+y) % 2 === 0
  }

  const positionControl =(index) =>{
    const x = index % 8;
    const letters = ["a", "b" , "c", "d","e","f", "g", "h"][x]
    const y = Math.abs(Math.floor(index / 8) - 7)
    return `${letters}${y+1}`
  }

  return (
    <div className='w-[640px] h-[640px] bg-green-700 flex flex-wrap' >
        {
          board.flat().map((brd,index) => {
            return(
                <Square colorValue = {colorControl(index)} positionControl={positionControl(index)}>
                    {
                        brd && <SquareBoard brd ={brd} positionControl={positionControl(index)}/>
                    }
                </Square>
            )
          })
        }
    </div>
  )
}

export default Board