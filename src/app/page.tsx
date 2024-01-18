'use client'

import Button from '@/components/Button/Button'
import styles from './page.module.scss'
import { MouseEvent, useState } from 'react'
import Input from '@/components/Input/Input'

export default function Home() {
  const [counter, setCounter] = useState<number>(0)

  const addCounter = (e: MouseEvent) => {
    console.log(e)
  }

  return (
    <main className={styles.main}>
      <Button onClick={addCounter}>Button</Button>
      <Button appearence="big" onClick={addCounter}>
        Button
      </Button>
      <Input placeholder="Email" />
    </main>
  )
}
