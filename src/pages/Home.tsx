import Filters from '../components/Filters';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Section from '../components/Section';
import { MainHome } from '../styles/StyleHome';
import { useFetchData } from '../utils/useFetchNews';

function Home() {
  useFetchData('all');
  return (
    <>
      <Header />
      <MainHome>
        <Section />
        <Filters />
      </MainHome>
      <Footer />
    </>
  );
}
export default Home;
