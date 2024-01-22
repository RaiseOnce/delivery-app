'use client'

import Header from '@/components/Header/Header'
import styles from './page.module.scss'
import Sidebar from '@/components/Sidebar/Sidebar'
import Search from '@/components/Search/Search'
import { ProductProps } from '@/types'
import { useEffect, useState } from 'react'
import ProductCards from '@/components/ ProductCards/ProductCards'
import { useFetching } from '@/hooks/useFetching'
import ProductService from '@/api/ProductService'

export default function Menu() {
  const [products, setProducts] = useState<ProductProps[]>([])

  const [getMenu, isLoading, error] = useFetching(async () => {
    const response = await ProductService.getAll()
    setProducts(response.data)
  })

  useEffect(() => {
    getMenu()
  }, [])

  return (
    <main className={styles.main}>
      <Sidebar />
      <div className={styles.menu}>
        <div className={styles.head}>
          <Header>Меню</Header>
          <Search placeholder="Введите блюдо или состав" />
        </div>
        <div className={styles.products}>
          {error && <h2>Ошибка: {error}</h2>}

          {isLoading ? (
            <h2>Загружаем продукты...</h2>
          ) : (
            <ProductCards products={products} />
          )}
        </div>
      </div>
    </main>
  )
}
