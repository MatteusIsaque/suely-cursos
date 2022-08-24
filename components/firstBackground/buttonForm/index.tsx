import styles from './../../styles.module.scss'
import Link from 'next/link'

interface ParamButton {
  titulo: string
}



export function ButtonForm({ titulo }: ParamButton) {

  return (
    <Link  href="/?couter=#form">
      <button id="buttonZap" className={styles.button}>{titulo}</button>
    </Link>
  )
}