import { useState } from 'react';
import EventEditModal from '../EventEditModal';
import { MainPanel, EventInfoPanelContainer, DescriptionPanel } from './styles';

export default function EventInfoPanel() {
  const [isEventEditModalOpen, setIsEventEditModalOpen] = useState(false);

  const handleOpenEventEditModal = () => {
    setIsEventEditModalOpen(true);
  };

  const handleCloseEventEditModal = () => {
    setIsEventEditModalOpen(false);
  };

  return (
    <EventInfoPanelContainer>
      <MainPanel>
        <div>
          <img
            src="https://picsum.photos/150/150"
            alt="Foto de Fulano de Tal"
            className="rounded-circle"
          />
        </div>
        <div className="informations">
          <h2>Festa no Apê</h2>
          <div>10/10/2022 - 10:00</div>
          <div>Palmas - TO</div>
          <p>50 Convidados</p>
          <p>
            <span
              aria-hidden="true"
              onClick={() => handleOpenEventEditModal()}
              onKeyDown={() => handleOpenEventEditModal()}
            >
              Alterar
            </span>
          </p>
        </div>
      </MainPanel>
      <DescriptionPanel>
        <h2>Descrição</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s
        </p>
      </DescriptionPanel>
      <DescriptionPanel>
        <h2>Localização</h2>
        <iframe
          title="Mapa de Localização"
          src="https://maps.google.com/maps?q=2880
          %20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
          className="iframe"
        />
      </DescriptionPanel>
      <EventEditModal
        isOpen={isEventEditModalOpen}
        onRequestClose={handleCloseEventEditModal}
        eventId={1}
      />
    </EventInfoPanelContainer>
  );
}
