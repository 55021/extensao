# Mandala Extintores

Site da Mandala Extintores, loja de extintores em Olaria, no Rio de Janeiro. Feito para a
Atividade Extensionista III da UNINTER (Engenharia de Software).

Site no ar: https://mandala-extintores.vercel.app

## Tecnologias

HTML, CSS, JavaScript, React e Vite.

## Como rodar

Precisa do Node.js 20.19 ou mais recente.

```
npm install
npm run dev
```

O site abre em http://localhost:5173. Para gerar a versão de produção, use `npm run build`
(os arquivos ficam na pasta `dist`).

## Organização

- `src/config/empresa.js`: dados da loja (telefone, endereço, horário e serviços)
- `src/utils/whatsapp.js`: monta os links e as mensagens do WhatsApp
- `src/components`: um componente para cada seção do site
- `src/styles/global.css`: cores e estilos usados no site todo

Para mudar algum dado da loja, é só editar o `empresa.js`.

## Deploy

O site está hospedado na Vercel e pode ser acessado em https://mandala-extintores.vercel.app.
Para publicar uma nova versão:

```
npx vercel deploy --prod
```
