import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const icons = require('@fortawesome/free-solid-svg-icons');

const Feature = ({ carFeature }) => {
  console.log(carFeature);
  return (
    <div>
      <FontAwesomeIcon icon={icons[carFeature?.icon]} size="6x" />
      <h3>{carFeature?.name}</h3>
      <p>{carFeature?.desc}</p>
    </div>
  );
};

export default Feature;
