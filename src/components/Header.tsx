import { HeaderContainer } from '../styles/StyleHeader';
import trybe from '../assets/trybe.svg';

function Header() {
  return (
    <HeaderContainer>
      <img src={ trybe } alt="Trybe logo" />
      <h1>TRYBE NEWS</h1>
    </HeaderContainer>
  );
}
export default Header;
