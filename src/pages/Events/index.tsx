import EventList from '../../components/EventList'
import PageHeader from '../../components/PageHeader'
import { Container } from './styles'

export default function Events () {
    return (
        <Container >
            <PageHeader 
                title="Meus Eventos"
                search_placeholder="Buscar Evento" 
                image_placeholder="Adicionar Evento"
            />
            <EventList />
        </Container>
    )
}