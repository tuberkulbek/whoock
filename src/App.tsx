import './App.css';
import AboutUsPage from './pages/AboutUs/AboutUsPage';
import StagesOfWorkPage from './pages/StagesOfWork/StagesOfWorkPage';
import HeaderPage from './pages/Header/HeaderPage';
import HomePage from './pages/Home/HomePage';
import PartnersPage from './pages/Partners/PartnersPage';
import { useRef } from 'react';

function App() {
    const home = useRef<HTMLDivElement>(null);
    const about = useRef<HTMLDivElement>(null);
    const stages = useRef<HTMLDivElement>(null);
    const partners = useRef<HTMLDivElement>(null);
    const contacts = useRef<HTMLDivElement>(null);
  return (
    <div className="App">
      <HeaderPage home={home} about={about} stages={stages} partners={partners} contacts={contacts}/>
      <HomePage home={home}/>
      <AboutUsPage about={about}/>
      <StagesOfWorkPage stages={stages}/>
      <PartnersPage partners={partners}/>
    </div>
  );
}

export default App;
