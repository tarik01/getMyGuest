import { List } from './styles';
import GuestItem from '../GuestItem';
import SearchAndAddBar from '../SearchAndAddBar';

export default function GuestList () {
    return (
        <div>
            <SearchAndAddBar
                searchPlaceholder="Pesquisar Convidado"
                imageAddPlaceholder="Adicionar Convidado"
            />
            <List>
                <li>
                    <GuestItem 
                        name="Fulano da Silva"
                        cpf="000.000.000-00"
                        actionButton={true}
                    />
                </li>
            </List>
        </div>
    )
}