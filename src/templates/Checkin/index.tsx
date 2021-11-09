import PageHeader from '../../components/PageHeader'
import ConfirmImg from '../../assets/images/actions/confirm.svg'
import { PageContainer } from '../styles'

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
                            <div className="by-checkin-number">
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
                            <div className="search-party">
                                <input type="text" placeholder="Número do Check-In"/>
                                <img src={ConfirmImg} alt="Confirmar Check-In" data-tip="Confirmar Check-In"/>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </PageContainer>
    )
}