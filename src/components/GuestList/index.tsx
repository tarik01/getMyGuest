import { GuestsContainer } from './styles';
import GuestItem from '../GuestItem';

export default function GuestList () {
    return (
        <GuestsContainer>
            <li>
                <GuestItem />
            </li>
        </GuestsContainer>
    )
}