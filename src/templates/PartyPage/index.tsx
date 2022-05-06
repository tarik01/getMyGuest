import { useParams } from 'react-router-dom';
import { PageContainer } from '../styles';
import { PartyContainer } from './styles';
import PageHeader from '../../components/PageHeader';
import PartyInfoPanel from '../../components/PartyInfoPanel';
import GuestListPanel from '../../components/GuestListPanel';

export default function PartyPage() {
  const { id } = useParams();

  return (
    <PageContainer>
      <PageHeader title="Dados do Evento" />
      {id && (
        <PartyContainer>
          <PartyInfoPanel partyId={Number(id)} />
          <GuestListPanel partyId={Number(id)} />
        </PartyContainer>
      )}
    </PageContainer>
  );
}
