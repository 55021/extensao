# Mandala Extintores — Homepage

Homepage da **Mandala Extintores** (Olaria, Rio de Janeiro – RJ), desenvolvida como projeto da
*Atividade Extensionista III: Tecnologia Aplicada à Inclusão Digital* (UNINTER – Engenharia de Software).

**Tema:** A integração de uma empresa de serviços de extintores ao mercado digital através do
estabelecimento de sua homepage. **ODS 8** – Trabalho decente e crescimento econômico.

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

## Trocar os dados de exemplo pelos dados reais

Os dados atuais são **placeholders**. Busque por `[PLACEHOLDER]` no projeto:

- [ ] `src/config/empresa.js` — telefone, WhatsApp, e-mail, CNPJ, endereço, CEP, horário,
      busca do mapa, redes sociais, lista de serviços e prazos ("quando")
- [ ] `src/components/Sobre.jsx` — texto com a história real da empresa
- [ ] `index.html` — dados estruturados (JSON-LD): telefone e endereço
- [ ] `public/favicon.svg` — substituir pelo logo da empresa, se houver

## Deploy

O build (`npm run build`) gera arquivos estáticos em `dist/`, compatíveis com Vercel, Netlify ou
GitHub Pages (neste último, configurar `base` em `vite.config.js`).
