import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import About from '../../pages/About/About';
import Home from '../../pages/Home/Home';
import Career from '../../pages/Career/Career';

function Root() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<Career />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
  );
}

export default Root;
