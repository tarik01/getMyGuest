import { Header } from './styles';
import AddImg from '../../assets/images/actions/add.svg'

interface PageHeaderProps {
    title: string;
    image_placeholder?: string;
    search_placeholder?: string;
}

export default function PageHeader({ title, image_placeholder, search_placeholder }: PageHeaderProps) {
  return (
      <Header>
            <h1>{title}</h1>
            <div className="guest-bar">
              {search_placeholder && <input type="search" placeholder={search_placeholder} />}
              {image_placeholder && <img src={AddImg} alt={image_placeholder} data-tip={image_placeholder} />}
            </div>
      </Header>
  );
}