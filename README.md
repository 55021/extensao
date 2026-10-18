# Mandala Extintores — Homepage

Homepage da **Mandala Extintores** (Olaria, Rio de Janeiro – RJ), desenvolvida como projeto da
*Atividade Extensionista III: Tecnologia Aplicada à Inclusão Digital* (UNINTER – Engenharia de Software).

**Tema:** A integração de uma empresa de serviços de extintores ao mercado digital através do
estabelecimento de sua homepage. **ODS 8** – Trabalho decente e crescimento econômico.

**Site publicado:** https://mandala-extintores.vercel.app

## Tecnologias

- HTML5, CSS3 (sem frameworks de UI) e JavaScript
- [React](https://react.dev) + [Vite](https://vite.dev)

## Como rodar

Requer Node.js 20+.

```bash
npm install
npm run dev       # servidor de desenvolvimento em http://localhost:5173
npm run build     # gera a versão de produção em dist/
npm run preview   # serve a pasta dist/ localmente
npm run lint      # verifica o código
```

## Estrutura

```
src/
  config/empresa.js      # TODOS os dados da empresa (telefone, endereço, serviços...)
  utils/whatsapp.js      # geração dos links e mensagens do WhatsApp
  components/            # uma seção do site por componente (JSX + CSS)
  styles/global.css      # variáveis de cor, reset e estilos compartilhados
```

Seções: Início, Sobre, Serviços, Orçamento (formulário enviado via WhatsApp), Contato (com mapa)
e botão flutuante do WhatsApp.

## Dados da empresa

Todos os dados exibidos (contatos, endereço, horário, CNPJ, serviços e prazos) ficam em
`src/config/empresa.js` e foram confirmados com os proprietários. As redes sociais ficam
ocultas enquanto os campos estiverem vazios.

## Deploy

O site está hospedado na Vercel (projeto `mandala-extintores`). Para publicar uma nova versão:

```bash
npx vercel@latest deploy --prod
```

O build (`npm run build`) gera arquivos estáticos em `dist/`.
