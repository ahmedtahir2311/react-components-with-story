import type { Meta, StoryObj } from '@storybook/react';
import { FlagIcon } from './FlagIcon';
import { FlagIconSize, FlagIconShape } from './types';

const meta = {
  title: 'UI/FlagIcon',
  component: FlagIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
      description: 'Size of the flag icon',
      defaultValue: 'md',
    },
    shape: {
      control: 'select',
      options: ['circle', 'square', 'rounded'],
      description: 'Shape of the flag container',
      defaultValue: 'rounded',
    },
    bordered: {
      control: 'boolean',
      description: 'Whether to show a border around the flag',
      defaultValue: false,
    },
    shadowed: {
      control: 'boolean',
      description: 'Whether to show a shadow effect',
      defaultValue: false,
    },
    lazy: {
      control: 'boolean',
      description: 'Whether to lazy load the image',
      defaultValue: true,
    },
  },
} satisfies Meta<typeof FlagIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

const sizes: FlagIconSize[] = ['xs', 'sm', 'md', 'lg', 'xl', '2xl'];
const shapes: FlagIconShape[] = ['circle', 'square', 'rounded'];

export const Default: Story = {
  args: {
    src: 'https://flagcdn.com/us.svg',
    alt: 'United States Flag',
    countryCode: 'US',
  },
};

export const Sizes: Story = {
  args: {
    src: 'https://flagcdn.com/us.svg',
    alt: 'US Flag',
  },
  render: (args) => (
    <div className='flex items-center gap-4'>
      {sizes.map((size) => (
        <FlagIcon key={size} {...args} size={size} />
      ))}
    </div>
  ),
};

export const Shapes: Story = {
  args: {
    src: 'https://flagcdn.com/us.svg',
    alt: 'US Flag',
    size: 'xl',
  },
  render: (args) => (
    <div className='flex items-center gap-4'>
      {shapes.map((shape) => (
        <FlagIcon key={shape} {...args} shape={shape} />
      ))}
    </div>
  ),
};

export const Variants: Story = {
  args: {
    src: 'https://flagcdn.com/us.svg',
    alt: 'US Flag',
    size: 'xl',
  },
  render: (args) => (
    <div className='flex items-center gap-4'>
      <FlagIcon {...args} bordered />
      <FlagIcon {...args} shadowed />
      <FlagIcon {...args} bordered shadowed />
    </div>
  ),
};
