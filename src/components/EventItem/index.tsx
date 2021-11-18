import { EventItemContainer } from './styles';
import OpenImg from '../../assets/images/actions/open.svg'
import AddImg from '../../assets/images/actions/add-guest.svg'
import ListImg from '../../assets/images/actions/list.svg'
import DeleteImg from '../../assets/images/actions/delete.svg'
import { Link } from 'react-router-dom';

interface EventItemProps {
    id?: number;
    title: string;
    date: Date;
    cover?: string;
    description?: string;
    location?: string;
    actionButton?: boolean;
}

export default function EventItem ({id, title, date, cover, description, location, actionButton=false}: EventItemProps) {
    return(
        <EventItemContainer>
            <div className="picture">
                <img src='https://picsum.photos/360/360' alt='title' />
            </div>
            <div className="informations">
                <h2>{title}</h2>
                <p>{date.toLocaleDateString('pt-br')} - {date.toLocaleTimeString('pt-br', {hour: '2-digit', minute:'2-digit'})}</p>
                <p>{location}</p>
                {actionButton && 
                <div className='action-buttons'>
                    <Link to="/event"><img src={OpenImg} alt='Ver Evento' data-tip='Ver Evento' /></Link>
                    <Link to="/event"><img src={ListImg} alt='Ver Lista de Convidados' data-tip='Ver Lista de Convidados' /></Link>
                    <Link to="/event"><img src={AddImg} alt='Adicionar Convidado(s)' data-tip='Adicionar Convidado(s)' /></Link>
                    <Link to="/event"><img src={DeleteImg} alt='Deletar Evento' data-tip='Deletar Evento' /></Link>
                </div>
                }
            </div>
            
        </EventItemContainer>
    )
}