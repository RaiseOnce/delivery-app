import React, { forwardRef } from 'react'
import styles from './Input.module.scss'
import { InputProps } from '@/types'

const Input = forwardRef<HTMLInputElement, InputProps>(({ ...props }) => {
  return <input {...props} className={styles.input} />
})

export default Input
