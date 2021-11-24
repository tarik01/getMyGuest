import { ToogleContainer } from './styles';

export default function ToggleSwitch() {
  return (
    <ToogleContainer>
      <label htmlFor="switch" defaultChecked={false}>
        Sim/Não
        <input type="checkbox" id="switch" />
      </label>
    </ToogleContainer>
  );
}
