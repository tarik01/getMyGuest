import DeleteImg from '../../assets/images/actions/delete.svg'
import { List } from './styles';
import GuestItem from '../GuestItem';
import SearchAndAddBar from '../SearchAndAddBar';

interface SearchAndAddBarProps {
    eventId?: number;
}

export default function GuestList ({ eventId }: SearchAndAddBarProps) {
    return (
        <div>
            <SearchAndAddBar
                searchPlaceholder="Pesquisar Convidado"
                imageAddPlaceholder="Adicionar Convidado"
            />
            <List>
                <li>
                    {eventId &&
                    <img src={DeleteImg} alt="Remover Convidado da Lista" data-tip="Remover Convidado da Lista" className="remove-from-list"/>}
                    <GuestItem 
                        name="Fulano da Silva"
                        cpf="000.000.000-00"
                        actionButton={eventId ? false : true}
                    />
                </li>
            </List>
        </div>
    )
}