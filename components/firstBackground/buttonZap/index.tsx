import Image from "next/image";
import Link from "next/link";

import styles from './styles.module.scss'

import WhatsApp from './../../../img/whatsapp.png'

export default function ButtonZap() {

  return (
    <div id="zapFlutuante" className={styles.ButtonFlutuanteZap}>
      <Link href="https://api.whatsapp.com/send?phone=556199492015&text=Ol%C3%A1%20Suely%2C%20eu%20gostaria%20de%20saber%20mais%20sobre%20o%20seu%20trabalho..">
        <Image id="zapFlutuante" src={WhatsApp} width={60} height={60} />
      </Link>
    </div>
  )
}