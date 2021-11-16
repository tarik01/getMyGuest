import { Container } from './styles';
import AddImg from '../../assets/images/actions/add.svg'

interface SearchAndAddBarProps {
    searchPlaceholder: string;
    imageAddPlaceholder?: string;
}

export default function SearchAndAddBar({ searchPlaceholder, imageAddPlaceholder}: SearchAndAddBarProps) {
    return (
        <Container>
            <input type="search" placeholder={searchPlaceholder} />
            {imageAddPlaceholder && <img src={AddImg} alt={imageAddPlaceholder} data-tip={imageAddPlaceholder} />}
        </Container>
    )
}