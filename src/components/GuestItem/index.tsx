import AddImg from '../../assets/images/actions/add.svg';
import OpenImg from '../../assets/images/actions/open.svg';
import EditImg from '../../assets/images/actions/edit.svg';
import DeleteImg from '../../assets/images/actions/delete.svg';
import NoPhotoImg from '../../assets/images/icons/nophoto.png';
import { Container } from './styles';
import { Guest } from '../../types';

interface GuestItemProps {
  guest: Guest;
  actionButton?: boolean;
}

export default function GuestItem(guestItem: GuestItemProps) {
  const { guest, actionButton } = guestItem;

  return (
    <Container>
      <div className="picture">
        <img
          src={guest.cover || NoPhotoImg}
          alt={`Foto de ${guest.name}`}
          className="cover"
        />
      </div>
      <div className="informations">
        <div>
          <h2>{guest.name}</h2>
          <p>E-mail: {guest.email}</p>
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
