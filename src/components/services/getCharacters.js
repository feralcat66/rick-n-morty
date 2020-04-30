export const fetchCharacters = (page = 1) => {
  return fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
    .then(res => res.json())
    .then(json => json.results.map(({ name, description, image }) => ({
      name,
      description,
      image
    })));
};

