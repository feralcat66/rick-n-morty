import React from 'react';
import PropType from 'prop-types';

const CharacterDetail = ({ name, status, species, image }) => (
  <>
    <h1>{name}</h1>
    <img src={image} />
    <p>{status}</p>
    <p>{species}</p>
  </>
);

CharacterDetail.propTypes = {
  name: PropType.string.isRequired,
  status: PropType.string.isRequired,
  species: PropType.string.isRequired,
  image: PropType.string.isRequired,
};

export default CharacterDetail;
