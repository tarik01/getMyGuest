import { Container } from './styles';
import AddImg from '../../assets/images/actions/add.svg';
import { UTooltip } from '../Util';

interface SearchAndAddBarProps {
  searchPlaceholder: string;
  imageAddPlaceholder?: string;
  searchState?: (value: string) => void;
}

export default function SearchAndAddBar(search: SearchAndAddBarProps) {
  const { searchPlaceholder, imageAddPlaceholder, searchState } = search;

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (searchState) {
      searchState(e.target.value);
    }
  };

  return (
    <Container>
      <input
        type="search"
        placeholder={searchPlaceholder}
        onChange={e => {
          handleSearch(e);
        }}
      />
      {imageAddPlaceholder && (
        <UTooltip content={imageAddPlaceholder}>
          <img src={AddImg} alt={imageAddPlaceholder} />
        </UTooltip>
      )}
    </Container>
  );
}
