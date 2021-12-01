import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { Guest, Event } from '../../types';
import { HalfCenter } from '../../util/util-styles';
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
  const [event, setEvent] = useState<Event>();

  useEffect(() => {
    if (eventId) {
      const mockEvent: Event = {
        id: eventId,
        title: 'React Meetup',
        description: 'React Meetup',
        date: new Date('2020-06-01'),
        location: 'São Paulo',
        cover: 'https://picsum.photos/200/300',
        guests: [
          {
            id: 1,
            name: 'Guilherme',
            email: '',
          },
          {
            id: 2,
            name: 'Junior',
            email: '',
          },
        ],
      };
      setEvent(mockEvent);
    }
  }, [eventId]);

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
