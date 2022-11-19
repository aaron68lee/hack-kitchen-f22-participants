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

      <h1> Kenzie's Banana Pancake Recipe </h1>
      <img src="./assets/pancakes.jpg" alt="Image of Banana Pancakes"/>
      
            <h2> Steps: </h2>
            <ol>
                <li>In a large bowl, peel and mash all bananas.</li>
                <li>Add egg, vegetable oil, and milk. Mix thoroughly.</li>
                <li>In a separate bowl: mix flour, sugar, baking powder, salt, and chia seeds.</li>
                <li>Combine the bowls, stir until evenly mixed. It's ok if the texture is a bit chunky!</li>
                <li>Add chocolate chips to your liking.</li>
            </ol>
            <p>This recipe is a variation on <a>href="https://www.allrecipes.com/recipe/20334/banana-pancakes-i/" Addean1's recipe </a> from AllRecipes.</p>


      <Checklist/>
      <Footer></Footer>

    </div>
  );

}

export default App;
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);