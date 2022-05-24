import { useEffect, useState } from 'react';
import DeleteImg from '../../assets/images/actions/delete.svg';
import { List } from './styles';
import GuestItem from '../GuestItem';
import SearchAndAddBar from '../SearchAndAddBar';
import { Checkin } from '../../types';
import { getPartyCheckins } from '../../services/useParty';

interface GuestListProps {
  // eslint-disable-next-line react/require-default-props
  partyId?: number;
}

export default function GuestList({ partyId }: GuestListProps) {
  const [checkins, setCheckins] = useState<Checkin[]>([]);

  useEffect(() => {
    if (partyId !== undefined) {
      const fetchData = async () => {
        const guestsData = await getPartyCheckins(partyId);
        setCheckins(guestsData);
        console.log('teste');
      };
      fetchData().catch(() => {
        setCheckins([]);
      });
    }
  }, [partyId]);

  return (
    <div>
      <SearchAndAddBar
        searchPlaceholder="Pesquisar Convidado"
        imageAddPlaceholder="Adicionar Convidado"
      />
      <List>
        {checkins.map(checkin => (
          <li key={checkin.id}>
            {partyId && (
              <img
                src={DeleteImg}
                alt="Remover Convidado da Lista"
                data-tip="Remover Convidado da Lista"
                className="remove-from-list"
              />
            )}
            <GuestItem guest={checkin.guest} actionButton={!partyId} />
          </li>
        ))}
      </List>
    </div>
  );
}
