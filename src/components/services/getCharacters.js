export const fetchCharacters = () => {
  return fetch('https:rickandmortyapi.com/api/character')
    .then(res => res.json())
    .then(json => json.results.map(({ name, description, image }) => ({
      name,
      description,
      image
    })));
};


