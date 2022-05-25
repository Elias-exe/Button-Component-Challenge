import ButtonGroup from '../../components/ButtonGroup';
import { Container } from './styles';

export default function Home() {
  return (
    <Container>
      <h1>Buttons</h1>
      <ButtonGroup
        title="<Button />"
        hasShadow
        color={({ theme }) => theme.colors.gray[100]}
        textColor={({ theme }) => theme.colors.gray[600]}
        hoverColor={({ theme }) => theme.colors.gray[200]}
      />

      <ButtonGroup
        title="<Button variant=”outline” />"
        hasBorder
        hasShadow
        color={({ theme }) => theme.colors.white.white}
        textColor={({ theme }) => theme.colors.blue.primary}
        hoverColor={({ theme }) => theme.colors.blue.secondary}
      />

      <ButtonGroup
        title="<Button variant=”text” />"
        color="transparent"
        textColor={({ theme }) => theme.colors.blue.primary}
        hoverColor={({ theme }) => theme.colors.blue.secondary}
      />

    </Container>
  );
}
