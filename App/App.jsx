import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import CharacterList from '../container/Characterlist.jsx';
import CharacterDetailPage from '../container/CharacterDetails.jsx';

console.log(CharacterList);
export default function App() {
  return ( 
    <div>
      
      <header>
        <h1>Rick and Morty</h1>
      </header>
      <Router>
        <Switch>
          <Route exact path="/" component={CharacterList} />
          <Route exact path="/:id" component={CharacterDetailPage} />
        </Switch>
      </Router>
    </div>
  );
} 
