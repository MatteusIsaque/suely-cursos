  
import styles from './../../styles/Home.module.scss'
import Link from 'next/link'

import { useState } from "react"

export default function Popup() {

  const [popup, setPopup] = useState(true)

  return (
    <>
    {
        popup && <div div className={styles.permição} >
          <p>Usamos alguns tipos de cookies, ao continuar navegando, você concorda com a nossa&nbsp;
            <Link href="/politica-de-privacidade">Política de Privacidade</Link> .
          </p>

          <button style={{ borderRadius: "20px", border: "solid 1px black", cursor: "pointer" }} onClick={() => { setPopup(false) }}>
            ACEITO
          </button>
        </div>
      }
      </>
  )
}