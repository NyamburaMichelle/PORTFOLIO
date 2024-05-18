
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Portfolio from './pages/Portfolio';


function App() {
  return (
    <>
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/portfolio' element={<Portfolio />} />





     </Routes>
    </BrowserRouter>
  </>
  )}

export default App