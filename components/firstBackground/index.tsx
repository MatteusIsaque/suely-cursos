import Modelo from './../../img/Suely.png'
import Image from 'next/image'
import styles from "./styles.module.scss"


import { useEffect, useState } from 'react'


import PrimeiraImage from './../../img/logos.png'
import { Button } from '../button'
import { ButtonForm } from './buttonForm'



export default function FormAndWomen() {

  const [width, setWidth] = useState<number>(0)


  useEffect(() => {

    const largura = window.innerWidth;

    setWidth(largura)
  }, [])


  return (
    <div className={styles.backgroundFundoImage}>
      <div className={styles.divFormAndWomen}>
        <div className={styles.Modelo}>
          <Image src={Modelo} />
        </div>

        <div>
          {
            width <= 768 && <div className={styles.PrimeiroCilios}>
              <Image src={PrimeiraImage} layout="responsive" />
            </div>
          }
          <h1>

            CURSO DE EXTENSÃO DE CÍLIOS<br />
            EM BRASILIA
          </h1>
          <h3>
            Curso completo para Lash Designer<br />
            Aprenda a fazer todos os volumes
          </h3>
          <p>
            Aulas práticas e teóricas com tudo o que você precisa aprender para começar<br />
            a trabalhar na área de lash designer
          </p>

          <div className={styles.buttons}>
            <Button titulo="WHATSAPP" />
            <ButtonForm titulo="ENVIAR EMAIL" />
          </div>

        </div>

      </div>
    </div>
  )
}