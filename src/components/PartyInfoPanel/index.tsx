import { useEffect, useState } from 'react';
import { getParty } from '../../services/useParty';
import EventEditModal from '../EventEditModal';
import { MainPanel, PartyInfoPanelContainer, DescriptionPanel } from './styles';
import { Guest, Party } from '../../types';

export default function PartyInfoPanel({ partyId }: { partyId: number }) {
  const [isEventEditModalOpen, setIsEventEditModalOpen] = useState(false);
  const [party, setParty] = useState<Party>();
  const [guests, setGuests] = useState<Guest[]>([]);

  const handleOpenEventEditModal = () => {
    setIsEventEditModalOpen(true);
  };

  const handleCloseEventEditModal = () => {
    setIsEventEditModalOpen(false);
  };

  useEffect(() => {
    if (partyId) {
      const fetchDataParty = async () => {
        const partyData = await getParty(partyId);
        setParty(partyData);
      };
      fetchDataParty().catch(() => {
        setParty(undefined);
      });
    }
  }, [partyId]);

  return (
    <div>
      {partyId && party && (
        <PartyInfoPanelContainer>
          <MainPanel>
            <div>
              <img
                src={party.imageUrl}
                alt={`Imagem do evento ${party.name}`}
                className="rounded-circle"
              />
            </div>
            <div className="informations">
              <h2>{party.name}</h2>
              <div>
                {new Date(party.date).toLocaleDateString('pt-br')} -{' '}
                {party.time}
              </div>
              <div>{party.location}</div>
              <p>{party.numberOfGuests} Convidado(s)</p>
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
            <p>{party.description}</p>
          </DescriptionPanel>
          {/* <DescriptionPanel>
            <h2>Localização</h2>
            <iframe
              title="Mapa de Localização"
              src="https://maps.google.com/maps?q=2880
              %20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="iframe"
            />
          </DescriptionPanel> */}
          <EventEditModal
            isOpen={isEventEditModalOpen}
            onRequestClose={handleCloseEventEditModal}
            partyId={party.id}
          />
        </PartyInfoPanelContainer>
      )}
    </div>
  );
}
