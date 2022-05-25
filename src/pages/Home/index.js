import ButtonGroup from '../../components/ButtonGroup';
import { Container } from './styles';

export default function Home() {
  return (
    <Container>
      <h1>Buttons</h1>
      <ButtonGroup
        color1={({ theme }) => theme.colors.gray[100]}
        color2={({ theme }) => theme.colors.gray[500]}
      />
    </Container>
  );
}
