import { useState } from 'react'

import { Typography } from '@/components/ui/typography'
import * as SliderRadix from '@radix-ui/react-slider'

import s from '../slider/slider.module.scss'

type SliderProps = {
  defaultValue: number[]
  max?: number
  min?: number
  minStepsBetweenThumbs?: number
  onChange?: (value: number[]) => void
  step?: number
  value?: number[]
}
export const Slider = (props: SliderProps) => {
  const { defaultValue, max, min, minStepsBetweenThumbs, step, value } = props
  const [currentValue, setCurrentValue] = useState(defaultValue)

  return (
    <div className={s.container}>
      <Typography as={'span'} className={s.valueBox} variant={'body1'}>
        {currentValue[0]}
      </Typography>
      <SliderRadix.Root
        className={s.slider}
        defaultValue={defaultValue}
        max={max}
        min={min}
        minStepsBetweenThumbs={minStepsBetweenThumbs}
        onValueChange={setCurrentValue}
        step={step}
        value={value}
      >
        <SliderRadix.Track className={s.sliderTrack}>
          <SliderRadix.Range className={s.sliderRange} />
        </SliderRadix.Track>
        <SliderRadix.Thumb className={s.sliderThumb} />
        <SliderRadix.Thumb className={s.sliderThumb} />
      </SliderRadix.Root>
      <Typography as={'span'} className={s.valueBox} variant={'body1'}>
        {currentValue[1]}
      </Typography>
    </div>
  )
}
