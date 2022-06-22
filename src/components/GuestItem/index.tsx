import AddImg from '../../assets/images/actions/add.svg';
import OpenImg from '../../assets/images/actions/open.svg';
import EditImg from '../../assets/images/actions/edit.svg';
import DeleteImg from '../../assets/images/actions/delete.svg';
import NoPhotoImg from '../../assets/images/icons/nophoto.png';
import { Container } from './styles';
import { Guest } from '../../types';
import { UTooltip } from '../Util';

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
              <UTooltip content="Ver Dados do Convidado">
                <img src={OpenImg} alt="Ver Dados do Convidado" />
              </UTooltip>
              <UTooltip content="Editar dados do Convidado">
                <img src={EditImg} alt="Editar dados do Convidado" />
              </UTooltip>
              <UTooltip content="Adicionar Convidado a Um Evento">
                <img src={AddImg} alt="Adicionar Convidado a Um Evento" />
              </UTooltip>
              <UTooltip content="Deletar Convidado">
                <img src={DeleteImg} alt="Deletar Convidado" />
              </UTooltip>
            </div>
          )}
        </div>
      </div>
    </Container>
  );
}
