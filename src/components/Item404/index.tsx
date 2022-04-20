import { Div404Container } from './styles';

export default function Item404({ children }: JSX.ElementChildrenAttribute) {
  return (
    <Div404Container>
      <p>{children}</p>
    </Div404Container>
  );
}
