import GuestList from '../GuestList';
import { Container } from './styles';

export default function GuestListPanel() {
    return(
        <Container>
            <h2>Lista de Convidados</h2>
            <GuestList />
        </Container>
    )
}