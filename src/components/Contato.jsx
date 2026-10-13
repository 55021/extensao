import { empresa, enderecoCompleto } from '../config/empresa'
import { gerarLinkWhatsApp, mensagemPadrao } from '../utils/whatsapp'
import Icone from './Icone'
import './Contato.css'

export default function Contato() {
  const telefoneLink = `tel:+55${empresa.telefone.replace(/\D/g, '')}`
  const mapaSrc = `https://www.google.com/maps?q=${encodeURIComponent(empresa.buscaMapa)}&output=embed`
  const rotasHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(empresa.buscaMapa)}`

  return (
    <section id="contato" className="secao secao--aco">
      <div className="container">
        <div className="secao__cabecalho">
          <h2 className="secao__titulo">Fale com a gente</h2>
          <p className="secao__texto">
            Estamos em {empresa.endereco.bairro}, prontos para atender você.
          </p>
        </div>

        <div className="contato">
          <ul className="contato__lista">
            <li>
              <span className="contato__icone contato__icone--whats">
                <Icone nome="whatsapp" />
              </span>
              <div>
                <h3>WhatsApp</h3>
                <a href={gerarLinkWhatsApp(mensagemPadrao)} target="_blank" rel="noopener noreferrer">
                  Falar no WhatsApp
                </a>
              </div>
            </li>
            <li>
              <span className="contato__icone">
                <Icone nome="telefone" />
              </span>
              <div>
                <h3>Telefone</h3>
                <a href={telefoneLink}>{empresa.telefone}</a>
              </div>
            </li>
            <li>
              <span className="contato__icone">
                <Icone nome="email" />
              </span>
              <div>
                <h3>E-mail</h3>
                <a href={`mailto:${empresa.email}`}>{empresa.email}</a>
              </div>
            </li>
            <li>
              <span className="contato__icone">
                <Icone nome="local" />
              </span>
              <div>
                <h3>Endereço</h3>
                <address>{enderecoCompleto()}</address>
                <a href={rotasHref} target="_blank" rel="noopener noreferrer">
                  Ver no mapa
                </a>
              </div>
            </li>
            <li>
              <span className="contato__icone">
                <Icone nome="relogio" />
              </span>
              <div>
                <h3>Horário de atendimento</h3>
                {empresa.horario.map((h) => (
                  <p key={h.dias}>
                    {h.dias}: {h.horas}
                  </p>
                ))}
              </div>
            </li>
          </ul>

          <div className="contato__mapa">
            <iframe
              title={`Mapa da localização da ${empresa.nome}`}
              src={mapaSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
