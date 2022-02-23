import { Routes, Route } from 'react-router-dom';
import { BudgetPersonal } from '../components/BudgetPersonal';
import { Navbar } from '../components/iu/Navbar';

export const DashBoardRoutes = () => {
  return (
    <>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path='budgetpersonal' element={<BudgetPersonal />} />
        
          <Route path='/' element={<BudgetPersonal />} />
        </Routes>
      </div>
    </>
  );
};