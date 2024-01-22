import React, { FC } from 'react'
import styles from './Input.module.scss'
import { InputProps } from '@/types'

const Input: FC<InputProps> = ({ className, ...props }) => {
  return (
    <input
      {...props}
      className={
        className === undefined
          ? `${styles.input}`
          : `${styles.input} ${className}`
      }
    />
  )
}

export default Input
