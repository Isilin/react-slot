import type { Meta, StoryObj } from '@storybook/react';
import { useRef } from 'react';

import type { ListHandle } from './List';
import { List } from './List';

interface ListArgs {
  nbItems: number;
  scrollTarget: number;
}

const meta: Meta<ListArgs> = {
  title: 'List',
  component: List,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<ListArgs>;

const ScrollableListDemo = ({ nbItems, scrollTarget }: ListArgs) => {
  const ref = useRef<ListHandle>(null);

  return (
    <div>
      <button onClick={() => ref.current?.scrollToIndex(scrollTarget - 1)}>
        Scroll to item {scrollTarget}
      </button>
      <List ref={ref}>
        {Array.from({ length: nbItems }, (_, index) => (
          <List.Item key={index}>Item {index + 1}</List.Item>
        ))}
      </List>
    </div>
  );
};

export const Playground: Story = {
  args: {
    nbItems: 25,
    scrollTarget: 10,
  },
  render: (props: ListArgs) => <ScrollableListDemo {...props} />,
};
