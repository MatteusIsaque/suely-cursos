import styles from './style.module.scss';

function Tecnica() {
  return (
    <div className={styles.tecnicaDiv}>
      <h2 style={{textAlign: 'center'}}>Técnicas</h2>
      <p>Fio a Fio clássico: É adicionado apenas um fio sintético a cada fio natural.<br/><br/>
        Volume russo: O volume russo nos cílios é uma técnica de colocação de cílios com fios sintéticos, para dar um maior volume.<br/><br/>
        Híbrido: O alongamento de cílios híbrido é a fusão do clássico fio a fio com o volume russo.<br/><br/>
        Mega volume: São colocados fios ultrafinos uns nos outros, até ficar com grande volume.<br/><br/>
        Efeito molhado: O efeito molhado é uma técnica semelhante ao volume russo, porém com o aspecto de &apos;cílio molhado&apos;<br/><br/>
        Volume brasileiro: Técnica usando cílios em formato Y, que não perdem a curvatura. Ela proporciona fios mais abertos, mas, com um acabamento como o volume russo.
        Aplicação leva de 1:30 a 2 hs</p>
    </div>
  )
}


export { Tecnica }