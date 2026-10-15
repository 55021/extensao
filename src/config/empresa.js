// ============================================================
// DADOS DA EMPRESA
// Este é o ÚNICO arquivo que precisa ser editado para trocar
// os dados de exemplo (placeholders) pelos dados reais.
// Itens marcados com [PLACEHOLDER] devem ser confirmados com
// os proprietários.
// ============================================================

export const empresa = {
  nome: 'Mandala Extintores',
  slogan: 'Segurança contra incêndio para sua casa, comércio e condomínio',
  descricaoCurta:
    'Recarga, manutenção e venda de extintores no bairro de Olaria, Rio de Janeiro.',

  // Fonte: perfil da loja no Google
  telefone: '(21) 2562-4108',
  // WhatsApp (21) 96421-4104: apenas dígitos, com código do país (55) e DDD (21)
  whatsapp: '5521964214104',
  whatsappExibicao: '(21) 96421-4104',
  email: 'mandala.novafire@bol.com.br',
  cnpj: '09.188.600/0001-08',

  endereco: {
    logradouro: 'Rua Antônio Rêgo, 856',
    bairro: 'Olaria',
    cidade: 'Rio de Janeiro',
    uf: 'RJ',
    cep: '21073-312',
  },

  horario: [{ dias: 'Segunda a sexta', horas: '8h às 17h' }],

  // Busca usada no mapa incorporado do Google Maps
  buscaMapa: 'Mandala Extintores, Rua Antônio Rêgo, 856 - Olaria, Rio de Janeiro - RJ, 21073-312',

  // [PLACEHOLDER] Deixe vazio ('') para ocultar a rede social
  redes: {
    instagram: '',
    facebook: '',
  },

  // [PLACEHOLDER] Confirmar os prazos com os proprietários (referência: ABNT NBR 12962 e 12779)
  servicos: [
    {
      id: 'recarga',
      titulo: 'Recarga de extintores',
      descricao:
        'Recarga de extintores de água, pó químico (BC e ABC) e CO₂, com selo do INMETRO e prazo combinado.',
      icone: 'recarga',
      quando: 'Anual ou após o uso',
    },
    {
      id: 'manutencao',
      titulo: 'Manutenção preventiva',
      descricao:
        'Inspeção, troca de componentes e verificação de pressão para manter seus extintores sempre prontos para uso.',
      icone: 'manutencao',
      quando: 'Anual',
    },
    {
      id: 'venda',
      titulo: 'Venda de extintores',
      descricao:
        'Extintores novos para residências, veículos, comércios e condomínios, com orientação sobre o tipo ideal.',
      icone: 'venda',
      quando: 'Imóvel novo, veículo ou troca',
    },
    {
      id: 'teste-hidrostatico',
      titulo: 'Teste hidrostático',
      descricao:
        'Ensaio obrigatório que garante a resistência do cilindro, realizado conforme as normas técnicas.',
      icone: 'teste',
      quando: 'A cada 5 anos',
    },
    {
      id: 'sinalizacao',
      titulo: 'Sinalização de emergência',
      descricao:
        'Placas fotoluminescentes de rota de fuga, saída e localização de extintores e hidrantes.',
      icone: 'sinalizacao',
      quando: 'Exigida na vistoria dos Bombeiros',
    },
    {
      id: 'mangueiras',
      titulo: 'Mangueiras e hidrantes',
      descricao:
        'Teste e manutenção de mangueiras de incêndio e abrigos de hidrante para prédios e condomínios.',
      icone: 'mangueira',
      quando: 'Inspeção semestral, teste anual',
    },
  ],

  diferenciais: [
    'Atendimento local em Olaria e bairros vizinhos',
    'Serviços conforme normas da ABNT e selo do INMETRO',
    'Apoio na regularização junto ao Corpo de Bombeiros',
    'Retirada e entrega combinadas com o cliente',
  ],
}

export const enderecoCompleto = (e = empresa.endereco) =>
  `${e.logradouro} – ${e.bairro}, ${e.cidade} – ${e.uf}, ${e.cep}`
