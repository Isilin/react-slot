import type { Meta, StoryObj } from '@storybook/react';
import { Accordion } from './Accordion';

type AccordionArgs = {
  nbItems: number;
};

const meta: Meta<AccordionArgs> = {
  title: 'Accordion',
  component: Accordion,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<AccordionArgs>;

export const Playground: Story = {
  args: {
    nbItems: 5,
  },
  render: ({ nbItems }) => (
    <Accordion>
      {Array.from({ length: nbItems }, (_, index) => (
        <Accordion.Item key={`trigger_${index}`} value={`item${index + 1}`}>
          <Accordion.Trigger>Item {index + 1}</Accordion.Trigger>
          <Accordion.Content>Details of item {index + 1}</Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion>
  ),
};
