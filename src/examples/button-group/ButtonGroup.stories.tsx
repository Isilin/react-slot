import { Meta, StoryObj } from '@storybook/react';
import { ButtonGroup } from './ButtonGroup';

type GroupArgs = {
  nbButtons: number;
};

const meta: Meta<GroupArgs> = {
  title: 'ButtonGroup',
  component: ButtonGroup,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<GroupArgs>;

export const Playground: Story = {
  args: {
    nbButtons: 5,
  },
  render: ({ nbButtons }) => (
    <ButtonGroup>
      <ButtonGroup.Button>Button 1</ButtonGroup.Button>
      <ButtonGroup.Button>Button 2</ButtonGroup.Button>
      {Array.from({ length: nbButtons }, (_, index) => (
        <>
          {index < 1 && <ButtonGroup.Divider />}
          <ButtonGroup.Button key={index}>
            Button {index + 3}
          </ButtonGroup.Button>
        </>
      ))}
    </ButtonGroup>
  ),
};
