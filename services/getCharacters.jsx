export const getCharacters = (page = 1) => {
  return fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
    .then(res => res.json())
    .then(json => json.results.map(({ name, status, image }) => ({
      name,
      status,
      image
    })));
};

