import { ProductCardsProps } from '@/types'
import React, { FC } from 'react'
import styles from './ProductCart.module.scss'

const ProductCard: FC<ProductCardsProps> = ({ title, description, image }) => {
  return (
    <div className={styles.card}>
      <img className={styles.img} src="/pizza.png" alt="" />
      <div className={styles.content}>
        <h3 className={styles.header}>Наслаждение</h3>
        <p className={styles.subheader}>Салями, руккола, помидоры, оливки</p>
      </div>

      <div className={styles.price}>
        300 <span>₽</span>
      </div>

      <div className={styles.shop}>
        <img src="/bagBtn.svg" alt="" />
      </div>

      <div className={styles.score}>
        <span>4.5</span>
        <img src="/star.svg" alt="" />
      </div>
    </div>
  )
}

export default ProductCard
