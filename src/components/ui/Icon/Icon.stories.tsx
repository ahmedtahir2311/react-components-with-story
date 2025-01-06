import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from './Icon';
import { IconSize, IconShape } from './types';

const meta = {
  title: 'UI/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
      description: 'Size of the icon',
      defaultValue: 'md',
    },
    shape: {
      control: 'select',
      options: ['circle', 'square', 'rounded'],
      description: 'Shape of the icon container',
      defaultValue: 'rounded',
    },
    bordered: {
      control: 'boolean',
      description: 'Whether to show a border',
      defaultValue: false,
    },
    shadowed: {
      control: 'boolean',
      description: 'Whether to show a shadow effect',
      defaultValue: false,
    },
    width: {
      control: 'number',
      description: 'Custom width override',
      defaultValue: undefined,
    },
    height: {
      control: 'number',
      description: 'Custom height override',
      defaultValue: undefined,
    },
  },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

const sizes: IconSize[] = ['xs', 'sm', 'md', 'lg', 'xl', '2xl'];
const shapes: IconShape[] = ['circle', 'square', 'rounded'];

// Example icons (you can replace these with your actual icons)
const svgIcon = 'https://www.svgrepo.com/show/94027/dummy.svg';
const pngIcon = 'https://cdn.britannica.com/79/4479-050-6EF87027/flag-Stars-and-Stripes-May-1-1795.jpg';

export const Default: Story = {
  args: {
    src: pngIcon,
    alt: 'Example Icon',
  },
};

export const Sizes: Story = {
  args: {
    src: pngIcon,
    alt: 'Size Example',
  },
  render: (args) => (
    <div className='flex items-center gap-4'>
      {sizes.map((size) => (
        <Icon key={size} {...args} size={size} />
      ))}
    </div>
  ),
};

export const Shapes: Story = {
  args: {
    src: pngIcon,
    alt: 'Shape Example',
    size: 'xl',
  },
  render: (args) => (
    <div className='flex items-center gap-4'>
      {shapes.map((shape) => (
        <Icon key={shape} {...args} shape={shape} />
      ))}
    </div>
  ),
};

export const Variants: Story = {
  args: {
    src: pngIcon,
    alt: 'Variant Example',
    size: 'xl',
  },
  render: (args) => (
    <div className='flex items-center gap-4'>
      <Icon {...args} bordered />
      <Icon {...args} shadowed />
      <Icon {...args} bordered shadowed />
    </div>
  ),
};

export const ImageTypes: Story = {
  args: {
    src: pngIcon,
    alt: 'Different type of Image',
    size: 'xl',
  },
  render: () => (
    <div className='flex items-center gap-4'>
      <Icon src={svgIcon} alt='SVG Icon' size='xl' />
      <Icon src={pngIcon} alt='PNG Icon' size='xl' />
    </div>
  ),
};
