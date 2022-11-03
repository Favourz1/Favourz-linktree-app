import React from 'react'
import {Route, Routes } from 'react-router-dom';
import ContactPage from './pages/Contact'
import HomePage from './pages/Home'
import ErrorPage from './pages/Error'


function App() {
  return (
    <div className="App container p-4">
        <Routes>
            <Route exact path="/"  element={<HomePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route component={ErrorPage} />
          </Routes>
    </div>
  );
}

export default App;
