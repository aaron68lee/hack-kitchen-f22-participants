import './App.css';
import Checklist from './Checklist.js';
import ReactDOM from 'react-dom';
import Footer from './Footer';

function App() {
  return (
    <div>
      <h1> Banana Pancake! </h1>
      <Checklist/>
      <Footer></Footer>
    </div>
  );

}

export default App;
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
