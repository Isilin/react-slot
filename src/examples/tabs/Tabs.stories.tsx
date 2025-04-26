import { Meta, StoryObj } from '@storybook/react';
import { Tabs } from './Tabs';

type TabsArgs = {
  nbTabs: number;
};

const meta: Meta<TabsArgs> = {
  title: 'Tabs',
  component: Tabs,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<TabsArgs>;

export const Playground: Story = {
  args: {
    nbTabs: 5,
  },
  render: ({ nbTabs }) => (
    <Tabs>
      {Array.from({ length: nbTabs }, (_, index) => (
        <Tabs.Trigger key={`trigger_${index}`} value={`tab${index + 1}`}>
          Tab {index + 1}
        </Tabs.Trigger>
      ))}

      {Array.from({ length: nbTabs }, (_, index) => (
        <Tabs.Content key={`content_${index}`} value={`tab${index + 1}`}>
          Content Tab {index + 1}
        </Tabs.Content>
      ))}
    </Tabs>
  ),
};
