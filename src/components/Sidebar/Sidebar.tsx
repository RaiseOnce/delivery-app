'use client'

import React from 'react'
import styles from './Sidebar.module.scss'
import Button from '../Button/Button'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Sidebar = () => {
  const pathname = usePathname()

  return (
    <div className={styles.sidebar}>
      <div className={styles.wrapper}>
        <div className={styles.img}>
          <img src="./user.jpeg" alt="user" />
        </div>

        <div className={styles.user}>
          <div className={styles.name}>Ильяс Юнусов</div>
          <div className={styles.email}>elias.yunusoff@gmail.com</div>
        </div>

        <div className={styles.nav}>
          <div className={styles.navItems}>
            <Link
              href="/"
              className={`${styles.navItem} ${
                pathname === '/' ? styles.navItemActive : ''
              }`}
            >
              <img src="./doc.svg" alt="" />
              <span>Меню</span>
            </Link>
            <Link
              href="/cart"
              className={`${styles.navItem} ${
                pathname === '/cart' ? styles.navItemActive : ''
              }`}
            >
              <img src="./bag.svg" alt="" />
              <span>Корзина</span>
            </Link>
          </div>

          <Button>
            <div className={styles.btn}>
              <img className={styles.exit} src="./exit.png" alt="exit" />
              <span>Выйти</span>
            </div>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
