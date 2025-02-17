import Navbar from '@/application-components/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Homepage from './application-components/Homepage';
import Calendar from './application-components/SkincareCalendar';
import StashList from './application-components/StashList';
import AllTimeProductList from './application-components/AllTimeProductList';

function App() {
  return (
    <>
      <Router>
        <Navbar /> 
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/stash" element={<StashList />} />
          <Route path="/allTimeProductList" element={<AllTimeProductList />} />
        </Routes>
      </Router>
    </>      
  );
}

export default App;
