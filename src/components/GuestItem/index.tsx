import AddImg from '../../assets/images/actions/add.svg';
import OpenImg from '../../assets/images/actions/open.svg';
import EditImg from '../../assets/images/actions/edit.svg';
import DeleteImg from '../../assets/images/actions/delete.svg';
import NoPhotoImg from '../../assets/images/icons/nophoto.png';
import { Container } from './styles';

interface Guest {
  id?: number;
  name: string;
  email?: string;
  phone?: string;
  isGoing?: boolean;
  cover?: string;
  cpf?: string;
  instagram?: string;
  actionButton?: boolean;
}

export default function GuestItem(guest: Guest) {
  const {
    id,
    name,
    email,
    phone,
    isGoing,
    cover,
    cpf,
    instagram,
    actionButton,
  } = guest;

  return (
    <Container>
      <div className="picture">
        <img
          src={cover || NoPhotoImg}
          alt={`Foto de ${name}`}
          className="cover"
        />
      </div>
      <div className="informations">
        <div>
          <h2>{name}</h2>
          <p>CPF: {cpf}</p>
          {actionButton && (
            <div className="action-buttons">
              <img
                src={OpenImg}
                alt="Ver Dados do Convidado"
                data-tip="Ver Dados do Convidado"
              />
              <img
                src={EditImg}
                alt="Editar dados do Convidado"
                data-tip="Editar dados do Convidado"
              />
              <img
                src={AddImg}
                alt="Adicionar Convidado a Um Evento"
                data-tip="Adicionar Convidado a Um Evento"
              />
              <img
                src={DeleteImg}
                alt="Deletar Convidado"
                data-tip="Deletar Convidado"
              />
            </div>
          )}
        </div>
      </div>
    </Container>
  );
}
