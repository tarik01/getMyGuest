import { useEffect, useState } from 'react';
import { getParties, searchParty } from '../../services/useParty';
import { Party } from '../../types';
import Item404 from '../Item404';
import PartyItem from '../PartyItem';
import SearchAndAddBar from '../SearchAndAddBar';
import { List } from './styles';

export default function PartyList() {
  const [parties, setParties] = useState([]);
  const [search, setSearch] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const partiesData = await getParties();
      setParties(partiesData);
    };
    // eslint-disable-next-line no-console
    fetchData().catch(() => {
      setError('Não foi possível obter os dados, tente novamente!');
    });
  }, []);

  useEffect(() => {
    if (search !== '') {
      const fetchData = async () => {
        const partiesData = await searchParty(search);
        setParties(partiesData);
      };
      fetchData().catch(err => {
        setError(err.message);
      });
    }
  }, [search]);

  return (
    <div>
      <SearchAndAddBar
        searchPlaceholder="Pesquisar Evento"
        imageAddPlaceholder="Novo Evento"
        searchState={setSearch}
      />
      {error !== '' && (
        <Item404>
          <h1>{error}</h1>
        </Item404>
      )}
      {error === '' && parties.length > 0 && (
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
      )}
    </div>
  );
}
