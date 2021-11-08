import GuestList from '../../components/GuestList';
import PageHeader from '../../components/PageHeader';
import { PageContainer } from '../styles';

export default function Guests () {
  return (
      <PageContainer >
          <PageHeader 
            title="Convidados"
            search_placeholder="Buscar Convidado" 
            image_placeholder="Adicionar Convidado"
          />
          <GuestList />
      </PageContainer>
  )
}