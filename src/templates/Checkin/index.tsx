import ConfirmImg from '../../assets/images/actions/confirm.svg';
import EditImg from '../../assets/images/actions/edit.svg';

import PageHeader from '../../components/PageHeader';
import { PageContainer } from '../styles';
import { CheckinContainer } from './styles';

import PartyItem from '../../components/PartyItem';
import GuestItem from '../../components/GuestItem';
import ToggleSwitch from '../../components/ToggleSwitch';
import { UTooltip } from '../../components/Util';

export default function Checkin() {
  return (
    <PageContainer>
      <PageHeader title="Check-In" />
      <CheckinContainer>
        <section>
          <div className="section">
            <div className="section-header">
              <h2>Check-In Rápido</h2>
            </div>
            <div className="section-content">
              <div className="content-inside">
                <input type="text" placeholder="Número do Check-In" />
                <UTooltip content="Confirmar Check-In">
                  <img src={ConfirmImg} alt="Confirmar Check-In" />
                </UTooltip>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="section">
            <div className="section-header">
              <h2>Buscar</h2>
            </div>
            <div className="section-content selected">
              <PartyItem
                id={1}
                name="Minha Festa"
                description="Festa lá em casa"
                date={new Date()}
                time=""
                imageUrl="https://picsum.photos/360/360"
                location="Palmas"
              />
              <span>
                <UTooltip content="Alterar Evento">
                  <img
                    src={EditImg}
                    alt="Alterar Evento"
                    className="icon-big"
                  />
                </UTooltip>
              </span>
              {/* <button id="select_event">Selecionar Evento</button> */}
            </div>
            <div className="section-content selected">
              {/* <GuestItem guest="none" /> */}
              <span>
                <UTooltip content="Alterar Convidado">
                  <img
                    src={EditImg}
                    alt="Alterar Convidado"
                    className="icon-big"
                  />
                </UTooltip>
              </span>
              {/* <button id="select_guest">Selecionar Convidado</button> */}
            </div>
            <div className="section-content">
              <div className="content-inside">
                <span>
                  Adicionar convidado automaticamente na lista de convidados?
                </span>
                <ToggleSwitch />
              </div>
            </div>
            <div className="section-content confirm-container">
              <button type="button">
                <span>Confirmar Check-In</span>{' '}
                <img src={ConfirmImg} alt="Confirmar Check-In" />
              </button>
            </div>
          </div>
        </section>
      </CheckinContainer>
    </PageContainer>
  );
}
