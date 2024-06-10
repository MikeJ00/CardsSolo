import { ChangeEvent, ComponentPropsWithoutRef, forwardRef, useId, useState } from 'react'

import Close from '@/components/assets/icons/Close'
import Eye from '@/components/assets/icons/Eye'
import EyeOff from '@/components/assets/icons/EyeOff'
import SearchOutline from '@/components/assets/icons/SearchOutline'
import { Typography } from '@/components/ui/typography'
import { clsx } from 'clsx'

import s from './input.module.scss'

export type InputProps = {
  errorMessage?: string
  label?: string
  onClearInput?: () => void
  onValueChange?: (value: string) => void
} & ComponentPropsWithoutRef<'input'>

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      errorMessage,
      label,
      onChange,
      onClearInput,
      onValueChange,
      type = 'text',
      value,
      ...restProps
    },
    forwardRef
  ) => {
    const [showPassword, setShowPassword] = useState<boolean>(false)
    const isPasswordType = type === 'password'
    const isSearchType = type === 'search'
    const isShowClear = isSearchType && value?.length! > 0

    const generatedId = useId()
    const inputType = isPasswordType && !showPassword ? 'password' : 'text'

    const toggleShowPassword = () => setShowPassword(prev => !prev)

    const classNames = {
      input: clsx(s.input, isSearchType && s.search, errorMessage && s.error),
      label: clsx(s.label, restProps.disabled && s.disabled),
      root: clsx(s.root, className),
      searchIcon: s.searchIcon,
    }
    const onChangeValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
      onChange?.(e)
      onValueChange?.(e.target.value)
    }

    return (
      <div className={classNames.root}>
        {label && (
          <Typography
            as={'label'}
            className={classNames.label}
            htmlFor={generatedId}
            variant={'body2'}
          >
            {label}
          </Typography>
        )}
        <div className={s.container} tabIndex={0}>
          <input
            {...restProps}
            className={classNames.input}
            id={restProps.id}
            onChange={onChangeValueHandler}
            ref={forwardRef}
            type={inputType}
          />
          {isPasswordType && (
            <button className={s.button} disabled={restProps.disabled} onClick={toggleShowPassword}>
              {showPassword ? <EyeOff /> : <Eye />}
            </button>
          )}
          {isShowClear && (
            <button className={s.button} onClick={onClearInput}>
              <Close />
            </button>
          )}
          {isSearchType && (
            <SearchOutline
              className={s.searchIcon}
              color={restProps.disabled ? 'var(--color-dark-300)' : 'var(--color-light-100)'}
            />
          )}
        </div>
        {errorMessage && (
          <Typography className={s.errorMessage} variant={'caption'}>
            {errorMessage}
          </Typography>
        )}
      </div>
    )
  }
)
