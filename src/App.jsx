import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './components/Main';
import Header from './components/Header';
import Project from './components/Project';
import About from './components/About';
import Contact from './components/Contact';
import HomeScreen from './components/HomeScreen';
function App() {
  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<HomeScreen />} />
        <Route path="/header" element={<Header />} />
        <Route path='/projects' element={<Project/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/main' element={<Main/>}/>
      </Routes>
    </Router>
  );
}

export default App;
