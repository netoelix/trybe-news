import { formatDistanceToNow, parse } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { useEffect, useState } from 'react';
import { ArticleContainer } from '../styles/StyleArticle';
import { handleFavoriteClick } from '../utils/functions';
import { NewsItem } from '../utils/Types';
import iconFavorite from '../assets/Favorite.svg';
import iconNotFavorite from '../assets/notFavorite.svg';
import { FavoriteContainer } from '../styles/StyleFavorites';

function Favorites() {
  const [favorites, setFavorites] = useState<NewsItem[]>([]);
  const [storageChange, setStorageChange] = useState(false);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('items') || '[]');
    setFavorites(data);
  }, [storageChange]);

  const handleFavoriteClickWithUpdate = (item: NewsItem) => {
    handleFavoriteClick(item);
    setStorageChange(!storageChange);
  };

  return (
    <ArticleContainer>
      {favorites.length === 0
        ? (
          <FavoriteContainer>
            <h1>Nenhum favorito encontrado</h1>
          </FavoriteContainer>)
        : favorites.map((item: NewsItem) => {
        // eslint-disable-next-line @typescript-eslint/naming-convention
          const { id, titulo, introducao, data_publicacao, link } = item;
          const isFavorite = favorites.some(
            (favoriteItem: NewsItem) => favoriteItem.id === item.id,
          );
          return (
            <article key={ id }>
              <h3>{titulo}</h3>
              <p>{introducao}</p>
              <div>
                <p>
                  Publicado
                  {' '}
                  {
                  formatDistanceToNow(
                    parse(data_publicacao, 'dd/MM/yyyy HH:mm:ss', new Date()),
                    { addSuffix: true, locale: ptBR },
                  )
                }
                </p>
                <a href={ link } target="_blank" rel="noreferrer">Leia a notícia aqui</a>
              </div>
              <div>
                <button
                  data-testid="favorite-btn"
                  onClick={ () => handleFavoriteClickWithUpdate(item) }
                >
                  <img
                    src={ isFavorite ? iconFavorite
                      : iconNotFavorite }
                    alt="Favorito"
                  />
                </button>
              </div>
            </article>
          );
        })}
    </ArticleContainer>
  );
}

export default Favorites;
