import React from 'react'
import styles from './page.module.scss'
import Header from '@/components/Header/Header'
import Button from '@/components/Button/Button'
import Input from '@/components/Input/Input'
import Link from 'next/link'

const Register = () => {
  return (
    <div>
      <div className="container">
        <div className={styles.containerInner}>
          <div className={styles.sidebar}>
            <img className={styles.logo} src="/logo.svg" alt="" />
          </div>

          <div className={styles.content}>
            <Header className={styles.header}>Вход</Header>
            <form className={styles.form}>
              <div className={styles.inputWrapper}>
                <span>Ваш email</span>
                <Input placeholder="E-mail" className={styles.input} />
              </div>

              <div className={styles.inputWrapper}>
                <span>Ваш пароль</span>
                <Input placeholder="Пароль" className={styles.input} />
              </div>
              <Button className={styles.btn} appearence="big">
                Вход
              </Button>
              <div className={styles.foot}>
                <span>Нет аккаунта?</span>
                <Link href="#">
                  <span>Зарегестрироваться</span>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
