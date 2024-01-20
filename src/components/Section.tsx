import { useSelector } from 'react-redux';
import { formatDistanceToNow, parse } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { SectionContainer } from '../styles/StyleSection';

function Section() {
  const allNews = useSelector((state) => state.allNews.items);

  return (
    <SectionContainer>
      {allNews === undefined ? <h1>carregando</h1>
        : (
          <>
            <h3><span>Notícia mais recente</span></h3>
            <h2>{allNews[0].titulo}</h2>
            <p>{allNews[0].introducao}</p>
            <div>
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
          </>
        )}
    </SectionContainer>
  );
}

export default Section;
