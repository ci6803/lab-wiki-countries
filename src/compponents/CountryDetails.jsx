import React from 'react';
import { useParams, Link } from 'react-router-dom';

function CountryDetails() {
  const { id } = useParams();
  return <div>CountryDetails</div>;
}

export default CountryDetails;
