import { useSelector } from 'react-redux';
import { formatDistanceToNow, parse } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { ArticleContainer } from '../styles/StyleArticle';
import Favorites from './Favorites';
import { ArticlesProps, State } from '../utils/Types';
import Button from './Button';

function Articles({ filter }: ArticlesProps) {
  const allNews = useSelector((state:State) => state.allNews);
  const news = useSelector((state:State) => state.news);
  const release = useSelector((state:State) => state.release);

  let data: any = [];
  switch (filter) {
    case 'all':
      data = allNews;
      break;
    case 'news':
      data = news;
      break;
    case 'release':
      data = release;
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
        : data.items.map((item: any, index: number) => {
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
              </div>
              <div>
                <a href={ link } target="_blank" rel="noreferrer">Leia a notícia aqui</a>
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
