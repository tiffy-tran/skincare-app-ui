import Navbar from '@/application-components/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Homepage from './application-components/Homepage';
import Calendar from './application-components/SkincareCalendar';
import StashList from './application-components/StashList';
import HistoricalProductList from './application-components/HistoricalProductList';

function App() {
  return (
    <>
      <Router>
        <Navbar /> 
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/stash" element={<StashList />} />
          <Route path="/historicalProductList" element={<HistoricalProductList />} />
        </Routes>
      </Router>
    </>      
  );
}

export default App;
