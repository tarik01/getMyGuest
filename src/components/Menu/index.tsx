import { MenuList } from "./styles";
import GuestsImg from "../../assets/images/icons/guests.svg"
import PartyImg from "../../assets/images/icons/party.svg"
import CheckinImg from "../../assets/images/icons/checkin.svg"
import QRCodeImg from "../../assets/images/icons/qrcode.svg"
import MyAccountImg from "../../assets/images/icons/myaccount.svg"
import { Link } from "react-router-dom";

export default function Menu(){
    return(
        <MenuList>
            <ul>
                <li>
                    <Link to="/events">
                        <img src={PartyImg} alt='Meus Eventos' />
                        Meus Eventos
                    </Link>
                </li>
                <li>
                    <Link to="/guests">
                        <img src={GuestsImg} alt='Convidados' />
                        Convidados
                    </Link>
                </li>
                <li>
                    <Link to="/checkin">
                        <img src={CheckinImg} alt='Check-in' />
                        Check-in
                    </Link>
                </li>
                <li>
                    <img src={QRCodeImg} alt='Gerar QRCode' />
                    Gerar QRCode
                </li>
                <li className="my-account">
                    <img src={MyAccountImg} alt='Minha Conta' />
                    Minha Conta
                </li>
            </ul>
        </MenuList>
    );
}