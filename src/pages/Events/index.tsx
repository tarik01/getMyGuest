import EventList from '../../components/EventList'
import AddImg from '../../assets/images/actions/add.png'
import { Container } from './styles'

export default function Events () {
    return (
        <Container >
            <h1>Meus Eventos <img src={AddImg} alt='Adicionar Evento' /></h1>
            <EventList />
        </Container>
    )
}