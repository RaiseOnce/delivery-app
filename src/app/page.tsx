'use client'

import Header from '@/components/Header/Header'
import styles from './page.module.scss'
import Sidebar from '@/components/Sidebar/Sidebar'
import Search from '@/components/Search/Search'
import { PREFIX } from '@/api/API'
import { ProductProps } from '@/types'
import { useEffect, useState } from 'react'
import axios, { AxiosError } from 'axios'
import ProductCards from '@/components/ ProductCards/ProductCards'

export default function Menu() {
  const [products, setProducts] = useState<ProductProps[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isError, setIsError] = useState<string | undefined>('')

  const getMenu = async () => {
    try {
      setIsLoading(true)
      const { data } = await axios.get<ProductProps[]>(`${PREFIX}/products`)
      setProducts(data)
    } catch (e: any) {
      if (e instanceof AxiosError) {
        setIsError(e.message)
      }
    } finally {
      setIsLoading(false)
    }
  }

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
          {isError && <h2>Ошибка: {isError}</h2>}

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
