import { useState } from 'react'
import { empresa } from '../config/empresa'
import { gerarLinkWhatsApp, montarMensagemOrcamento } from '../utils/whatsapp'
import Icone from './Icone'
import './Orcamento.css'

const tiposCliente = ['Residencial', 'Comercial', 'Condomínio', 'Veículo', 'Outro']

const formularioInicial = {
  nome: '',
  telefone: '',
  tipoCliente: '',
  servico: '',
  quantidade: '',
  mensagem: '',
}

function validar(dados) {
  const erros = {}
  if (dados.nome.trim().length < 2) erros.nome = 'Informe seu nome.'
  const digitos = dados.telefone.replace(/\D/g, '')
  if (digitos.length < 10 || digitos.length > 11) {
    erros.telefone = 'Informe um telefone com DDD, ex.: (21) 99999-9999.'
  }
  if (!dados.tipoCliente) erros.tipoCliente = 'Selecione o tipo de cliente.'
  if (!dados.servico) erros.servico = 'Selecione o serviço desejado.'
  return erros
}

// Formata enquanto digita: (21) 99999-9999
function formatarTelefone(valor) {
  const d = valor.replace(/\D/g, '').slice(0, 11)
  if (d.length <= 2) return d.length ? `(${d}` : ''
  if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`
  if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`
}

export default function Orcamento() {
  const [dados, setDados] = useState(formularioInicial)
  const [erros, setErros] = useState({})
  const [linkEnviado, setLinkEnviado] = useState('')

  const aoMudar = (e) => {
    const { name, value } = e.target
    const valor = name === 'telefone' ? formatarTelefone(value) : value
    setDados((atual) => ({ ...atual, [name]: valor }))
    if (erros[name]) setErros((atual) => ({ ...atual, [name]: undefined }))
  }

  const aoEnviar = (e) => {
    e.preventDefault()
    const novosErros = validar(dados)
    setErros(novosErros)
    const primeiroErro = Object.keys(novosErros)[0]
    if (primeiroErro) {
      document.getElementById(`orc-${primeiroErro}`)?.focus()
      return
    }
    const link = gerarLinkWhatsApp(montarMensagemOrcamento(dados))
    window.open(link, '_blank', 'noopener,noreferrer')
    setLinkEnviado(link)
    setDados(formularioInicial)
  }

  const propsCampo = (nome) => ({
    id: `orc-${nome}`,
    name: nome,
    value: dados[nome],
    onChange: aoMudar,
    'aria-invalid': erros[nome] ? true : undefined,
    'aria-describedby': erros[nome] ? `orc-${nome}-erro` : undefined,
  })

  const mensagemErro = (nome) =>
    erros[nome] && (
      <span id={`orc-${nome}-erro`} className="orcamento__erro">
        {erros[nome]}
      </span>
    )

  return (
    <section id="orcamento" className="secao">
      <div className="container orcamento">
        <div className="orcamento__intro">
          <h2 className="secao__titulo">Solicite um orçamento</h2>
          <p className="secao__texto">
            Preencha os dados abaixo. O pedido é enviado ao WhatsApp da loja e respondido em
            horário comercial.
          </p>
          <ol className="orcamento__passos">
            <li>Preencha seus dados</li>
            <li>Envie pelo WhatsApp</li>
            <li>Receba o orçamento e agende o serviço</li>
          </ol>
        </div>

        <form className="orcamento__form" onSubmit={aoEnviar} noValidate>
          <div className="orcamento__campo">
            <label htmlFor="orc-nome">Nome *</label>
            <input type="text" autoComplete="name" {...propsCampo('nome')} />
            {mensagemErro('nome')}
          </div>

          <div className="orcamento__campo">
            <label htmlFor="orc-telefone">Telefone / WhatsApp *</label>
            <input
              type="tel"
              autoComplete="tel"
              inputMode="tel"
              placeholder="(21) 99999-9999"
              {...propsCampo('telefone')}
            />
            {mensagemErro('telefone')}
          </div>

          <div className="orcamento__linha">
            <div className="orcamento__campo">
              <label htmlFor="orc-tipoCliente">Tipo de cliente *</label>
              <select {...propsCampo('tipoCliente')}>
                <option value="">Selecione</option>
                {tiposCliente.map((tipo) => (
                  <option key={tipo}>{tipo}</option>
                ))}
              </select>
              {mensagemErro('tipoCliente')}
            </div>

            <div className="orcamento__campo">
              <label htmlFor="orc-quantidade">Quantidade de extintores</label>
              <input type="number" min="1" inputMode="numeric" {...propsCampo('quantidade')} />
            </div>
          </div>

          <div className="orcamento__campo">
            <label htmlFor="orc-servico">Serviço *</label>
            <select {...propsCampo('servico')}>
              <option value="">Selecione</option>
              {empresa.servicos.map((s) => (
                <option key={s.id}>{s.titulo}</option>
              ))}
              <option>Outro / não sei</option>
            </select>
            {mensagemErro('servico')}
          </div>

          <div className="orcamento__campo">
            <label htmlFor="orc-mensagem">Mensagem</label>
            <textarea
              rows="4"
              placeholder="Conte um pouco mais sobre o que você precisa (opcional)"
              {...propsCampo('mensagem')}
            />
          </div>

          <button type="submit" className="botao botao--whats orcamento__enviar">
            <Icone nome="whatsapp" tamanho={20} />
            Enviar pelo WhatsApp
          </button>

          <div className="orcamento__status" role="status">
            {linkEnviado && (
              <p>
                Seu pedido foi aberto no WhatsApp, em uma nova aba. Para concluir, envie a
                mensagem na conversa. Se a conversa não abriu,{' '}
                <a href={linkEnviado} target="_blank" rel="noopener noreferrer">
                  abra o WhatsApp com seu pedido
                </a>
                .
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  )
}
