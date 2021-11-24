import GuestList from '../GuestList';
import { GuestListPanelContainer } from './styles';

export default function GuestListPanel() {
  return (
    <GuestListPanelContainer>
      <h2 className="title">Lista de Convidados</h2>
      <div className="bg-primary">
        <GuestList eventId={1} />
      </div>
    </GuestListPanelContainer>
  );
}
