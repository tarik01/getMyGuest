import { Link } from 'react-router-dom';
import { MenuList } from './styles';
import GuestsImg from '../../assets/images/icons/guests.svg';
import PartyImg from '../../assets/images/icons/party.svg';
import CheckinImg from '../../assets/images/icons/checkin.svg';
import QRCodeImg from '../../assets/images/icons/qrcode.svg';
import MyAccountImg from '../../assets/images/icons/myaccount.svg';
import LogoutImg from '../../assets/images/icons/logout.svg';

export default function Menu() {
  return (
    <MenuList>
      <ul>
        <li>
          <Link to="/parties">
            <img src={PartyImg} alt="Meus Eventos" />
            Meus Eventos
          </Link>
        </li>
        <li>
          <Link to="/guests">
            <img src={GuestsImg} alt="Convidados" />
            Convidados
          </Link>
        </li>
        <li>
          <Link to="/checkin">
            <img src={CheckinImg} alt="Check-in" />
            Check-in
          </Link>
        </li>
        <li>
          <Link to="/qrcode">
            <img src={QRCodeImg} alt="Gerar QRCode" />
            Gerar QRCode
          </Link>
        </li>
        <li className="my-account">
          <Link to="/myaccount">
            <img src={MyAccountImg} alt="Minha Conta" />
            Minha Conta
          </Link>
        </li>
        <li className="logout">
          <Link to="/logout">
            <img src={LogoutImg} alt="Logout" />
            Sair
          </Link>
        </li>
      </ul>
    </MenuList>
  );
}
