import styles from './page.module.scss'
import Sidebar from '@/components/Sidebar/Sidebar'

export default function Menu() {
  return (
    <main className={styles.main}>
      <Sidebar />
      <div className={styles.menu}>Menu</div>
    </main>
  )
}
