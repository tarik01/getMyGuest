import { Header } from './styles';

interface PageHeaderProps {
  title: string;
}

export default function PageHeader({ title }: PageHeaderProps) {
  return (
    <Header>
      <h1>{title}</h1>
    </Header>
  );
}
