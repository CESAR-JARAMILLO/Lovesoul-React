import './App.css';
import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    <div className="App">
      
      <div className='overlay'></div>
      <div className='background-img'>
        <header className='App-header'>
          <Navbar />
          <section className="hero-section">
              <h1 className='lead'>immersive experiences that deliver</h1>
          </section>
        </header>
      </div>
    </div>
  );
}

export default App;
