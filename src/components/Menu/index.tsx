import { MenuList } from "./styles";
import GuestsImg from "../../assets/guests.svg"
import PartyImg from "../../assets/party.svg"
import QRCodeImg from "../../assets/qrcode.svg"

export default function Menu(){
    return(
        <MenuList>
            <ul>
                <li>
                    <img src={PartyImg} alt='Meus Eventos' />
                    Meus Eventos
                </li>
                <li>
                <img src={GuestsImg} alt='Meus Eventos' />
                    Meus Convidados
                </li>
                <li>
                    <img src={QRCodeImg} alt='Meus Eventos' />
                    Ler QRCode
                </li>
            </ul>
        </MenuList>
    );
}