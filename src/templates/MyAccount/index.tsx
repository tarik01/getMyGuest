import PageHeader from '../../components/PageHeader';
import { PageContainer } from '../styles';
import { MyAccountContainer } from './styles';

export default function MyAccount() {
  return (
    <PageContainer>
      <PageHeader title="Minha Conta" />
      <MyAccountContainer>
        <div>
          <img src="https://picsum.photos/150/150" alt="Foto de Fulano de Tal" className="rounded-circle"/>
        </div>
        <div className="informations">
            <h2>Fulano de Tal</h2>
            <p>fulanodetal@email.com</p>
            <p><span>Alterar senha</span></p>
        </div>
      </MyAccountContainer>
    </PageContainer>
  );
}