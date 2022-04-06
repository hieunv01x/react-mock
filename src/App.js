import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Header from 'components/Header';
import NotFound from 'layout/error/NotFound';
import HomePage from 'layout/pages/HomePage';
import Repos2 from 'layout/pages/Repos2';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<HomePage />} />
          <Route path="/repos1" element={<HomePage />} />
          <Route path="/repos2" element={<Repos2 />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
