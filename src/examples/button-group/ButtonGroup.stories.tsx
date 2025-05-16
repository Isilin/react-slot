import type { Meta, StoryObj } from '@storybook/react';
import { Fragment } from 'react/jsx-runtime';

import { ButtonGroup } from './ButtonGroup';

interface GroupArgs {
  nbButtons: number;
}

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
  render: ({ nbButtons }: GroupArgs) => (
    <ButtonGroup>
      <ButtonGroup.Button key="1">Button 1</ButtonGroup.Button>
      <ButtonGroup.Button key="2">Button 2</ButtonGroup.Button>
      {Array.from({ length: nbButtons }, (_, index) => (
        <Fragment key={(index + 1).toString()}>
          {index < 1 && <ButtonGroup.Divider />}
          <ButtonGroup.Button>Button {index + 3}</ButtonGroup.Button>
        </Fragment>
      ))}
    </ButtonGroup>
  ),
};
