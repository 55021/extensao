import { gerarLinkWhatsApp, mensagemPadrao } from '../utils/whatsapp'
import Icone from './Icone'
import './WhatsAppFlutuante.css'

export default function WhatsAppFlutuante() {
  return (
    <a
      href={gerarLinkWhatsApp(mensagemPadrao)}
      className="whats-flutuante"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
    >
      <Icone nome="whatsapp" tamanho={32} />
    </a>
  )
}
