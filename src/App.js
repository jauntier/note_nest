
import './App.css';


import PianoKeyboard from './Components/PianoKeyboard';

import Home from './Components/Home';
import { Route, Routes } from 'react-router-dom';

import Dictionary from './Components/Dictionary';

import DrawingBoard from './Components/DrawingBoard';
import Sandbox from './Components/Sandbox';
import PdfDownloadComponent from './Components/PdfDownloadComponent';





function App() {
  return (
    
   <div className="App">
    <div className="App-header">



<Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/webdev" element={<PdfDownloadComponent/>}/>
    <Route path="/musiccomp" element={<PianoKeyboard />}/>
    <Route path="/urban" element={<Dictionary />}/>
    <Route path="/draw" element={<DrawingBoard />}/>
    

      </Routes>



 

</div>

  </div>
  );
 
 

}

export default App;
