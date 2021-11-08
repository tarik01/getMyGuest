import { Container } from './styles';
import AddImg from '../../assets/images/actions/add-guest.svg'
import ListImg from '../../assets/images/actions/list.svg'
import DeleteImg from '../../assets/images/actions/delete.svg'

export default function EventItem () {
    return(
        <Container>
            <div className="picture">
                <img src='https://picsum.photos/360/360' alt='title' />
            </div>
            <div className="informations">
                <h2>Minha Festa</h2>
                <p>10/05/2022 | Convidados: 10</p>
                <div className='action-buttons'>
                    <img src={ListImg} alt='Ver Lista de Convidados' data-tip='Ver Lista de Convidados' />
                    <img src={AddImg} alt='Adicionar Convidado(s)' data-tip='Adicionar Convidado(s)' />
                    <img src={DeleteImg} alt='Deletar Evento' data-tip='Deletar Evento' />
                </div>
            </div>
            
        </Container>
    )
}