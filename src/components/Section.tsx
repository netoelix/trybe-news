import { useSelector } from 'react-redux';
import { formatDistanceToNow, parse } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { SectionContainer } from '../styles/StyleSection';
import { StateSection } from '../utils/Types';
import Button from './Button';
import LoadingHeader from './LoadingHeader';

function Section() {
  const allNews = useSelector((state: StateSection) => state.allNews.items);

  return (
    <SectionContainer>
      {allNews === undefined ? <LoadingHeader />
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
            </div>
            <div>
              <a href={ allNews[0].link } target="_blank" rel="noopener noreferrer">
                Leia a notícia aqui
              </a>
              <Button
                id={ allNews[0].id }
                titulo={ allNews[0].titulo }
                introducao={ allNews[0].introducao }
                data_publicacao={ allNews[0].data_publicacao }
                link={ allNews[0].link }
              />
            </div>
          </>
        )}
    </SectionContainer>
  );
}

export default Section;
