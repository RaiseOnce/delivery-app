import React, { FC } from 'react'
import styles from './Header.module.scss'
import { HeaderProps } from '@/types'

const Header: FC<HeaderProps> = ({ className, children, ...props }) => {
  return (
    <h1
      {...props}
      className={
        className === undefined
          ? `${styles.header}`
          : `${styles.header} ${className}`
      }
    >
      {children}
    </h1>
  )
}

export default Header
