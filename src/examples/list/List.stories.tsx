import { Meta, StoryObj } from '@storybook/react';
import { List } from './List';

type ListArgs = {
  nbItems: number;
};

const meta: Meta<ListArgs> = {
  title: 'List',
  component: List,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<ListArgs>;

export const Playground: Story = {
  args: {
    nbItems: 5,
  },
  render: ({ nbItems }) => (
    <List>
      {Array.from({ length: nbItems }, (_, index) => (
        <List.Item key={index}>Item {index + 1}</List.Item>
      ))}
    </List>
  ),
};
