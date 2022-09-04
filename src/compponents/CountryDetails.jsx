import React from 'react';
import { useParams, Link } from 'react-router-dom';

function CountryDetails({ countries }) {
  const { id } = useParams();

  const singleCountry = countries.filter((country) => {
    return country.alpha3Code === id;
  });

  //setCountry(singleCountry);

  console.log(singleCountry);

  return (
    <div>
      <h2>CountryDetails</h2>
      <hr />
      <img
        src={`https://flagpedia.net/data/flags/icon/72x54/${singleCountry[0].alpha2Code.toLowerCase()}.png`}
        alt=""
      />
      <h3>{singleCountry[0].name.common}</h3>
      <p>Capital: {singleCountry[0].capital}</p>
    </div>
  );
}

export default CountryDetails;
