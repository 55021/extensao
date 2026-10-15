import { empresa } from '../config/empresa'
import Icone from './Icone'
import './Footer.css'

const ano = new Date().getFullYear()

export default function Footer() {
  const redes = Object.entries(empresa.redes).filter(([, url]) => url)

  return (
    <footer className="footer">
      <div className="container footer__conteudo">
        <div>
          <p className="footer__nome">
            <img src="/logo-emblema.png" alt="" width="192" height="192" />
            {empresa.nome}
          </p>
          <p>{empresa.descricaoCurta}</p>
        </div>

        {redes.length > 0 && (
          <ul className="footer__redes" aria-label="Redes sociais">
            {redes.map(([rede, url]) => (
              <li key={rede}>
                <a href={url} target="_blank" rel="noopener noreferrer" aria-label={rede}>
                  <Icone nome={rede} />
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="container footer__base">
        <p>
          © {ano} {empresa.nome}. CNPJ {empresa.cnpj}.
        </p>
        <p>Site desenvolvido como projeto de extensão universitária – UNINTER.</p>
      </div>
    </footer>
  )
}
