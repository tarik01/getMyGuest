import AddImg from '../../assets/images/actions/add.svg'
import OpenImg from '../../assets/images/actions/open.svg'
import EditImg from '../../assets/images/actions/edit.svg'
import DeleteImg from '../../assets/images/actions/delete.svg'
import { Container } from './styles';


export default function GuestItem(){
    return(
        <Container>
            <div className="picture"><img src="https://picsum.photos/120/120" alt="imagem de exemplo"/></div>
                <div className="informations">
                    <div>
                        <h2>Fulano de Tal</h2>
                        <p>CPF: 000.000.000-00</p>
                        <div className='action-buttons'>
                            <img src={OpenImg} alt='Ver Dados do Convidado' data-tip='Ver Dados do Convidado' />
                            <img src={EditImg} alt='Editar dados do Convidado' data-tip='Editar dados do Convidado' />
                            <img src={AddImg} alt='Adicionar Convidado a Um Evento' data-tip='Adicionar Convidado a Um Evento' />
                            <img src={DeleteImg} alt='Deletar Convidado' data-tip='Deletar Convidado' />
                        </div>
                    </div>    
                </div>
        </Container>
    );
}