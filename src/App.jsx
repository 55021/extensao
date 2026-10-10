import Header from './components/Header'
import Hero from './components/Hero'
import Sobre from './components/Sobre'
import Servicos from './components/Servicos'

export default function App() {
  return (
    <>
      <Header />
      <main id="conteudo">
        <Hero />
        <Sobre />
        <Servicos />
      </main>
    </>
  )
}
