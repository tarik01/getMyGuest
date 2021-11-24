import { Container, Content } from './styles';
import LogoImg from '../../assets/images/logo.png';

export default function Header() {
  return (
    <header>
      <Container>
        <Content>
          <img src={LogoImg} alt="Logo" />
        </Content>
      </Container>
    </header>
  );
}
