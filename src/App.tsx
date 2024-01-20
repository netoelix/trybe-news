import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import GlobalStyle from './styles/GlobalStyle';

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={ <Home /> } />
      </Routes>
    </>
  );
}

export default App;
