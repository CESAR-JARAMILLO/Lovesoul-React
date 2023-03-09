import { useState } from 'react'
import './App.css';
import Navbar from './components/Navbar/Navbar'

function App() {
  const [isHamburgerClicked, setIsHamburgerClicked] = useState(false);

  const handleHamburgerClick = () => {
    setIsHamburgerClicked(!isHamburgerClicked);
  };

  return (
    <div className="App">
      
      <div className='overlay'></div>
      <div className='background-img'>
        <header className='App-header'>
          <Navbar onHamburgerClick={handleHamburgerClick} />
          <div className={isHamburgerClicked ? "" : "hide"}>
          <div className='mobile-links-container'>
            <ul className="mobile-links">  
              <li>
                <a href="/">about</a>
              </li>
              <li>
                <a href="/">careers</a>
              </li>
              <li>
                <a href="/">products</a>
              </li>
              <li>
                <a href="/">support</a>
              </li>
            </ul>
          </div>
          </div>
          <section className="hero-section">
              <h1 className='lead'>immersive experiences that deliver</h1>
          </section>
        </header>
      </div>
    </div>
  );
}

export default App;
