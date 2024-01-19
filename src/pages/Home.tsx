import Articles from '../components/Articles';
import Filters from '../components/Filters';
import Header from '../components/Header';
import Section from '../components/Section';
import { useFetchData } from '../utils/useFetchNews';

function Home() {
  useFetchData('all');
  return (
    <>
      <Header />
      <main>
        <Section />
        <Filters />
      </main>
    </>
  );
}
export default Home;
