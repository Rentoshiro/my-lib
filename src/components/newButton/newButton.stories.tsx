import type { Meta, StoryObj } from '@storybook/react'
import NewButton from './newButton'

const meta: Meta<typeof NewButton> = {
  component: NewButton,
  tags: ['autodocs'],
  title: 'Components/NewButton',
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: {
        type: 'check',
        options: ['primary', 'secondary', 'outlined', 'text'],
      },
    },
    fullWidth: {
      control: 'boolean',
    },
  },
  args: {
    children: 'Button',
    'aria-label': 'button',
  },
} satisfies Meta<typeof NewButton>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    variant: 'primary',
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
}

export const Outlined: Story = {
  args: {
    variant: 'outlined',
  },
}

export const Text: Story = {
  args: {
    variant: 'text',
  },
}
