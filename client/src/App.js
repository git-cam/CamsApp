//App.js

import axios from 'axios';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/" element={<Home />} /> {/* Add this default route */}
    </Routes>
  </Router>
  );
}

export default App;
