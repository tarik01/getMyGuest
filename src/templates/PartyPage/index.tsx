import { PageContainer } from '../styles';
import { PartyContainer } from './styles';
import PageHeader from '../../components/PageHeader';
import PartyInfoPanel from '../../components/PartyInfoPanel';
import GuestListPanel from '../../components/GuestListPanel';

export default function PartyPage() {
  return (
    <PageContainer>
      <PageHeader title="Dados do Evento" />
      <PartyContainer>
        <PartyInfoPanel />
        <GuestListPanel />
      </PartyContainer>
    </PageContainer>
  );
}
