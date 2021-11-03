import { Container } from './styles';
import AddImg from '../../assets/images/actions/add.png'
import ListImg from '../../assets/images/actions/list.png'
import DeleteImg from '../../assets/images/actions/delete.png'

export default function EventItem () {
    return(
        <Container>
            <img src='https://picsum.photos/360/360' alt='title' />
            <h2>{'title'.toUpperCase()}</h2>
            <div className='action-buttons'>
                <img src={ListImg} alt='Ver Lista de Convidados' data-tip='Ver Lista de Convidados' />
                <img src={AddImg} alt='Adicionar Convidado(s)' data-tip='Adicionar Convidado(s)' />
                <img src={DeleteImg} alt='Deletar Evento' data-tip='Deletar Evento' />
            </div>
        </Container>
    )
}