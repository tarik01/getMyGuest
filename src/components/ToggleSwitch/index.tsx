import { ToogleContainer } from './styles';

export default function ToggleSwitch () {
    return (
        <ToogleContainer>
            <input type="checkbox" id="switch"/>
            <label htmlFor="switch" defaultChecked={false}></label>
        </ToogleContainer>
    )
}