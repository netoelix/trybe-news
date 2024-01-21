import { useState } from 'react';
import { useFetchData } from '../utils/functions';
import Articles from './Articles';
import { FilterNav } from '../styles/StyleFilters';

function Filters() {
  const [filter, setFilter] = useState('all');

  useFetchData(filter);

  return (
    <>
      <FilterNav>
        <button
          data-testid="recent-btn"
          className={ filter === 'all'
            ? 'selected' : 'notselected' }
          onClick={ () => setFilter('all') }
        >
          Mais recentes

        </button>
        <button
          data-testid="release-btn"
          className={ filter === 'release'
            ? 'selected' : 'notselected' }
          onClick={ () => setFilter('release') }
        >
          Release

        </button>
        <button
          data-testid="news-btn"
          className={ filter === 'news'
            ? 'selected' : 'notselected' }
          onClick={ () => setFilter('news') }
        >
          Notícia

        </button>
        <button
          data-testid="favorite-page-btn"
          className={ filter === 'favorites'
            ? 'selected' : 'notselected' }
          onClick={ () => setFilter('favorites') }
        >
          Favoritos
        </button>
      </FilterNav>
      <Articles filter={ filter } />
    </>
  );
}

export default Filters;
