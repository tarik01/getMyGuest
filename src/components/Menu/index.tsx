import { MenuList } from "./styles";
import GuestsImg from "../../assets/guests.svg"
import PartyImg from "../../assets/party.svg"
import QRCodeImg from "../../assets/checkin.svg"

export default function Menu(){
    return(
        <MenuList>
            <ul>
                <li>
                    <img src={PartyImg} alt='Meus Eventos' />
                    Meus Eventos
                </li>
                <li>
                <img src={GuestsImg} alt='Meus Convidados' />
                    Meus Convidados
                </li>
                <li>
                    <img src={QRCodeImg} alt='Check-in' />
                    Check-in
                </li>
                <li>
                    <img src={QRCodeImg} alt='Check-in' />
                    Check-in
                </li>
            </ul>
        </MenuList>
    );
}