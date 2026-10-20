import type { ContentItem, Metric, MethodStep } from "@/types";

export const metrics: Metric[] = [
  { value: "+90 mil", label: "leads gerados" },
  { value: "+227", label: "contratações realizadas" },
  { value: "+454 mil", label: "seguidores gerados" },
  { value: "+R$ 817 mil", label: "em vendas diretas" },
];

export const problems: ContentItem[] = [
  {
    title: "O marketing não traz o cliente certo.",
    description: "Há volume de contatos, mas pouca aderência ao perfil que a empresa quer atender.",
  },
  {
    title: "A equipe não segue um padrão.",
    description: "Cada pessoa vende de um jeito e o resultado muda conforme quem atende.",
  },
  {
    title: "As vendas dependem de sorte.",
    description: "Sem processo e métricas, o faturamento oscila e fica difícil planejar o próximo passo.",
  },
];

export const solutions: ContentItem[] = [
  {
    title: "Comunicação estratégica e posicionamento",
    description: "Uma mensagem clara para atrair o cliente que a empresa quer atender.",
  },
  {
    title: "Treinamento comercial",
    description: "Um padrão de atendimento e abordagem que a equipe consegue repetir.",
  },
  {
    title: "Campanhas de Google Ads e Meta Ads",
    description: "Anúncios orientados a atrair demanda qualificada e acompanhar o retorno.",
  },
  {
    title: "Processos comerciais e métricas",
    description: "Etapas definidas e indicadores para enxergar onde a venda avança ou trava.",
  },
  {
    title: "Pós-venda e retenção",
    description: "Relacionamento contínuo para manter clientes e abrir novas oportunidades.",
  },
];

export const methodSteps: MethodStep[] = [
  {
    number: "01",
    title: "Fundação Estratégica",
    description: "Posicionamento, mensagem e metas definidos antes de qualquer ação.",
  },
  {
    number: "02",
    title: "Time de Alta Performance",
    description: "Treinamento e padrão comercial para a equipe atuar com consistência.",
  },
  {
    number: "03",
    title: "Aceleração de Receita",
    description: "Campanhas e processos conectados para transformar atenção em vendas.",
  },
  {
    number: "04",
    title: "Fidelização Inteligente",
    description: "Pós-venda e retenção para sustentar o crescimento ao longo do tempo.",
  },
];

export const differentials: ContentItem[] = [
  { title: "Estrutura", description: "Cada ação se apoia em um plano, não em improviso." },
  { title: "Mensuração", description: "Indicadores acompanhados para decidir com clareza." },
  { title: "Crescimento sustentável", description: "Evolução construída com constância, passo a passo." },
  { title: "Experiência", description: "Comunicação e vendas tratadas de ponta a ponta." },
  { title: "Agilidade", description: "Ajustes rápidos a partir do que os números mostram." },
  { title: "Parceria", description: "Trabalho próximo da gestão e da equipe da empresa." },
];
