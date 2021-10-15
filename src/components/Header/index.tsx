import { Container, Content} from './styles';
import LogoImg from '../../assets/logo.png'

export default function Header(){
    return (
        <Container>
            <Content>
                <img src={LogoImg} alt='Logo' />
            </Content>
        </Container>
    )
}