import type { Meta, StoryObj } from '@storybook/react'
import RadioGroup from './RadioGroup'

const meta: Meta<typeof RadioGroup> = {
  component: RadioGroup,
  tags: ['autodocs'],
  title: 'Components/RadioGroup',
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['default', 'active', 'hover', 'focus', 'disabled'],
      },
    },
  },
} satisfies Meta<typeof RadioGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    variant: 'default',
  },
}

export const Active: Story = {
  args: {
    variant: 'active',
  },
}

export const Hover: Story = {
  args: {
    variant: 'hover',
  },
}

export const Focus: Story = {
  args: {
    variant: 'focus',
  },
}

export const Disabled: Story = {
  args: {
    variant: 'disabled',
  },
}
