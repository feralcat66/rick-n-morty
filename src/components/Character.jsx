import React from 'react';
import PropTypes from 'prop-types';


const Character = ({ image, name, status }) => (
  <section className='character'>
    <img src={image} alt={name} />
    <h2>{name}</h2>
    <p>{status}</p>
  </section>
);

Character.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired
};

export default Character;
