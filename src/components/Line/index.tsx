import { Container } from './styles';
import LineImg from '../../assets/images/line.png';

export default function Line () {
    return (
        <Container>
            <img src={LineImg} alt='linha de divisão'/>
        </Container>
    )
}