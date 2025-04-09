import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: () => (
    <Card>
      <Card.Header>Ma jolie carte</Card.Header>
      <Card.Body>
        <p>
          Ceci est le contenu principal de la carte. Tu peux y mettre n'importe
          quoi : du texte, des images, ou même d'autres composants.
        </p>
      </Card.Body>
      <Card.Footer>Dernière mise à jour : aujourd’hui.</Card.Footer>
    </Card>
  ),
};
