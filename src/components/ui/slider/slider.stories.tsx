import type { Meta, StoryObj } from '@storybook/react'

import { Slider } from '@/components/ui/slider/slider'

const meta = {
  argTypes: {},
  component: Slider,
  tags: ['autodocs'],
  title: 'Components/Slider',
} satisfies Meta<typeof Slider>

export default meta
type Story = StoryObj<typeof meta>

export const SliderOwn: Story = {
  args: {
    defaultValue: [2, 8],
    max: 16,
    min: 0,
    minStepsBetweenThumbs: 1,
    step: 3,
  },
}
