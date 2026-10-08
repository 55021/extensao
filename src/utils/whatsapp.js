import { empresa } from '../config/empresa'

// Gera um link "clique para conversar" do WhatsApp com mensagem pré-preenchida.
export function gerarLinkWhatsApp(mensagem = '', numero = empresa.whatsapp) {
  const digitos = String(numero).replace(/\D/g, '')
  const texto = mensagem ? `?text=${encodeURIComponent(mensagem)}` : ''
  return `https://wa.me/${digitos}${texto}`
}

export const mensagemPadrao = `Olá, ${empresa.nome}! Vim pelo site e gostaria de mais informações.`

// Monta o texto do pedido de orçamento enviado pelo formulário.
export function montarMensagemOrcamento({ nome, telefone, tipoCliente, servico, quantidade, mensagem }) {
  const linhas = [
    `Olá, ${empresa.nome}! Gostaria de um orçamento.`,
    '',
    `*Nome:* ${nome}`,
    `*Telefone:* ${telefone}`,
    `*Tipo de cliente:* ${tipoCliente}`,
    `*Serviço:* ${servico}`,
  ]
  if (quantidade) linhas.push(`*Quantidade de extintores:* ${quantidade}`)
  if (mensagem) linhas.push('', `*Mensagem:* ${mensagem}`)
  return linhas.join('\n')
}
