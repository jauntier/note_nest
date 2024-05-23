










import React, { useState } from 'react';
import { Stage, Layer, Line, Rect } from 'react-konva';
import { Helmet } from 'react-helmet';

const DrawingBoard = () => {
  const [lines, setLines] = useState([]);
  const [color, setColor] = useState('#000000');
  const [isDrawing, setIsDrawing] = useState(false);
  const [isErasing, setIsErasing] = useState(false);

  const handleMouseDown = (e) => {
    setIsDrawing(true);
    const pos = e.target.getStage().getPointerPosition();
    setLines([...lines, { points: [pos.x, pos.y], color: isErasing ? '#FFFFFF' : color }]);
  };

  const handleMouseMove = (e) => {
    if (!isDrawing) return;

    const stage = e.target.getStage();
    const point = stage.getPointerPosition();
    let lastLine = lines[lines.length - 1];
    lastLine.points = lastLine.points.concat([point.x, point.y]);

    lines.splice(lines.length - 1, 1, lastLine);
    setLines(lines.concat());
  };

  const handleMouseUp = () => {
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    setLines([]);
  };

  const toggleEraser = () => {
    setIsErasing(!isErasing);
  };

  return (
    <div style={styles.container}>
      <div style={{textAlign: 'center'}}>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Chela+One&family=Gideon+Roman&family=Kumar+One&family=Labrada:ital,wght@0,100..900;1,100..900&family=Langar&family=Lumanosimo&family=Oi&family=Purple+Purse&family=Smokum&family=Viga&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <header className="header" style={{ marginBottom: '30px' }}>
        <h1 className="title">NoteNest</h1>
        <h3 className="h2x">Your drawing board</h3>
      </header>
      <div style={{ display: 'inline-block', marginBottom: '20px' }} id="pdf-content-y">
        <Stage
          width={800}
          height={600}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          style={{ border: '1px solid black' }}
        >
          <Layer>
            <Rect x={0} y={0} width={800} height={600} fill="#FFFFFF" />
            {lines.map((line, i) => (
              <Line
                key={i}
                points={line.points}
                stroke={line.color}
                strokeWidth={5}
                lineCap="round"
                lineJoin="round"
              />
            ))}
          </Layer>
        </Stage>
      </div>
      <div style={styles.canvasContainer}>
        <div style={styles.canvas}>
        <button onClick={() => setColor('#000000')} style={{ backgroundColor: '#000000', color: '#FFFFFF', border: '2px solid #000000', borderRadius: '5px', padding: '10px', margin: '5px', fontFamily: 'Arial', fontWeight: 'bold' }}>Black</button>
<button onClick={() => setColor('#ff0000')} style={{ backgroundColor: '#ff0000', color: '#FFFFFF', border: '2px solid #ff0000', borderRadius: '5px', padding: '10px', margin: '5px', fontFamily: 'Arial', fontWeight: 'bold' }}>Red</button>
<button onClick={() => setColor('#ff7f00')} style={{ backgroundColor: '#ff7f00', color: '#FFFFFF', border: '2px solid #ff7f00', borderRadius: '5px', padding: '10px', margin: '5px', fontFamily: 'Arial', fontWeight: 'bold' }}>Orange</button>
<button onClick={() => setColor('#ffff00')} style={{ backgroundColor: '#ffff00', color: '#000000', border: '2px solid #ffff00', borderRadius: '5px', padding: '10px', margin: '5px', fontFamily: 'Arial', fontWeight: 'bold' }}>Yellow</button>
<button onClick={() => setColor('#00ff00')} style={{ backgroundColor: '#00ff00', color: '#000000', border: '2px solid #00ff00', borderRadius: '5px', padding: '10px', margin: '5px', fontFamily: 'Arial', fontWeight: 'bold' }}>Green</button>
<button onClick={() => setColor('#0000ff')} style={{ backgroundColor: '#0000ff', color: '#FFFFFF', border: '2px solid #0000ff', borderRadius: '5px', padding: '10px', margin: '5px', fontFamily: 'Arial', fontWeight: 'bold' }}>Blue</button>
<button onClick={() => setColor('#4b0082')} style={{ backgroundColor: '#4b0082', color: '#FFFFFF', border: '2px solid #4b0082', borderRadius: '5px', padding: '10px', margin: '5px', fontFamily: 'Arial', fontWeight: 'bold' }}>Indigo</button>
<button onClick={() => setColor('#8b00ff')} style={{ backgroundColor: '#8b00ff', color: '#FFFFFF', border: '2px solid #8b00ff', borderRadius: '5px', padding: '10px', margin: '5px', fontFamily: 'Arial', fontWeight: 'bold' }}>Violet</button>
<button onClick={() => setColor('#ffffff')} style={{ backgroundColor: '#ffffff', color: '#000000', border: '2px solid black', borderRadius: '5px', padding: '10px', margin: '5px', fontFamily: 'Arial', fontWeight: 'bold' }}>White</button>
<button onClick={() => setColor('#a52a2a')} style={{ backgroundColor: '#a52a2a', color: '#FFFFFF', border: '2px solid #a52a2a', borderRadius: '5px', padding: '10px', margin: '5px', fontFamily: 'Arial', fontWeight: 'bold' }}>Brown</button>
<button onClick={() => setColor('#00ffff')} style={{ backgroundColor: '#00ffff', color: '#000000', border: '2px solid #00ffff', borderRadius: '5px', padding: '10px', margin: '5px', fontFamily: 'Arial', fontWeight: 'bold' }}>Cyan</button>
<button onClick={() => setColor('#ff00ff')} style={{ backgroundColor: '#ff00ff', color: '#FFFFFF', border: '2px solid #ff00ff', borderRadius: '5px', padding: '10px', margin: '5px', fontFamily: 'Arial', fontWeight: 'bold' }}>Magenta</button>
<button onClick={() => setColor('#808080')} style={{ backgroundColor: '#808080', color: '#FFFFFF', border: '2px solid #808080', borderRadius: '5px', padding: '10px', margin: '5px', fontFamily: 'Arial', fontWeight: 'bold' }}>Gray</button>
<button onClick={() => setColor('#ffc0cb')} style={{ backgroundColor: '#ffc0cb', color: '#000000', border: '2px solid #ffc0cb', borderRadius: '5px', padding: '10px', margin: '5px', fontFamily: 'Arial', fontWeight: 'bold' }}>Pink</button>
<button onClick={() => setColor('#ffd700')} style={{ backgroundColor: '#ffd700', color: '#000000', border: '2px solid #ffd700', borderRadius: '5px', padding: '10px', margin: '5px', fontFamily: 'Arial', fontWeight: 'bold' }}>Gold</button>
<button onClick={() => setColor('#8b4513')} style={{ backgroundColor: '#8b4513', color: '#FFFFFF', border: '2px solid #8b4513', borderRadius: '5px', padding: '10px', margin: '5px', fontFamily: 'Arial', fontWeight: 'bold' }}>Saddle Brown</button>
<button onClick={() => setColor('#b22222')} style={{ backgroundColor: '#b22222', color: '#FFFFFF', border: '2px solid #b22222', borderRadius: '5px', padding: '10px', margin: '5px', fontFamily: 'Arial', fontWeight: 'bold' }}>Fire Brick</button>
<button onClick={() => setColor('#daa520')} style={{ backgroundColor: '#daa520', color: '#000000', border: '2px solid #daa520', borderRadius: '5px', padding: '10px', margin: '5px', fontFamily: 'Arial', fontWeight: 'bold' }}>Golden Rod</button>
<button onClick={() => setColor('#adff2f')} style={{ backgroundColor: '#adff2f', color: '#000000', border: '2px solid #adff2f', borderRadius: '5px', padding: '10px', margin: '5px', fontFamily: 'Arial', fontWeight: 'bold' }}>Green Yellow</button>
<button onClick={() => setColor('#ff69b4')} style={{ backgroundColor: '#ff69b4', color: '#000000', border: '2px solid #ff69b4', borderRadius: '5px', padding: '10px', margin: '5px', fontFamily: 'Arial', fontWeight: 'bold' }}>Hot Pink</button>
<button onClick={toggleEraser} style={{  textShadow: isErasing ? '0 0 8px black' : 'none', backgroundColor: isErasing ? 'lightgray' : 'white', color: isErasing ? 'white' : 'black', border: '2px solid black', borderRadius: '5px', padding: '10px', margin: '5px', fontFamily: 'Arial', fontWeight: 'bold' }}>{isErasing ? 'Eraser On' : 'Eraser Off'}</button>
          
        </div>
      </div>
      <button
        onClick={clearCanvas}
        style={{
          background: 'linear-gradient(135deg, #ffffff, #f0f0f0)',
          color: '#000000',
          border: '2px solid #cccccc',
          borderRadius: '10px',
          padding: '10px 20px',
          marginTop: '30px',
          fontFamily: 'Arial, sans-serif',
          fontWeight: 'bold',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
          cursor: 'pointer',
          transition: 'all 0.3s ease'
        }}
        onMouseOver={(e) => {
          e.target.style.background = 'linear-gradient(135deg, #f0f0f0, #e0e0e0)';
          e.target.style.transform = 'scale(1.05)';
        }}
        onMouseOut={(e) => {
          e.target.style.background = 'linear-gradient(135deg, #ffffff, #f0f0f0)';
          e.target.style.transform = 'scale(1)';
        }}
      >
        Clear
      </button>
    </div>
    </div>
  );
};

const styles = {
  container: {
    
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundColor: '#1a1a1a',
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      border: '5px solid',
      borderImage: 'linear-gradient(to right, #1a1a1a, #36454F, #d3d3d3, #4d4d4d, #1a1a1a) 1',
      borderRadius: '15px',
  },
  canvasContainer: {
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    maxWidth: '800px',
    width: '100%',
    textAlign: 'center'
  },
  canvas: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    
  },
  button: {
    border: '2px solid',
    borderRadius: '5px',
    padding: '10px',
    margin: '5px',
    fontFamily: 'Arial',
    fontWeight: 'bold',
    cursor: 'pointer'
  }
};

export default DrawingBoard;
