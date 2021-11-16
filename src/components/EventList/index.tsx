import EventItem from '../EventItem';
import SearchAndAddBar from '../SearchAndAddBar';
import { List } from './styles';

export default function EventList(){
    return (
        <div>
            <SearchAndAddBar
                searchPlaceholder="Pesquisar Evento"
                imageAddPlaceholder="Adicionar"
            />
            <List>
                <li>
                    <EventItem
                        id={1}
                        title='Minha Festa'
                        description='Festa lá em casa'
                        date={new Date(2021, 10, 10)}
                        cover='https://picsum.photos/360/360'
                        location='Palmas'
                        actionButton={true}
                    />
                 </li>
            </List>
        </div>
    )
}