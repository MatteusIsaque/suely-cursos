import { FormEvent, useState } from 'react'
import axios from 'axios'
import { Button } from '../button'

import styles from './styles.module.scss'
import { useRouter } from 'next/dist/client/router'

export default function Form() {
  const [email, setEmail] = useState()
  const [number, setNumber] = useState()
  const [mensagem, setMensagem] = useState()
  const router = useRouter()

  async function handleSubmit(e:FormEvent){
    e.preventDefault()

    const data = {
      emailTo: 'suelydudafashion@hotmail.com',
      title:'Email da campanha venda de cursos',
      domain:"https://suely-cursos.vercel.app/",
      email: email,
      number: number,
      messagem: mensagem
    }

    await axios.post('https://main-form.herokuapp.com/number-email', data)

    await router.reload()
  }

  return (
    <form id='form' className={styles.form} onSubmit={handleSubmit}>
      <input type='email' placeholder='email' required onChange={(e: any) => { setEmail(e.target.value) }} />
      <input type='number' placeholder='numero' required onChange={(e: any) => { setNumber(e.target.value) }} />
      <textarea placeholder='mensagem' onChange={(e: any) => { setMensagem(e.target.value) }} />

      <button>ENVIAR EMAIL</button>
    </form>
  )
}