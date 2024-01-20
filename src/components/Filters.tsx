import { useState } from 'react';
import { useFetchData } from '../utils/useFetchNews';
import Articles from './Articles';
import { FilterNav } from '../styles/StyleFilters';

function Filters() {
  const [filter, setFilter] = useState('all');

  useFetchData(filter);

  return (
    <>
      <FilterNav>
        <button
          className={ filter === 'all'
            ? 'selected' : 'notselected' }
          onClick={ () => setFilter('all') }
        >
          Mais recentes

        </button>
        <button
          className={ filter === 'release'
            ? 'selected' : 'notselected' }
          onClick={ () => setFilter('release') }
        >
          Release

        </button>
        <button
          className={ filter === 'news'
            ? 'selected' : 'notselected' }
          onClick={ () => setFilter('news') }
        >
          Notícia

        </button>
      </FilterNav>
      <Articles filter={ filter } />
    </>
  );
}

export default Filters;
