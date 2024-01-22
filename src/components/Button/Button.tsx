import React, { FC } from 'react'
import styles from './Button.module.scss'
import { ButtonProps } from '@/types'

const Button: FC<ButtonProps> = ({
  className,
  children,
  appearence = 'small',
  ...props
}) => {
  return (
    <button
      {...props}
      className={
        className === undefined
          ? `${styles.btn} ${
              appearence === 'small' ? styles.btnSmall : styles.btnBig
            }`
          : `${styles.btn} ${
              appearence === 'small' ? styles.btnSmall : styles.btnBig
            } ${className}`
      }
    >
      {children}
    </button>
  )
}

export default Button
