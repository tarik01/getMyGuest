import ConfirmImg from '../../assets/images/actions/confirm.svg';
import EditImg from '../../assets/images/actions/edit.svg';

import PageHeader from '../../components/PageHeader';
import { PageContainer } from '../styles';
import { CheckinContainer } from './styles';

import EventItem from '../../components/EventItem';
import GuestItem from '../../components/GuestItem';
import ToggleSwitch from '../../components/ToggleSwitch';

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
                <img
                  src={ConfirmImg}
                  alt="Confirmar Check-In"
                  data-tip="Confirmar Check-In"
                />
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
              <EventItem
                id={1}
                title="Minha Festa"
                description="Festa lá em casa"
                date={new Date(2021, 10, 10)}
                cover="https://picsum.photos/360/360"
                location="Palmas"
              />
              <span>
                <img
                  src={EditImg}
                  alt="Alterar Evento"
                  data-tip="Alterar Evento"
                  className="icon-big"
                />
              </span>
              {/* <button id="select_event">Selecionar Evento</button> */}
            </div>
            <div className="section-content selected">
              <GuestItem
                name="Fulano de Tal"
                cpf="000.000.000-00"
                cover="https://picsum.photos/360/360"
              />
              <span>
                <img
                  src={EditImg}
                  alt="Alterar Convidado"
                  data-tip="Alterar Convidado"
                  className="icon-big"
                />
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
