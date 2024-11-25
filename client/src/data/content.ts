import { Section, Service, TeamMember, Testimonial, Valor } from '@/types'
import {
  CircleDollarSign,
  ShieldCheck,
  ChartNoAxesCombined,
  Compass,
  Calculator,
  Users,
} from 'lucide-react'
import rafaPic from '@/assets/Rafa.jpeg'
import cappiPic from '@/assets/Cappi.jpeg'
import fernandoPic from '@/assets/Fernando.jpg'

const auditContent: Section[] = [
  {
    title: 'Auditoria Contábil',
    items: [
      {
        boldText: 'Auditoria Externa e Interna:',
        text: 'auditoria de demonstrações financeiras ou auditoria de processos.',
      },
      {
        boldText: 'Auditoria Operacional e de Processos:',
        text: 'revisão de políticas e procedimentos, análise de eficiência.',
      },
    ],
  },
  {
    title: 'Auditoria de TI',
    items: [
      {
        boldText: 'Avaliação da Governança de TI:',
        text: 'avaliação da estrutura de governança, políticas e os processos de TI da empresa, garantindo que estejam alinhados aos objetivos estratégicos do negócio.',
      },
      {
        boldText: 'Análise de Riscos e Controles:',
        text: 'identificação e avaliação dos riscos à segurança da informação, à disponibilidade dos sistemas e à conformidade com regulamentações.',
      },
      {
        boldText: 'Conformidade com Normas e Regulamentações:',
        text: 'verificação da conformidade com normas como LGPD, ISO 27001, PCI DSS, etc.',
      },
      {
        boldText: 'Consultoria e Melhoria Contínua:',
        text: 'suporte para implementar melhorias e otimizar processos de TI.',
      },
      {
        boldText: 'Preparação para Auditoria Cooperativa:',
        text: 'preparação para auditoria com base na Resolução CMN BCB n° 4.893/21 sobre segurança cibernética.',
      },
    ],
  },
]

export const complianceContent: Section[] = [
  {
    title: 'Compliance',
    items: [
      {
        boldText: 'Revisão de Controles Internos:',
        text: 'análise de controle de qualidade, compliance regulatória.',
      },
      {
        boldText: 'Compliance com LGPD:',
        text: 'adequação à Lei Geral de Proteção de Dados.',
      },
      {
        boldText: 'Mapeamento de Riscos:',
        text: 'análise e mitigação de riscos financeiros, operacionais e de compliance.',
      },
      {
        boldText: 'Controles de Fraude e Segurança:',
        text: 'prevenção de fraudes, análise de integridade.',
      },
    ],
  },
]

export const financialManagementContent: Section[] = [
  {
    title: 'Contabilidade e Gestão Financeira',
    items: [
      {
        boldText: 'Demonstrações Contábeis:',
        text: 'elaboração de Balanço Patrimonial, Demonstração de Resultados, Demonstração de Mutações do Patrimônio Líquido.',
      },
      {
        boldText: 'Relatórios e Análises Financeiras:',
        text: 'análise de indicadores, relatórios gerenciais, gráficos de desempenho.',
      },
      {
        boldText: 'Contabilidade Gerencial e de Custos:',
        text: 'controle de custos, análise de margem, cálculo de preço de venda, implementação de IL - Indicadores de Liquidez, IE - Indicadores de Endividamento, ICG - Indicadores de Capital de Giro e IR - Indicadores de Rentabilidade.',
      },
      {
        boldText: 'Conformidade Contábil:',
        text: 'adequação a IFRS, CPC e normativas brasileiras.',
      },
      {
        boldText: 'Escrituração e Lançamentos:',
        text: 'lançamentos contábeis, controle patrimonial.',
      },
      {
        boldText: 'SPED e Obrigações Acessórias:',
        text: 'Escrituração Contábil Fiscal (ECF), Escrituração Contábil Digital (ECD).',
      },
    ],
  },
]

export const businessConsultingContent: Section[] = [
  {
    title: 'Consultoria Estratégica e Empresarial',
    items: [
      {
        boldText: 'Planejamento Estratégico:',
        text: 'elaboração de planejamento para crescimento de negócios.',
      },
      {
        boldText: 'Consultoria de Governança Corporativa:',
        text: 'desenvolvimento de estrutura de governança, compliance e ética.',
      },
      {
        boldText: 'Análise de Performance e KPIs:',
        text: 'implementação de indicadores-chave de desempenho.',
      },
      {
        boldText: 'Expansão de Mercado:',
        text: 'estratégias de posicionamento e competitividade.',
      },
      {
        boldText: 'Reestruturação e Recuperação de Empresas:',
        text: 'diagnósticos financeiros, renegociação de dívidas.',
      },
      {
        boldText: 'Consultoria de Gestão de Riscos:',
        text: 'identificação e mitigação de riscos empresariais.',
      },
      {
        boldText: 'Staff Loan:',
        text: 'terceirização de profissionais qualificados para demandas específicas.',
      },
      {
        boldText: 'Treinamentos:',
        text: 'capacitação em normas contábeis, técnicas de auditoria e controles internos.',
      },
    ],
  },
]
export const taxPlanningContent: Section[] = [
  {
    title: 'Tributos e Planejamento Fiscal',
    items: [
      {
        boldText: 'Planejamento Tributário:',
        text: 'estratégias para redução da carga tributária, análise fiscal preventiva.',
      },
      {
        boldText: 'Consultoria Fiscal:',
        text: 'assessoria em tributos federais, estaduais e municipais.',
      },
      {
        boldText: 'Regularização Fiscal:',
        text: 'levantamento de débitos fiscais, parcelamentos (federais, estaduais, municipais).',
      },
      {
        boldText: 'Guias de Recolhimento:',
        text: 'ICMS, ISS, DARF, INSS, FGTS.',
      },
      {
        boldText: 'Emissão de Certidões:',
        text: 'regularização de CND, certidões tributárias.',
      },
      {
        boldText: 'Declarações Fiscais e SPED Fiscal:',
        text: 'Escrituração Fiscal Digital (EFD), Contribuições, ICMS/IPI.',
      },
      {
        boldText: 'Declaração de Imposto de Renda (IRRF) – Pessoa Física:',
        text: 'assessoria completa na elaboração e envio do IR.',
      },
      {
        boldText: 'Consultoria para Lei do Bem - Lei nº 11.196/2005:',
        text: 'Incentivos fiscais para empresas que realizam pesquisa e desenvolvimento (P&D), oferecendo descontos no Imposto de Renda sobre despesas com inovação tecnológica.',
      },
      {
        boldText:
          'Consultoria para Incentivos ao Esporte (Lei nº 11.438/2006):',
        text: 'Permite que empresas patrocinem projetos esportivos e culturais e, em contrapartida, deduzam esses valores do Imposto de Renda.',
      },
    ],
  },
]

export const payrollManagementContent: Section[] = [
  {
    title: 'Gestão de Folha de Pagamento e Departamento Pessoal',
    items: [
      {
        boldText: 'Processamento de Folha de Pagamento:',
        text: 'cálculos de salários, horas extras, adicionais, férias.',
      },
      {
        boldText: 'Guias e Encargos Trabalhistas:',
        text: 'FGTS, INSS, CAGED.',
      },
      {
        boldText: 'Cumprimento de Obrigações Acessórias:',
        text: 'eSocial, EFD-Reinf, DCTFWeb.',
      },
      {
        boldText: 'Gestão de Benefícios:',
        text: 'controle de vale-transporte, plano de saúde, refeição.',
      },
      {
        boldText: 'Consultoria em Legislação Trabalhista:',
        text: 'suporte para dúvidas sobre CLT, afastamentos, demissões.',
      },
      {
        boldText: 'Gestão de Rotinas Trabalhistas:',
        text: 'admissões, demissões, controle de ponto, administração de contratos.',
      },
      {
        boldText: 'Serviços para Autônomos (RPA, INSS):',
        text: 'cálculos de RPA, recolhimentos de INSS.',
      },
      {
        boldText: 'Consultoria para MEI:',
        text: 'assessoria para MEI que estourou o faturamento e mudanças para regimes tributários mais complexos.',
      },
      {
        boldText: 'Revisão de Cálculos Trabalhistas:',
        text: 'análise detalhada de cálculos para ações trabalhistas, incluindo horas extras, rescisões e verbas devidas.',
      },
      {
        boldText: 'Perícia Contábil:',
        text: 'suporte técnico em litígios trabalhistas e avaliações judiciais.',
      },
      {
        boldText: 'Pareceres Técnicos:',
        text: 'elaboração de laudos periciais para embasar disputas e negociações.',
      },
      {
        boldText: 'Consultoria Trabalhista:',
        text: 'assessoria para empresas em conformidade com normas e legislações trabalhistas.',
      },
    ],
  },
]

export const services: Service[] = [
  {
    title: 'Contabilidade e Gestão Financeira',
    description:
      'Contabilidade e gestão financeira estratégica e precisa, com relatórios que auxiliam a tomada de decisão e o planejamento tributário.',
    icon: CircleDollarSign,
    link: 'contabilidade',
    content: financialManagementContent,
    heading:
      'Transformando números em estratégias para o crescimento do seu negócio',
  },
  {
    title: 'Auditoria Contábil e Auditoria de TI',
    description:
      'Auditorias detalhadas para assegurar a integridade dos processos e fortalecer a governança corporativa.',
    icon: ChartNoAxesCombined,
    link: 'auditoria',
    content: auditContent,
    heading: 'Auditorias que transformam desafios em resultados concretos',
  },
  {
    title: 'Compliance e Gestão de Riscos',
    description:
      'Soluções integradas para garantir conformidade, proteger dados e prevenir fraudes com segurança e eficiência.',
    icon: ShieldCheck,
    link: 'compliance',
    content: complianceContent,
    heading: 'Garantindo a segurança, ética e conformidade do seu negócio',
  },
  {
    title: 'Consultoria Estratégica e Empresarial',
    description:
      'Planejamento e soluções personalizadas para impulsionar negócios, fortalecer governança, otimizar performance e expandir mercados com inovação e eficiência.',
    icon: Compass,
    link: 'consultoria',
    content: businessConsultingContent,
    heading:
      'Convertendo desafios em estratégias para impulsionar o seu negócio',
  },
  {
    title: 'Tributos e Planejamento Fiscal',
    description:
      'Estratégias inteligentes para otimizar a carga tributária, regularizar obrigações fiscais e aproveitar incentivos legais, impulsionando a saúde financeira e o crescimento sustentável do seu negócio.',
    icon: Calculator,
    link: 'tributos',
    content: taxPlanningContent,
    heading: 'Reduzindo impostos e optimizando oportunidades',
  },
  {
    title: 'Gestão de Folha de Pagamento e Departamento Pessoal',
    description:
      'Soluções completas para gestão trabalhista, incluindo processamento de folha, cumprimento de obrigações acessórias, consultoria em legislação e suporte técnico para cálculos e perícias trabalhistas.',
    icon: Users,
    link: 'pagamento',
    content: payrollManagementContent,
    heading:
      'Simplificando processos e otimizando a administração de recursos humanos',
  },
]

export const team: TeamMember[] = [
  {
    name: 'Rafael Cavalheri Alexandre',
    role: 'Sócio executivo',
    bio: 'Rafael Cavalheri Alexandre é um especialista em governança, risco e compliance, com mais de 19 anos de experiência em auditoria contábil e de TI. Sua expertise em setores altamente regulados como bancos, cooperativas e seguradoras, aliada a um profundo conhecimento das normas contábeis e legislação, o habilita a oferecer soluções integradas que englobam tanto a integridade das informações financeiras quanto a segurança dos sistemas de informação. Com certificações como CNAI QTG, BCB, ISSO/IEC 17001 Auditor Líder e COBIT, além de ter sido cadastrado no Banco Central como responsável técnico por conduzir Auditoria Cooperativa, Rafael possui um conhecimento aprofundado das melhores práticas adotadas em processos e controles. Sua experiência como auditor contábil e auditor de TI o capacita a identificar e mitigar riscos, assegurando a conformidade da empresa com as regulamentações vigentes e a otimização dos processos de negócio.',
    image: rafaPic,
  },
  {
    name: 'Luis Fernando Cappi Monteiro',
    role: 'Sócio executivo',
    bio: 'Luis Fernando Cappi Monteiro possui mais de 20 anos de experiência em posições de liderança nas áreas de auditoria, controles internos, finanças e contabilidade. Com sólido conhecimento em governança, gestão de riscos, controles internos e práticas contábeis, destaca-se na condução de auditorias e na reestruturação de processos financeiros em grandes organizações. Hábil na formação e motivação de equipes, Luis Fernando garante alta performance e resultados consistentes, com experiência significativa em interações com órgãos reguladores, como BACEN e SUSEP.',
    image: cappiPic,
  },
  {
    name: 'Luiz Fernando de Paula',
    role: 'Sócio executivo',
    bio: 'Luiz Fernando de Paula é contador, Gestor Tributário e Controller. Com mais de 20 anos de experiência nas áreas administrativa, financeira e estratégica de empresas multinacionais, é especialista em finanças, controle orçamentário e processos contábeis e tributários, com forte ênfase na otimização de custos. Possui ampla experiência em soluções contábeis, fiscais e de folha de pagamento, além de atuação em governança financeira e compliance. Também é corretor registrado na SUSEP, especializado em investimentos e blindagem patrimonial.  Possui sólido conhecimento em elaboração de demonstrações contábeis, balanço patrimonial e balancetes.',
    image: fernandoPic,
  },
]

export const testimonials: Testimonial[] = [
  {
    text: 'A RLFOCUS transformou nossa contabilidade e nos ajudou a planejar com segurança o futuro da empresa.',
    author: 'Cliente Satisfeito',
    company: 'Empresa ABC',
  },
  {
    text: 'Profissionalismo, dedicação e transparência em cada etapa da nossa auditoria. Recomendo!',
    author: 'Cliente Satisfeito',
    company: 'Empresa XYZ',
  },
]

export const valores: Valor[] = [
  {
    title: 'Comprometimento',
    description:
      'Nosso foco é o sucesso e a tranquilidade dos nossos clientes.',
  },
  {
    title: 'Excelência',
    description:
      'Oferecer serviços contábeis e de auditoria que não apenas atendem, mas superam as expectativas dos clientes, garantindo segurança e transparência na gestão financeira.',
  },
  {
    title: 'Inovação',
    description:
      'Investimento em tecnologia e processos inovadores, assegurando que as soluções contábeis sejam modernas e adaptadas às necessidades específicas de cada cliente.',
  },
  {
    title: 'Integridade',
    description:
      'A Confidencialidade, ética e a transparência nas interações com clientes e parceiros são priorizadas, estabelecendo relações de confiança duradouras.',
  },
]
