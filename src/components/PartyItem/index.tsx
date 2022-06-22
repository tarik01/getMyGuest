import { Link, matchPath } from 'react-router-dom';
import { PartyItemContainer } from './styles';
import OpenImg from '../../assets/images/actions/open.svg';
import AddImg from '../../assets/images/actions/add-guest.svg';
import ListImg from '../../assets/images/actions/list.svg';
import DeleteImg from '../../assets/images/actions/delete.svg';
import NoPhotoImg from '../../assets/images/icons/nophoto.png';
import { Party } from '../../types';
import { UTooltip } from '../Util';

export default function PartyItem(party: Party) {
  const { id, name, date, time, location, imageUrl, actionButton } = party;

  const formatedDate = new Date(date).toLocaleDateString('pt-BR');
  const formatedTime = time.slice(0, 5);

  return (
    <PartyItemContainer>
      <div className="picture">
        <img src={imageUrl || NoPhotoImg} alt="title" />
      </div>
      <div className="informations">
        <h2>{name}</h2>
        <p>
          {formatedDate}
          {time && ` - ${formatedTime}`}
        </p>
        <p>{location}</p>
        {actionButton && (
          <div className="action-buttons">
            <Link to={`/parties/${id}`}>
              <UTooltip content="Ver Evento">
                <img src={OpenImg} alt="Ver Evento" />
              </UTooltip>
            </Link>
            <Link to={`/event${{ id }}`}>
              <UTooltip content="Ver Lista de Convidados">
                <img src={ListImg} alt="Ver Lista de Convidados" />
              </UTooltip>
            </Link>
            <Link to="/event">
              <UTooltip content="Adicionar Convidado(s)">
                <img src={AddImg} alt="Adicionar Convidado(s)" />
              </UTooltip>
            </Link>
            <Link to="/event">
              <UTooltip content="Deletar Evento">
                <img src={DeleteImg} alt="Deletar Evento" />
              </UTooltip>
            </Link>
          </div>
        )}
      </div>
    </PartyItemContainer>
  );
}
