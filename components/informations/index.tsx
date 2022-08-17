import styles from './styles.module.scss'

import suelyCurso from './../../img/suely-curso.png'
import Image from 'next/image'


import { useEffect, useState } from 'react'
import Form from '../form'


export default function ExemploLashDesigner() {

  const [width, setWidth] = useState<number>(0)



  useEffect(() => {

    const largura = window.innerWidth;

    setWidth(largura)
  }, [])


  return (
    <div className={styles.Info}>
      <h2 style={{ marginTop: '10px' }}>SOBRE O CURSO</h2>
      <p>O curso é feito para pessoas que desejam sair com experiência para trabalhar na área, pois temos uma metodologia diferenciada que prepara qualquer aluno, seja com ou sem experiência na área, para fazer dele(a) um(a) profissional da área.</p>

      <p>O curso também é completo, você poderá aprender a fazer todas as extensões, saindo uma profissional da área.</p>

      <h2>DURAÇÃO DO CURSO</h2>
      <p>O curso tem o tempo de duração de dois dias, com todos os materiais já estão inclusos no pacote, sendo necessário somente a modelo.</p>

      <h2>SUPORTE PELO WHATSAPP</h2>
      <p>Diferente de muitos cursos o nosso tem um diferencial, não queremos só vender cursos! Nosso objetivo é ter um papel importante na sua carreira. Então você terá um atendimento pelo WhatsApp mesmo após ter completado o treinamento. Dessa maneira fica muito mais simples crescer na área e se tornar uma profissional de lash Designer. Qual outro curso você conhece que oferece tantas vantagens?</p>

      {/* <h2 style={{ textAlign: 'center' }}>Conteúdo Do Programa</h2> */}

      <h2>EXIGENCIAS</h2>
      <p>Saber ler e escrever. Não é obrigatório ter Ensino Médio, pois se trata de um curso livre. Ter 100% dos funcionamentos das mãos e dos dedos, pois a profissão exige muito de movimentos das mãos e dedos.</p>

      <div className={styles.information}>
        <div className={styles.image}>
          <Image src={suelyCurso} />
        </div>
        <div>
          <h2>QUEM É SUELY?</h2>
          <p>
            Suely Albuquerque é uma especialista na área de extensão de cílios que está a mais de 4 anos. Somando mais de 4 mil atendimentos, ela agora está abrindo vagas para seu curso voltado para mulheres que querem trabalhar e empreender na área.
          </p>
          <p>
            Suely também é CO da Macas Suely Albuquerque e Studio Suely Albuquerque, todos empreendimentos voltados para extensão de cílios.
          </p>
        </div>
      </div>


      <Form />
    </div>
  )
}