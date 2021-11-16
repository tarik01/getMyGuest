import { PageContainer } from '../styles';
import { EventContainer } from './styles';
import PageHeader from '../../components/PageHeader';
import EventInfoPanel from '../../components/EventInfoPanel';
import GuestListPanel from '../../components/GuestListPanel';

export default function EventPage () {
    return (
        <PageContainer >
            <PageHeader 
              title="Dados do Evento"
            />
            <EventContainer>
                <EventInfoPanel />
                <GuestListPanel />
            </EventContainer>
        </PageContainer>
    )
  }