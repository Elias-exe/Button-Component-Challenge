import { Container } from './styles';
import ButtonGroup from '../../components/ButtonGroup';
import Button from '../../components/Button';
import HoverButton from '../../components/HoverButton';

export default function Home() {
  return (
    <Container>
      <h1>Buttons</h1>

      <ButtonGroup>
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
      </ButtonGroup>

      <ButtonGroup>
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
      </ButtonGroup>

      <ButtonGroup>
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
      </ButtonGroup>

      <ButtonGroup>
        <Button
          title="<Button disableShadow />"
          color={({ theme }) => theme.colors.blue.primary}
          textColor={({ theme }) => theme.colors.white.white}
          hoverColor={({ theme }) => theme.colors.blue.primary}
        />
      </ButtonGroup>

      <ButtonGroup>
        <Button
          title="<Button disable/>"
          disabled
        />
        <HoverButton
          title="<Button variant=”text” disabled />"
          disabled
        />
      </ButtonGroup>

      <ButtonGroup>
        <Button
          title="<Button startIcon=”local_grocery_store” />"
          color={({ theme }) => theme.colors.blue.primary}
          textColor={({ theme }) => theme.colors.white.white}
          hoverColor={({ theme }) => theme.colors.blue.primary}
          startIcon
        />

        <Button
          title="<Button endIcon=”local_grocery_store” />"
          color={({ theme }) => theme.colors.blue.primary}
          textColor={({ theme }) => theme.colors.white.white}
          hoverColor={({ theme }) => theme.colors.blue.primary}
          endIcon
        />
      </ButtonGroup>

      <ButtonGroup>
        <Button
          title="<Button size=”sm” />"
          color={({ theme }) => theme.colors.blue.primary}
          textColor={({ theme }) => theme.colors.white.white}
          hoverColor={({ theme }) => theme.colors.blue.primary}
          size="sm"
        />

        <Button
          title="<Button size=”md” />"
          color={({ theme }) => theme.colors.blue.primary}
          textColor={({ theme }) => theme.colors.white.white}
          hoverColor={({ theme }) => theme.colors.blue.primary}
          size="md"
        />

        <Button
          title="<Button size=”lg” />"
          color={({ theme }) => theme.colors.blue.primary}
          textColor={({ theme }) => theme.colors.white.white}
          hoverColor={({ theme }) => theme.colors.blue.primary}
          size="lg"
        />
      </ButtonGroup>

      <ButtonGroup width={800}>
        <Button
          title="<Button color=”default” />"
          hasShadow
          color={({ theme }) => theme.colors.gray[100]}
          textColor={({ theme }) => theme.colors.gray[600]}
          hoverColor={({ theme }) => theme.colors.gray[200]}
        />

        <Button
          title="<Button color=”primary” />"
          color={({ theme }) => theme.colors.blue.primary}
          textColor={({ theme }) => theme.colors.white.white}
          hoverColor="#0039CB"
        />

        <Button
          title="<Button color=”secondary” />"
          color={({ theme }) => theme.colors.blue.terciary}
          buttonText="Secondary"
          textColor={({ theme }) => theme.colors.white.white}
          hoverColor={({ theme }) => theme.colors.blue.quaternary}
        />

        <Button
          title="<Button color=”danger” />"
          color="#D32F2F;"
          buttonText="Danger"
          textColor={({ theme }) => theme.colors.white.white}
          hoverColor="#9A0007;"
        />
      </ButtonGroup>

    </Container>
  );
}
