import './App.css';
import AboutUs from './components/AboutUs/AboutUs';
import { Button } from './components/Common/Button/Button';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import StagesOfWork from './components/StagesOfWork/StagesOfWork';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <AboutUs/>
      <StagesOfWork/>
      
    </div>
  );
}

export default App;
