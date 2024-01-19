import Articles from '../components/Articles';
import Filters from '../components/Filters';
import Header from '../components/Header';
import Section from '../components/Section';

function Home() {
  return (
    <>
      <Header />
      <main>
        <Section />
        <Filters />
        <Articles />
      </main>
    </>
  );
}
export default Home;
