import React from 'react';
import { Link } from 'react-router-dom';
//import { useState } from 'react';

function CountriesList({ countries }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-5">
          <div className="list-group" style={{ overflow: 'scroll' }}>
            {countries.map((elem) => (
              <div key={elem.alpha3Code}>
                <img
                  src={`https://flagpedia.net/data/flags/icon/72x54/${elem.alpha2Code.toLowerCase()}.png`}
                  alt={elem.name.common}
                ></img>
                <Link to={`/${elem.alpha3Code}`}>{elem.name.common}</Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountriesList;
