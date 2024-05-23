
import './App.css';


import PianoKeyboard from './Components/PianoKeyboard';

import Home from './Components/Home';
import { Route, Routes } from 'react-router-dom';

import Dictionary from './Components/Dictionary';

import DrawingBoard from './Components/DrawingBoard';

import PdfDownloadComponent from './Components/PdfDownloadComponent';
import PDFKey from './Components/PDFKey';
import PDFDraw from './Components/PDFDraw';






function App() {
  return (
    
   <div className="App">
    <div className="App-header">



<Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/webdev" element={<PdfDownloadComponent/>}/>
    <Route path="/musiccomp" element={<PDFKey />}/>
    <Route path="/urban" element={<Dictionary />}/>
    <Route path="/draw" element={<PDFDraw />}/>
    
    

      </Routes>



 

</div>

  </div>
  );
 
 

}

export default App;
