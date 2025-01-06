import type { Meta, StoryObj } from '@storybook/react';
import { Divider } from './Divider';

const meta = {
  title: 'UI/Divider',
  component: Divider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithText: Story = {
  args: {
    children: 'Text',
  },
};

export const TextAlignment: Story = {
  render: () => (
    <div className='space-y-4 w-full max-w-md'>
      <Divider textAlign='left'>Left</Divider>
      <Divider textAlign='center'>Center</Divider>
      <Divider textAlign='right'>Right</Divider>
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className='space-y-4 w-full max-w-md'>
      <Divider variant='fullWidth' />
      <Divider variant='inset' />
      <Divider variant='middle' />
    </div>
  ),
};

export const Vertical: Story = {
  render: () => (
    <div className='flex h-24 items-center'>
      <span>Left</span>
      <Divider orientation='vertical' flexItem />
      <span>Middle</span>
      <Divider orientation='vertical' flexItem />
      <span>Right</span>
    </div>
  ),
};

export const Light: Story = {
  args: {
    light: true,
  },
};

export const WithContent: Story = {
  render: () => (
    <div className='space-y-4 w-full max-w-md'>
      <Divider>OR</Divider>
      <Divider>
        <div className='flex items-center gap-2'>
          <span>With</span>
          <span className='text-blue-500'>Complex</span>
          <span>Content</span>
        </div>
      </Divider>
    </div>
  ),
};
