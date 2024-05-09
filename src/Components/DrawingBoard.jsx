import React, { useRef, useEffect, useState } from 'react';

const DrawingBoard = () => {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    
    const startPosition = (e) => {
      setIsDrawing(true);
      draw(e, context);
    };
    
    const endPosition = () => {
      setIsDrawing(false);
      context.beginPath();
    };
    
    const draw = (e, context) => {
      if (!isDrawing) return;
      context.lineWidth = 2;
      context.lineCap = 'round';
      context.strokeStyle = '#000';
      
      context.lineTo(e.clientX, e.clientY);
      context.stroke();
      context.beginPath();
      context.moveTo(e.clientX, e.clientY);
    };
    
    canvas.addEventListener('mousedown', startPosition);
    canvas.addEventListener('mouseup', endPosition);
    canvas.addEventListener('mousemove', (e) => draw(e, context));
    
    return () => {
      canvas.removeEventListener('mousedown', startPosition);
      canvas.removeEventListener('mouseup', endPosition);
      canvas.removeEventListener('mousemove', draw);
    };
  }, [isDrawing]);

  return (
    <canvas
      ref={canvasRef}
      style={{ border: '1px solid black' }}
      width={800}
      height={600}
    />
  );
};

export default DrawingBoard;
