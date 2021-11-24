import Modal from 'react-modal';
import { EventEditContainer } from './styles';

interface EventEditModalProps {
  eventId: number;
  isOpen: boolean;
  onRequestClose: () => void;
}

export default function EventEditModal({
  eventId,
  isOpen,
  onRequestClose,
}: EventEditModalProps) {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <EventEditContainer>
        <h1>Event Edit Modal</h1>
      </EventEditContainer>
    </Modal>
  );
}
