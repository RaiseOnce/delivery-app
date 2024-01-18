'use client'

import Button from '@/components/Button/Button'
import styles from './page.module.scss'
import { MouseEvent, useState } from 'react'

export default function Home() {
  const [counter, setCounter] = useState<number>(0)

  return (
    <main className={styles.main}>
      <Button onClick={() => setCounter(1)}>Button</Button>
      <Button appearence="big" onClick={() => setCounter(1)}>
        Button
      </Button>
    </main>
  )
}
