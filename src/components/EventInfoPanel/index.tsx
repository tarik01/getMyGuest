import { MainPanel, Container, DescriptionPanel } from './styles'

export default function EventInfoPanel() {
  return (
    <Container>
      <MainPanel>
        <div>
            <img src="https://picsum.photos/150/150" alt="Foto de Fulano de Tal" className="rounded-circle"/>
          </div>
          <div className="informations">
              <h2>Festa no Apê</h2>
              <div>10/10/2022 - 10:00</div>
              <div>Palmas - TO</div>
              <p>50 Convidados</p>
              <p><span>Alterar</span></p>
          </div>
      </MainPanel>
      <DescriptionPanel>
        <h2>Descrição</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
      </DescriptionPanel>
    </Container>
  )
}