import { useSelector } from 'react-redux';
import { formatDistanceToNow, parse } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { ArticleContainer } from '../styles/StyleArticle';

interface ArticlesProps {
  filter: string;
}
type NewsItem = {
  id: number;
  titulo: string;
  introducao: string;
  data_publicacao: string;
  link: string;
  imagens: string;
};
type NewsData = NewsItem[];

type State = {
  allNews: NewsItem[];
  news: NewsItem[];
  release: NewsItem[];
};

function Articles({ filter }: ArticlesProps) {
  const allNews = useSelector((state:State) => state.allNews);
  const news = useSelector((state:State) => state.news);
  const release = useSelector((state:State) => state.release);

  let data: NewsData;
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
    default:
      data = [];
  }

  return (
    <ArticleContainer>
      {data.length === 0 ? <h1>carregando</h1>
        : data.items.map((item: NewsItem, index: number) => {
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
            </article>
          );
        })}
    </ArticleContainer>
  );
}

export default Articles;
