import { formatDistanceToNow, parse } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { ArticleContainer } from '../styles/StyleArticle';
import { handleFavoriteClick } from '../utils/functions';
import { NewsItem } from '../utils/Types';

function Favorites() {
  const data = JSON.parse(localStorage.getItem('items') || '[]');
  return (
    <ArticleContainer>
      {data.length === 0 ? <h1>Nenhum favorito encontrado</h1>
        : data.map((item: NewsItem) => {
        // eslint-disable-next-line @typescript-eslint/naming-convention
          const { id, titulo, introducao, data_publicacao, link } = item;
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
                <button onClick={ () => handleFavoriteClick(item) }>Favoritar</button>
              </div>
            </article>
          );
        })}
    </ArticleContainer>
  );
}

export default Favorites;
