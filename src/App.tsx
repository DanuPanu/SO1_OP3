import {useState} from 'react';
import {Box} from '@mui/material';
import './App.css';
import Header from './components/VerkkokauppaHeader';
import Footer from './components/VerkkokauppaFooter';
import Tuotteet from './components/Tuotenostot';
import Kirjautuminen from './components/Kirjautuminen';
import Ostoskori from './components/Pikaostoskori';

function App() {

  const [hinta, setHinta] = useState<number>(0);
  const [hinta2, setHinta2] = useState<number>(0);
  const [maara, setMaara] = useState<number>(0);
  const [nakyy, setNakyy] = useState<string>(`none`);
  
  const paivitaHinta = () : void =>{
    setHinta(hinta + 19.99);
  }
  const paivitaHinta2 = () : void =>{
    setHinta2(hinta2 + 24.99);
  }
  const paivitaMaara = () : void =>{
    setMaara(maara + 1);
  }
  const paivitaNakyy = () : void =>{
    setNakyy(`block`);
  }

  return (
    <>
    <Box sx={{display: "grid", 
    gridTemplateAreas : `
    "Header Header Header Header"
    "Tuotteet Tuotteet Tuotteet Kirjautuminen"
    "Tuotteet Tuotteet Tuotteet Kirjautuminen"
    "Tuotteet Tuotteet Tuotteet Ostoskori"
    "Tuotteet Tuotteet Tuotteet Ostoskori"
    "Footer Footer Footer Footer"`}}>
      <Header></Header>
      <Kirjautuminen></Kirjautuminen>
      <Tuotteet paivitaHinta={paivitaHinta}
      paivitaHinta2={paivitaHinta2}
      paivitaMaara={paivitaMaara}
      paivitaNakyy={paivitaNakyy}
      ></Tuotteet>
      <Ostoskori
      hinta = {hinta}
      hinta2 = {hinta2}
      maara = {maara}
      nakyy = {nakyy}></Ostoskori>
      <Footer></Footer>
    </Box>
    </>
  );
}

export default App;
