import PageHeader from '../../components/PageHeader'
import ConfirmImg from '../../assets/images/actions/confirm.svg'
import { PageContainer } from '../styles'
import EventItem from '../../components/EventItem'
import GuestItem from '../../components/GuestItem'
import ToggleSwitch from '../../components/ToggleSwitch'

export default function Events () {
    return (
        <PageContainer >
            <PageHeader 
                title="Check-In"
            />
            <div className="page-content">
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
                            <button>Selecionar Evento</button>
                        </div>
                        <div className="section-content">
                            <GuestItem />
                            <button>Selecionar Convidado</button>
                        </div>
                        <div className="section-content">
                            <div className="content-inside">
                                <label htmlFor="add">
                                    Adicionar convidado automaticamente na lista de convidados?
                                </label>
                                <ToggleSwitch />
                                {/* <input type="checkbox" 
                                    alt="Adicionar convidado automaticamente na lista de convidados?" 
                                    value="add" 
                                    id="add"
                                /> */}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </PageContainer>
    )
}