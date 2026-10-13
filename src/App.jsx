import Header from './components/Header'
import Hero from './components/Hero'
import Sobre from './components/Sobre'
import Servicos from './components/Servicos'
import Orcamento from './components/Orcamento'
import Contato from './components/Contato'
import Footer from './components/Footer'
import WhatsAppFlutuante from './components/WhatsAppFlutuante'

export default function App() {
  return (
    <>
      <a href="#conteudo" className="pular-conteudo">
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Hero />
        <Sobre />
        <Servicos />
        <Orcamento />
        <Contato />
      </main>
      <Footer />
      <WhatsAppFlutuante />
    </>
  )
}
