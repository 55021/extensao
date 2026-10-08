import { useEffect, useState } from 'react'
import { empresa } from '../config/empresa'
import Icone from './Icone'
import './Header.css'

const links = [
  { href: '#inicio', rotulo: 'Início' },
  { href: '#sobre', rotulo: 'Sobre' },
  { href: '#servicos', rotulo: 'Serviços' },
  { href: '#orcamento', rotulo: 'Orçamento' },
  { href: '#contato', rotulo: 'Contato' },
]

export default function Header() {
  const [menuAberto, setMenuAberto] = useState(false)
  const [rolou, setRolou] = useState(false)

  useEffect(() => {
    const aoRolar = () => setRolou(window.scrollY > 10)
    aoRolar()
    window.addEventListener('scroll', aoRolar, { passive: true })
    return () => window.removeEventListener('scroll', aoRolar)
  }, [])

  useEffect(() => {
    if (!menuAberto) return
    const aoTeclar = (e) => e.key === 'Escape' && setMenuAberto(false)
    document.addEventListener('keydown', aoTeclar)
    return () => document.removeEventListener('keydown', aoTeclar)
  }, [menuAberto])

  const fecharMenu = () => setMenuAberto(false)

  return (
    <header className={`header ${rolou ? 'header--rolou' : ''}`}>
      <div className="container header__conteudo">
        <a href="#inicio" className="header__logo" onClick={fecharMenu}>
          <span className="header__logo-icone">
            <Icone nome="chama" tamanho={20} />
          </span>
          {empresa.nome}
        </a>

        <button
          type="button"
          className="header__menu-botao"
          aria-expanded={menuAberto}
          aria-controls="menu-principal"
          aria-label={menuAberto ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setMenuAberto((aberto) => !aberto)}
        >
          <Icone nome={menuAberto ? 'fechar' : 'menu'} tamanho={26} />
        </button>

        <nav
          id="menu-principal"
          className={`header__nav ${menuAberto ? 'header__nav--aberto' : ''}`}
          aria-label="Menu principal"
        >
          <ul>
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={fecharMenu}>
                  {link.rotulo}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
