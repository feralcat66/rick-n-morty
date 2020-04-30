import React from 'react';
import PropTypes from 'prop-types';

const Character = ({ image, name, description }) => (
  <section>
    <img src={image} alt={name} />
  </section>
);

Character.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default Character;
