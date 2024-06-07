import type { Meta, StoryObj } from '@storybook/react'

import LogOut from '@/components/assets/icons/LogOut'
import { Button } from '@/components/ui/button/button'

const meta = {
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'secondary'],
    },
  },
  component: Button,
  tags: ['autodocs'],
  title: 'Components/Button',
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'Primary Button',
    disabled: false,
    variant: 'primary',
  },
}
export const PrimaryWithIcon: Story = {
  args: {
    children: (
      <>
        <LogOut /> Button Primary
      </>
    ),
    disabled: false,
    variant: 'primary',
  },
}

export const SecondaryWithIcon: Story = {
  args: {
    children: (
      <>
        <LogOut /> Button Primary
      </>
    ),
    disabled: false,
    variant: 'secondary',
  },
}

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    disabled: false,
    variant: 'secondary',
  },
}

export const FullWidth: Story = {
  args: {
    children: 'Full Width Primary Button',
    disabled: false,
    fullWidth: true,
    variant: 'primary',
  },
}

export const AsLink: Story = {
  args: {
    as: 'a',
    children: 'Link that looks like a button',
    variant: 'primary',
  },
}
