
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Portfolio from './pages/Portfolio';
import Register from './pages/Register';
import Education from './pages/Education';
import Achievements from './pages/Achievements';
import Aspirations from './pages/Aspirations';


function App() {
  return (
    <>
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/register' element={<Register />} />
      <Route path='/portfolio' element={<Portfolio />} />
      <Route path='/education' element={<Education />} />
      <Route path='/achievements' element={<Achievements />} />
      <Route path='/aspirations' element={<Aspirations />} />




     </Routes>
    </BrowserRouter>
  </>
  )}

export default App