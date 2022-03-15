import EventList from '../../components/PartyList';
import PageHeader from '../../components/PageHeader';
import { PageContainer } from '../styles';

export default function Parties() {
  return (
    <PageContainer>
      <PageHeader title="Meus Eventos" />
      <EventList />
    </PageContainer>
  );
}
