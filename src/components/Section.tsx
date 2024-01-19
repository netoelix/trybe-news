import { useSelector } from 'react-redux';
import { formatDistanceToNow, parse } from 'date-fns';
import { ptBR } from 'date-fns/locale';

function Section() {
  const allNews = useSelector((state) => state.allNews.items);

  return (
    <section>
      {allNews === undefined ? <h1>carregando</h1>
        : (
          <div>
            <p><span>Notícia mais recente</span></p>
            <h3>{allNews[0].titulo}</h3>
            <p>{allNews[0].introducao}</p>
            <p>
              Publicado
              {' '}
              {
            formatDistanceToNow(
              parse(allNews[0].data_publicacao, 'dd/MM/yyyy HH:mm:ss', new Date()),
              { addSuffix: true, locale: ptBR },
            )
}

            </p>
            <a href={ allNews[0].link } target="_blank" rel="noopener noreferrer">
              Leia a notícia aqui
            </a>
          </div>
        )}
    </section>
  );
}

export default Section;
