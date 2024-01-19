import { useState } from 'react';
import { useFetchData } from '../utils/useFetchNews';
import Articles from './Articles';

function Filters() {
  const [filter, setFilter] = useState('all');

  useFetchData(filter);

  return (
    <>
      <nav>
        <button onClick={ () => setFilter('all') }>Mais recentes</button>
        <button onClick={ () => setFilter('release') }>Release</button>
        <button onClick={ () => setFilter('news') }>Notícia</button>
      </nav>
      <Articles filter={ filter } />
    </>
  );
}

export default Filters;
