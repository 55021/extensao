import { empresa } from '../config/empresa'
import Icone from './Icone'
import './Sobre.css'

export default function Sobre() {
  return (
    <section id="sobre" className="secao">
      <div className="container sobre">
        <div>
          <h2 className="secao__titulo">Segurança contra incêndio feita por vizinhos</h2>
          {/* [PLACEHOLDER] Texto a ser ajustado com a história real contada pelos proprietários */}
          <p className="secao__texto">
            A {empresa.nome} é uma empresa do bairro de {empresa.endereco.bairro}, na Zona Norte
            do {empresa.endereco.cidade}, especializada em extintores e equipamentos de combate
            a incêndio. Atendemos residências, comércios, condomínios, escolas e veículos com o
            compromisso de manter cada cliente protegido e regularizado.
          </p>
          <p className="secao__texto">
            Nosso trabalho segue as normas técnicas da ABNT e os requisitos do INMETRO, para que
            você tenha tranquilidade na hora da vistoria e, acima de tudo, equipamentos que
            funcionam quando mais importa.
          </p>
        </div>

        <ul className="sobre__diferenciais">
          {empresa.diferenciais.map((item) => (
            <li key={item}>
              <Icone nome="check" tamanho={22} className="sobre__check" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
