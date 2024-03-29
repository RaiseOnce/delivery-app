import { ProductCardsProps } from '@/types'
import React, { FC } from 'react'
import styles from './ProductCart.module.scss'
import Link from 'next/link'

const ProductCard: FC<ProductCardsProps> = ({
  id,
  name,
  description,
  rating,
  price,
  image,
}) => {
  return (
    <Link href={`/products/${id}`} className={styles.card}>
      <img className={styles.img} src={image} alt="" />
      <div className={styles.content}>
        <h3 className={styles.header}>{name}</h3>
        <p className={styles.subheader}>{description}</p>
      </div>

      <div className={styles.price}>
        {price} <span>₽</span>
      </div>

      <div className={styles.shop}>
        <img src="/bagBtn.svg" alt="" />
      </div>

      <div className={styles.score}>
        <span>{rating}</span>
        <img src="/star.svg" alt="" />
      </div>
    </Link>
  )
}

export default ProductCard
