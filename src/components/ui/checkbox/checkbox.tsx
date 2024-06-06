import * as CheckboxRadix from '@radix-ui/react-checkbox'
// import { CheckIcon } from '@radix-ui/react-icons'

export type CheckboxProps = {
  checked?: boolean
  className?: string
  disabled?: boolean
  id?: string
  label?: string
}

import { CheckIcon } from '@/components/assets/icons/CheckIcon'
import { clsx } from 'clsx'

import s from '../checkbox/checkbox.module.scss'

export const Checkbox = ({ checked, className, disabled, id, label }: CheckboxProps) => {
  const classNames = {
    checkboxRoot: clsx(s.checkboxRoot, disabled && s.disabled),
    indicator: s.indicator,
    label: clsx(s.label, disabled && s.disabled, className),
    root: clsx(s.root),
  }

  return (
    <form>
      <div className={classNames.checkboxRoot}>
        <CheckboxRadix.Root
          checked={checked}
          className={classNames.root}
          disabled={disabled}
          id={id}
        >
          {checked && (
            <CheckboxRadix.Indicator className={classNames.indicator}>
              <CheckIcon />
            </CheckboxRadix.Indicator>
          )}
        </CheckboxRadix.Root>
      </div>
      {label}
    </form>
  )
}
// export const Checkbox = <T extends ElementType = 'button'>(props: ButtonProps<T>) => {
//   const { as: Component = 'button', className, fullWidth, variant = 'primary', ...rest } = props
//
//   return (
//     <Component
//       className={`${s.button} ${s[variant]} ${fullWidth ? s.fullWidth : ''} ${className}`}
//       {...rest}
//     />
//   )
// }
