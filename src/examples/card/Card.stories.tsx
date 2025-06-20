import type { Meta, StoryObj } from '@storybook/react';

import { Card } from './Card';

interface CardArgs {
  showHeader: boolean;
  showBody: boolean;
  showFooter: boolean;
}

const meta: Meta<CardArgs> = {
  title: 'Card',
  component: Card,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<CardArgs>;

export const Playground: Story = {
  args: {
    showHeader: true,
    showBody: true,
    showFooter: true,
  },
  render: ({ showHeader, showBody, showFooter }: CardArgs) => (
    <Card>
      {showHeader && <Card.Header>Ma jolie carte</Card.Header>}
      {showBody && (
        <Card.Body>
          Ceci est le contenu principal de la carte. Tu peux y mettre n'importe
          quoi : du texte, des images, ou même d'autres composants.
        </Card.Body>
      )}
      {showFooter && (
        <Card.Footer>
          <button>Action</button>
          Dernière mise à jour : aujourd’hui.
        </Card.Footer>
      )}
    </Card>
  ),
};

type CardWithExtraArgs = { showBadge: boolean } & CardArgs;
type StoryExtra = StoryObj<CardWithExtraArgs>;

export const WithExtra: StoryExtra = {
  args: {
    showHeader: true,
    showBody: true,
    showFooter: true,
    showBadge: true,
  },
  render: ({
    showHeader,
    showBody,
    showFooter,
    showBadge,
  }: CardWithExtraArgs) => (
    <Card>
      {showHeader && (
        <Card.Header>
          Ma jolie carte
          {showBadge && <Card.Badge label="NEW" />}
        </Card.Header>
      )}
      {showBody && (
        <Card.Body>
          Ceci est le contenu principal de la carte. Tu peux y mettre n'importe
          quoi : du texte, des images, ou même d'autres composants.
        </Card.Body>
      )}
      {showFooter && (
        <Card.Footer>
          <button>Action</button>
          Dernière mise à jour : aujourd’hui.
        </Card.Footer>
      )}
    </Card>
  ),
};
