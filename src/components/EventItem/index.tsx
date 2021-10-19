import { Container } from './styles';
import AddImg from '../../assets/images/actions/add.png'
import ListImg from '../../assets/images/actions/list.png'
import DeleteImg from '../../assets/images/actions/delete.png'

export default function EventItem () {
    return(
        <Container>
            <img src='https://www.viewhotels.jp/asakusa-annex/wp-content/uploads/sites/6/2020/03/test-img-300x196.jpg' alt='title' />
            <p>{'title'.toUpperCase()}</p>
            <div className='action-buttons'>
                <img src={ListImg} alt='Ver Lista de Convidados' />
                <img src={AddImg} alt='Adicionar Convidado(s)' />
                <img src={DeleteImg} alt='Deletar Evento' />
            </div>
        </Container>
    )
}