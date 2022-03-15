import { useEffect, useState } from 'react';
import { getParties } from '../../services/useParty';
import { Party } from '../../types';
import PartyItem from '../PartyItem';
import SearchAndAddBar from '../SearchAndAddBar';
import { List } from './styles';

export default function PartyList() {
  const [parties, setParties] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const partiesData = await getParties();
      setParties(partiesData);
    };
    // eslint-disable-next-line no-console
    fetchData().catch(console.error);
  }, []);

  return (
    <div>
      <SearchAndAddBar
        searchPlaceholder="Pesquisar Evento"
        imageAddPlaceholder="Novo Evento"
      />
      <List>
        {parties.map((party: Party) => (
          <li key={party.id}>
            <PartyItem
              id={1}
              name={party.name}
              description={party.description}
              date={party.date}
              time={party.time}
              image={party.image}
              location={party.location}
              actionButton
            />
          </li>
        ))}
      </List>
    </div>
  );
}
