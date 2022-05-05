import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getParty } from '../../services/useParty';
import EventEditModal from '../EventEditModal';
import { MainPanel, PartyInfoPanelContainer, DescriptionPanel } from './styles';
import { Party } from '../../types';

export default function PartyInfoPanel() {
  const [isEventEditModalOpen, setIsEventEditModalOpen] = useState(false);
  const [party, setParty] = useState<Party>();
  const { id } = useParams();

  const handleOpenEventEditModal = () => {
    setIsEventEditModalOpen(true);
  };

  const handleCloseEventEditModal = () => {
    setIsEventEditModalOpen(false);
  };

  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        const partyData = await getParty(id);
        setParty(partyData);
      };
      fetchData().catch(() => {
        setParty(undefined);
      });
    }
  }, [id]);

  return (
    <div>
      {id && party && (
        <PartyInfoPanelContainer>
          <MainPanel>
            <div>
              <img
                src="https://picsum.photos/150/150"
                alt="Foto de Fulano de Tal"
                className="rounded-circle"
              />
            </div>
            <div className="informations">
              <h2>{party.name}</h2>
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
            <p />
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
            partyId={1}
          />
        </PartyInfoPanelContainer>
      )}
    </div>
  );
}
