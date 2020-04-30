export const getCharacters = (page = 1) => {
  return fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
    .then(res => res.json())
    .then(json => json.results.map(({ name, status, image }) => ({
      name,
      status,
      image
    })));
};

export const getDetails = (req) => {
  return fetch(`https://rickandmortyapi.com/api/character/${req.params.id}`)
    .then(res => res.json())
    .then(json => json.results.map(({ name, status, image, species }) => ({
      name,
      status,
      image,
      species
    })));
};


