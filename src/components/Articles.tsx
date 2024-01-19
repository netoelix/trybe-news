import { useSelector } from 'react-redux';
import { formatDistanceToNow, parse } from 'date-fns';
import { ptBR } from 'date-fns/locale';

function Articles({ filter }) {
  const allNews = useSelector((state) => state.allNews);
  const news = useSelector((state) => state.news);
  const release = useSelector((state) => state.release);

  let data;
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
    <section>
      {data.length === 0 ? <h1>carregando</h1>
        : data.items.map(({ id, titulo, introducao, data_publicacao, link }, index) => {
          if (index === 0) return null;
          return (
            <article key={ id }>
              <h3>{titulo}</h3>
              <p>{introducao}</p>
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
              <a href={ link }>Leia a notícia aqui</a>
            </article>
          );
        })}
    </section>
  );
}

export default Articles;
