import { empresa } from '../config/empresa'
import Icone from './Icone'
import './Servicos.css'

export default function Servicos() {
  return (
    <section id="servicos" className="secao secao--aco">
      <div className="container">
        <div className="secao__cabecalho">
          <h2 className="secao__titulo">Serviços</h2>
          <p className="secao__texto">
            Confira os serviços oferecidos e a periodicidade recomendada para cada um, de acordo
            com as normas técnicas.
          </p>
        </div>

        <ul className="servicos__lista">
          {empresa.servicos.map((servico) => (
            <li key={servico.id} className="servico">
              <span className="servico__icone">
                <Icone nome={servico.icone} tamanho={26} />
              </span>
              <div>
                <h3 className="servico__titulo">{servico.titulo}</h3>
                <p className="servico__descricao">{servico.descricao}</p>
              </div>
              <p className="servico__quando">
                <Icone nome="relogio" tamanho={18} />
                <span>
                  <span className="sr-only">Quando fazer: </span>
                  {servico.quando}
                </span>
              </p>
            </li>
          ))}
        </ul>

        <p className="servicos__cta">
          <a href="#orcamento" className="botao botao--primario">
            Pedir orçamento
          </a>
        </p>
      </div>
    </section>
  )
}
