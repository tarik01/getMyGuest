import EventList from '../../components/EventList'
import PageHeader from '../../components/PageHeader'
import { PageContainer } from '../styles'

export default function Events () {
    return (
        <PageContainer >
            <PageHeader 
                title="Meus Eventos"
                search_placeholder="Buscar Evento" 
                image_placeholder="Adicionar Evento"
            />
            <EventList />
        </PageContainer>
    )
}