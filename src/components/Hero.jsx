import { empresa } from '../config/empresa'
import { gerarLinkWhatsApp, mensagemPadrao } from '../utils/whatsapp'
import Icone from './Icone'
import './Hero.css'

// Geometria do manômetro: arco de -62° a 62° (0° = vertical), pivô em (130, 150)
const PIVO = { x: 130, y: 150 }
const ponto = (raio, graus) => {
  const rad = (graus * Math.PI) / 180
  return [PIVO.x + raio * Math.sin(rad), PIVO.y - raio * Math.cos(rad)]
}
const arco = (raio, de, ate) => {
  const [x1, y1] = ponto(raio, de)
  const [x2, y2] = ponto(raio, ate)
  return `M ${x1} ${y1} A ${raio} ${raio} 0 0 1 ${x2} ${y2}`
}
const marcas = Array.from({ length: 9 }, (_, i) => -62 + i * 15.5)

function Manometro() {
  return (
    <svg
      className="manometro"
      viewBox="0 0 260 260"
      role="img"
      aria-label="Manômetro de extintor com o ponteiro na faixa verde, que indica carga correta"
    >
      <circle cx="130" cy="130" r="126" className="manometro__aro" />
      <circle cx="130" cy="130" r="115" className="manometro__aco" />
      <circle cx="130" cy="130" r="104" className="manometro__mostrador" />

      <path d={arco(82, -62, -22)} className="manometro__faixa manometro__faixa--baixa" />
      <path d={arco(82, -22, 22)} className="manometro__faixa manometro__faixa--ok" />
      <path d={arco(82, 22, 62)} className="manometro__faixa manometro__faixa--alta" />

      {marcas.map((graus) => {
        const [x1, y1] = ponto(62, graus)
        const [x2, y2] = ponto(71, graus)
        return <line key={graus} x1={x1} y1={y1} x2={x2} y2={y2} className="manometro__marca" />
      })}

      <text x="80" y="190" className="manometro__rotulo">
        RECARREGAR
      </text>
      <text x="180" y="190" className="manometro__rotulo">
        EXCESSO
      </text>
      <text x="130" y="222" className="manometro__marca-texto">
        MANDALA
      </text>

      <g className="manometro__ponteiro">
        <polygon points="126.5,158 130,74 133.5,158" />
        <circle cx={PIVO.x} cy={PIVO.y} r="9" />
      </g>
      <circle cx={PIVO.x} cy={PIVO.y} r="3" className="manometro__pivo" />
    </svg>
  )
}

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="container hero__conteudo">
        <div className="hero__texto">
          <h1 className="hero__titulo">
            Recarga, manutenção e venda de extintores em {empresa.endereco.bairro}
          </h1>
          <p className="hero__descricao">
            Atendemos residências, comércios, condomínios e veículos na Zona Norte do{' '}
            {empresa.endereco.cidade}, com serviços conforme a ABNT NBR 12962 e selo do INMETRO.
          </p>
          <div className="hero__acoes">
            <a href="#orcamento" className="botao hero__botao-principal">
              Pedir orçamento
            </a>
            <a
              href={gerarLinkWhatsApp(mensagemPadrao)}
              className="botao botao--contorno hero__botao-whats"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icone nome="whatsapp" tamanho={20} />
              Falar no WhatsApp
            </a>
          </div>
          <ul className="hero__selos">
            <li>Selo INMETRO</li>
            <li>ABNT NBR 12962</li>
            <li>
              {empresa.horario[0].dias}, {empresa.horario[0].horas}
            </li>
          </ul>
        </div>

        <figure className="hero__figura">
          <Manometro />
        </figure>
      </div>
    </section>
  )
}
