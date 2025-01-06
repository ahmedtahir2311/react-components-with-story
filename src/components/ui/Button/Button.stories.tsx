import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta = {
  title: 'UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' },
    variant: {
      control: 'select',
      options: ['solid', 'outline', 'ghost', 'link', 'subtle'],
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info'],
    },
    isLoading: { control: 'boolean' },
    loadingText: { control: 'text' },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Button',
  },
};

export const Variants: Story = {
  render: () => (
    <div className='flex gap-4'>
      <Button variant='solid'>Solid</Button>
      <Button variant='outline'>Outline</Button>
      <Button variant='ghost'>Ghost</Button>
      <Button variant='link'>Link</Button>
      <Button variant='subtle'>Subtle</Button>
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div className='flex gap-4'>
      <Button color='primary'>Primary</Button>
      <Button color='secondary'>Secondary</Button>
      <Button color='success'>Success</Button>
      <Button color='danger'>Danger</Button>
      <Button color='warning'>Warning</Button>
      <Button color='info'>Info</Button>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className='flex items-center gap-4'>
      <Button size='xs'>Extra Small</Button>
      <Button size='sm'>Small</Button>
      <Button size='md'>Medium</Button>
      <Button size='lg'>Large</Button>
      <Button size='xl'>Extra Large</Button>
    </div>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <div className='flex gap-4'>
      <Button leftIcon={<span>←</span>}>Left Icon</Button>
      <Button rightIcon={<span>→</span>}>Right Icon</Button>
      <Button leftIcon={<span>←</span>} rightIcon={<span>→</span>}>
        Both Icons
      </Button>
    </div>
  ),
};

export const LoadingStates: Story = {
  render: () => (
    <div className='flex gap-4'>
      <Button isLoading>Loading</Button>
      <Button isLoading loadingText='Processing...'>
        Submit
      </Button>
      <Button isLoading variant='outline' loadingText='Saving...'>
        Save
      </Button>
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div className='flex gap-4'>
      <Button isLoading>Loading</Button>
      <Button isLoading loadingText='Loading...'>
        Button
      </Button>
      <Button isDisabled>Disabled</Button>
      <Button fullWidth>Full Width</Button>
    </div>
  ),
};
