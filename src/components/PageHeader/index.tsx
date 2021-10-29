import { Header } from './styles';
import AddImg from '../../assets/images/actions/add.png'

interface PageHeaderProps {
    title: string;
    img_description: string;
}

export default function PageHeader({ title, img_description }: PageHeaderProps) {
  return (
      <Header>
            <h1>{title}</h1>
            <img src={AddImg} alt={img_description} />
      </Header>
  );
}