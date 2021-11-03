import PageHeader from '../../components/PageHeader';
import { Container } from './styles';

export default function Guests () {
  return (
      <Container >
          <PageHeader 
            title="Meus Convidados"
            search_placeholder="Buscar Convidado" 
            image_placeholder="Adicionar Convidado"
          />
      </Container>
  )
}