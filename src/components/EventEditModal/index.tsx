import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { Party } from '../../types';
import { HalfCenter } from '../../util/util-styles';
import { EventEditContainer } from './styles';

interface EventEditModalProps {
  partyId: number;
  isOpen: boolean;
  onRequestClose: () => void;
}

export default function EventEditModal({
  partyId,
  isOpen,
  onRequestClose,
}: EventEditModalProps) {
  const [party, setParty] = useState<Party>();

  useEffect(() => {
    if (partyId) {
      // setParty(mockEvent);
    }
  }, [partyId]);

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <EventEditContainer>
        <h1>Event Edit Modal</h1>
        <HalfCenter>
          <div>
            <img
              src="https://picsum.photos/150/150"
              alt="Foto de Fulano de Tal"
              className="rounded-circle"
            />
          </div>
          <div className="informations">
            <input type="" />
          </div>
        </HalfCenter>
      </EventEditContainer>
    </Modal>
  );
}
