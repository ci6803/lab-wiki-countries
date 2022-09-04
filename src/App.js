// src/App.js
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './compponents/Navbar';
import CountriesList from './compponents/CountriesList';
import CountryDetails from './compponents/CountryDetails';
import Home from './compponents/Home';
import countries from './countries.json';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [country, setCountry] = useState([]);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    const getCountries = async () => {
      const response = await axios.get(
        'https://ih-countries-api.herokuapp.com/countries'
      );
      setCountry(response.data);
      setFetching(false);
    };

    getCountries().catch(console.error);
  }, []);

  //console.log(country);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route
          path="/country-list"
          element={<CountriesList countries={country} />}
        />
        <Route path="/:id" element={<CountryDetails countries={country} />} />
      </Routes>
    </div>
  );
}
export default App;
