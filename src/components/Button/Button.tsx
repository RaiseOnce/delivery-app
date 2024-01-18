import React, { FC } from 'react'
import styles from './Button.module.scss'
import { ButtonProps } from '@/types'

const Button: FC<ButtonProps> = ({
  children,
  appearence = 'small',
  ...props
}) => {
  return (
    <button
      {...props}
      className={`${styles.btn} ${
        appearence === 'small' ? styles.btnSmall : styles.btnBig
      }`}
    >
      {children}
    </button>
  )
}

export default Button
