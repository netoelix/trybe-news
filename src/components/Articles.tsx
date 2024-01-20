import { useSelector } from 'react-redux';
import { formatDistanceToNow, parse } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { ArticleContainer } from '../styles/StyleArticle';
import Favorites from './Favorites';
import { ArticlesProps, NewsData, NewsItem, State } from '../utils/Types';
import Button from './Button';

function Articles({ filter }: ArticlesProps) {
  const allNews = useSelector((state:State) => state.allNews);
  const news = useSelector((state:State) => state.news);
  const release = useSelector((state:State) => state.release);

  let desData: NewsData = [];
  let data: NewsData;
  switch (filter) {
    case 'all':
      data = allNews;
      desData = data.items;
      break;
    case 'news':
      data = news;
      desData = data.items;
      break;
    case 'release':
      data = release;
      desData = data.items;
      break;
    case 'favorites':
      return <Favorites />;
      break;
    default:
      data = [];
  }

  return (
    <ArticleContainer>
      {data.length === 0 ? <h1>Carregando</h1>
        : desData.map((item: NewsItem, index: number) => {
        // eslint-disable-next-line @typescript-eslint/naming-convention
          const { id, titulo, introducao, data_publicacao, link } = item;
          if (index === 0) return null;

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
                <Button
                  id={ id }
                  titulo={ titulo }
                  introducao={ introducao }
                  data_publicacao={ data_publicacao }
                  link={ link }
                />
              </div>
            </article>
          );
        })}
    </ArticleContainer>
  );
}

export default Articles;
