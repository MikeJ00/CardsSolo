import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

export type ButtonProps<T extends ElementType = 'button'> = {
  as?: T
  children: ReactNode
  className?: string
  fullWidth?: boolean
  variant?: 'icon' | 'link' | 'primary' | 'secondary' | 'tertiary'
} & ComponentPropsWithoutRef<T>

import { clsx } from 'clsx'

import s from './button.module.scss'

export const Button = <T extends ElementType = 'button'>(props: ButtonProps<T>) => {
  const { as: Component = 'button', className, fullWidth, variant = 'primary', ...rest } = props

  return (
    <Component
      // className={`${s.button} ${s[variant]} ${fullWidth ? s.fullWidth : ''} ${className}`}
      className={clsx(s[variant], fullWidth && s.fullWidth, className)}
      {...rest}
    />
  )
}
