import './App.css';
import Checklist from './Checklist.js';
import ReactDOM from 'react-dom';
import Footer from './Footer';
import React from 'react';
import Navbar from './navbar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './navbar/index';
import About from './pages/about';


function App() {
  return (
    <div>
      <Router>
    <Navbar />
    <Routes>
        <Route exact path='/index' element={<Home />} />
        <Route path='/about' element={<About/>} />
    </Routes>
    </Router>
      <Checklist />
      <h1> Banana Pancake! </h1>
      <Checklist/>
      <Footer></Footer>
    </div>
  );

}

export default App;
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);