import logo from './logo.svg';
import './App.css';
import Navebar from './components/Navbar';
import Body from './components/Body';
import About from './components/About';
import Education from './components/Education';
import Projeact from './components/Projeact';
import Skils from './components/Skils';
import Countact from './components/Countact';
import Footer from './components/Footer';




function App() {
  return (
  <>
  <Navebar />
   <Body />
   <About/>
   <Education />
   <Projeact />
   <Skils/>
   <Countact />
   <Footer/>
  </>
  );
}

export default App;
