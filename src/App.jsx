
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Portfolio from './pages/Portfolio';
import Register from './pages/Register';


function App() {
  return (
    <>
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/register' element={<Register />} />
      <Route path='/portfolio' element={<Portfolio />} />




     </Routes>
    </BrowserRouter>
  </>
  )}

export default App