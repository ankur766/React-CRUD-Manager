
import Create from '../Components/Create';
import Read from '../Components/Read';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import Update from '../Components/Update';

function App() {


  return (
    < >
    
    <BrowserRouter >
    <Routes>
      <Route exact path='/' element={<Create/>} />
      <Route  path='/read' element={<Read/>} />
      <Route  path='/update' element={<Update/>} />
    </Routes>
    </BrowserRouter>
   
    </>

  )
}

export default App
