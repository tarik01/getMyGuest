import ConfirmImg from '../../assets/images/actions/confirm.svg'

import PageHeader from '../../components/PageHeader'
import { PageContainer } from '../styles'
import { CheckinContainer } from './styles'

import EventItem from '../../components/EventItem'
import GuestItem from '../../components/GuestItem'
import ToggleSwitch from '../../components/ToggleSwitch'

export default function Events () {
    return (
        <PageContainer >
            <PageHeader title="Check-In"/>
            <CheckinContainer>
                <section>
                    <div className="section">
                        <div className="section-header">
                            <h2>Check-In Rápido</h2>
                        </div>
                        <div className="section-content">
                            <div className="content-inside">
                                <input type="text" placeholder="Número do Check-In"/>
                                <img src={ConfirmImg} alt="Confirmar Check-In" data-tip="Confirmar Check-In"/>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="section">
                        <div className="section-header">
                            <h2>Buscar</h2>
                        </div>
                        <div className="section-content">
                            <EventItem />
                            <button id="select_event">Selecionar Evento</button>
                        </div>
                        <div className="section-content">
                            <GuestItem />
                            <button id="select_guest">Selecionar Convidado</button>
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
                            <button><span>Confirmar Check-In</span> <img src={ConfirmImg} alt="Confirmar Check-In"/></button>
                            
                        </div>
                    </div>
                </section>
            </CheckinContainer>
        </PageContainer>
    )
}