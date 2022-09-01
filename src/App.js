// src/App.js
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './compponents/Navbar';
import CountriesList from './compponents/CountriesList';
import CountryDetails from './compponents/CountryDetails';
import Home from './compponents/Home';
import data from './countries.json';
import { useState } from 'react';

function App() {
  const [countries, setCountries] = useState(data);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route
          path="/country-list"
          element={<CountriesList countries={countries} />}
        />
        <Route path="/:id" element={<CountryDetails />} countries={countries} />
      </Routes>
    </div>
  );
}
export default App;
