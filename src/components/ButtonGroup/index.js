import Button from '../Button';
import { Container } from './styles';

export default function ButtonGroup() {
  return (
    <Container>
      <span> Button </span>
      <div className="buttonLayer">
        <Button>Default</Button>
        <Button>Default</Button>
      </div>

    </Container>
  );
}
