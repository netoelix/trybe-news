import { useSelector } from 'react-redux';

function Section() {
  // const news = useSelector((state) => state.newsReducer.items);

  return (
    <section>
      {/* {news === undefined ? <h1>carregando</h1>
        : (
          <div>
            <p><span>Notícia mais recente</span></p>
            <h3>{news[0].titulo}</h3>
            <p>{news[0].introducao}</p>
            <p>{news[0].data_publicacao}</p>
            <a href={ news[0].link } target="_blank" rel="noopener noreferrer">
              Leia a notícia aqui
            </a>
          </div>
        )} */}
    </section>
  );
}

export default Section;
