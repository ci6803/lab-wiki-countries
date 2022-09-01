import React from 'react';
import { Link } from 'react-router-dom';
//import { useState } from 'react';

function CountriesList({ countries }) {
  return (
    <div>
      {countries.map((country) => {
        return (
          <div key={country.alpha3Code}>
            <Link to={`/${country.alpha3Code}`}>
              <h3>{country.name.common}</h3>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default CountriesList;
