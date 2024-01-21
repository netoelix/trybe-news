import { useEffect, useState } from 'react';
import iconFavorite from '../assets/Favorite.svg';
import iconNotFavorite from '../assets/notFavorite.svg';
import { NewsItem } from '../utils/Types';
import { handleFavoriteClick } from '../utils/functions';

function Button(item: NewsItem) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('items') || '[]');
    setIsFavorite(favorites.some(
      (favoriteItem: NewsItem) => favoriteItem.id === item.id,
    ));
  }, [item]);

  const handleClick = () => {
    handleFavoriteClick(item);
    const favorites = JSON.parse(localStorage.getItem('items') || '[]');
    setIsFavorite(favorites.some(
      (favoriteItem: NewsItem) => favoriteItem.id === item.id,
    ));
  };

  return (
    <button
      data-testid="favorite-btn"
      onClick={ handleClick }
    >
      <img
        src={ isFavorite ? iconFavorite
          : iconNotFavorite }
        alt="Favorito"
      />
    </button>
  );
}

export default Button;
