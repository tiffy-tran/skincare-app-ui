import Navbar from '@/components/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Homepage from './components/Homepage';
import Calendar from './components/SkincareCalendar';
import StashList from './components/StashList';
import HistoricalProductList from './components/HistoricalProductList';

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
