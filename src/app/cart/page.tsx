import React from 'react'
import styles from './page.module.scss'
import Sidebar from '@/components/Sidebar/Sidebar'

const Cart = () => {
  return (
    <main className={styles.main}>
      <Sidebar />
      <div className={styles.cart}>Cart</div>
    </main>
  )
}

export default Cart
