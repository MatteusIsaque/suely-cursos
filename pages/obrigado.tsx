import styles from './../styles/obrigado.module.scss'
import Link from 'next/link'
import Head from 'next/head'



export default function Obrigado() {


  return (
    <>
    <Head>
      <title>Obrigado</title>
    </Head>
    <main className={styles.main}>
      <h1>Mensangem enviada, obrigado</h1>
      <Link href='/'>
        <button className={styles.button}>VOLTAR</button>
      </Link>
    </main>
    </>
  )
}