import React, { useEffect, useState } from 'react';
import { DragPreviewImage, useDrag } from 'react-dnd';

const SquareBoard = ({ brd, positionControl }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [pieceImage, setPieceImage] = useState(null);

  const [{ isDragging: dragIsDragging }, drag, preview] = useDrag({
    type: 'chess',
    item: { id: `${positionControl}_${brd.type}_${brd.color}` },
    collect: (monitor) => {
      return { isDragging: !!monitor.isDragging() };
    },
  });

  useEffect(() => {
    const loadImage = async () => {
      const image = await import(`../public/assets/images/${brd.type}_${brd.color}.png`);
      setPieceImage(image.default);
    };

    loadImage();
  }, [brd.type, brd.color]);

  useEffect(() => {
    setIsDragging(dragIsDragging);
  }, [dragIsDragging]);

  return (
    <div ref={drag}>
      {isDragging && <DragPreviewImage src={pieceImage} connect={preview} />}
      {pieceImage && <img className='w-[50px]' src={pieceImage} alt='' />}
    </div>
  );
};

export default SquareBoard;
