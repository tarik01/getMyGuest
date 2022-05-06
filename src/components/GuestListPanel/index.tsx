import GuestList from '../GuestList';
import { GuestListPanelContainer } from './styles';

export default function GuestListPanel({ partyId = 0 }: { partyId: number }) {
  return (
    <GuestListPanelContainer>
      <h2 className="title">Lista de Convidados</h2>
      <div className="bg-primary">
        <GuestList partyId={partyId} />
      </div>
    </GuestListPanelContainer>
  );
}
