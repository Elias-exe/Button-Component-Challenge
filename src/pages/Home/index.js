import { Container } from './styles';
import ButtonLine from '../../components/ButtonLine';
import Button from '../../components/Button';
import HoverButton from '../../components/HoverButton';

export default function Home() {
  return (
    <Container>
      <h1>Buttons</h1>

      <ButtonLine>
        <Button
          title="<Button />"
          hasShadow
          color={({ theme }) => theme.colors.gray[100]}
          textColor={({ theme }) => theme.colors.gray[600]}
          hoverColor={({ theme }) => theme.colors.gray[200]}
        />
        <HoverButton
          hoverColor={({ theme }) => theme.colors.gray[200]}
          textColor={({ theme }) => theme.colors.gray[600]}
        />
      </ButtonLine>

      <ButtonLine>
        <Button
          title="<Button variant=”outline” />"
          hasShadow
          hasBorder
          color={({ theme }) => theme.colors.white.white}
          textColor={({ theme }) => theme.colors.blue.primary}
          hoverColor={({ theme }) => theme.colors.blue.secondary}
        />
        <HoverButton
          hasBorder
          hoverColor={({ theme }) => theme.colors.blue.secondary}
          textColor={({ theme }) => theme.colors.blue.primary}
        />
      </ButtonLine>

      <ButtonLine>
        <Button
          title="<Button variant=”text” />"
          color="transparent"
          textColor={({ theme }) => theme.colors.blue.primary}
          hoverColor={({ theme }) => theme.colors.blue.secondary}
        />
        <HoverButton
          hoverColor={({ theme }) => theme.colors.blue.secondary}
          textColor={({ theme }) => theme.colors.blue.primary}
        />
      </ButtonLine>

      <ButtonLine>
        <Button
          title="<Button disableShadow />"
          color={({ theme }) => theme.colors.blue.primary}
          textColor={({ theme }) => theme.colors.white.white}
          hoverColor={({ theme }) => theme.colors.blue.primary}
        />
      </ButtonLine>

      <ButtonLine>
        <Button
          title="<Button disable/>"
          disabled
        />
        <HoverButton
          title="<Button variant=”text” disabled />"
          disabled
        />
      </ButtonLine>

    </Container>
  );
}
