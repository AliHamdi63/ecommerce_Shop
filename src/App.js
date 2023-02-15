import './App.css';
import Footer from './components/Footer/Footer';
import NavBar from './components/Navbar/NavBar';
import Home from './components/homePage/Home';

function App() {
  return (
    <div className="App">
      <NavBar />

      <Home />

      <Footer />
    </div>
  );
}

export default App;
