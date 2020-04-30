import React, { useState, useEffect } from 'react';
import { getCharacters } from '../getCharacters.js';
import Character from '../container/CharacterDetails.jsx';

const CharacterList = () => {

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharacters()
      .then(setCharacters => Character(setCharacters));
   

  }, []);

  return (
    <>
      {characters.map (char => 
        <div key={char.id} className="charContainer">
          <h2>{char.name}</h2>
          <img className="charImage" 
            src={char.image} 
            alt={''}
          />           
        </div>
      )
      }
    </>
  );
};
export default CharacterList;

// export default function MyComp() {
//   const [newCharacters, setCharacters] = useState([]);

//   useEffect(() => {
//     getCharacters()
//       .then(newCharacters => setCharacters(newCharacters));
//   }, []);

//   return (
//     <>
//       <ul>
//         {characters.map(character => (
//           <li key={character.id}>
//             <p>{character.name}</p>
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// }

