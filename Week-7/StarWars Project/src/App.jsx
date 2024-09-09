import React from 'react';
import { StarshipProvider } from './context/StarshipsContext';
import Starships from './components/Starships';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <StarshipProvider>
      <Header />
      <Starships />
    </StarshipProvider>
  );
}

export default App;
