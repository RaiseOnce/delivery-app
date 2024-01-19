import Header from '@/components/Header/Header'
import styles from './page.module.scss'
import Sidebar from '@/components/Sidebar/Sidebar'
import Search from '@/components/Search/Search'
import ProductCard from '@/components/ProductCard/ProductCard'

export default function Menu() {
  return (
    <main className={styles.main}>
      <Sidebar />
      <div className={styles.menu}>
        <div className={styles.head}>
          <Header>Меню</Header>
          <Search placeholder="Введите блюдо или состав" />
        </div>
        <div className={styles.products}>
          <ProductCard />
        </div>
      </div>
    </main>
  )
}
