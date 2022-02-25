import { Routes, Route } from 'react-router-dom';
import { Home } from '../components/Home';
import { Navbar } from '../components/iu/Navbar';

export const DashBoardRoutes = () => {
  return (
    <>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path='/home' element={<Home />} />
        
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
    </>
  );
};