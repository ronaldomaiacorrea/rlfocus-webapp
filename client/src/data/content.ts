import { Service, TeamMember, Testimonial } from '@/types'
import { Briefcase, BarChart, UserPlus, Shield } from 'lucide-react'
import rafaPic from '@/assets/Rafa.jpeg'
import cappiPic from '@/assets/Cappi.jpeg'
import fernandoPic from '@/assets/Fernando.jpg'

export const services: Service[] = [
  {
    title: 'Contabilidade Empresarial Completa',
    description:
      'Gestão contábil estratégica e precisa, com relatórios que auxiliam a tomada de decisão e o planejamento tributário.',
    icon: Briefcase,
  },
  {
    title: 'Auditoria Financeira e Operacional',
    description:
      'Auditorias detalhadas para assegurar a integridade dos processos e fortalecer a governança corporativa.',
    icon: BarChart,
  },
  {
    title: 'Abertura de Empresas e Consultoria para MEIs e Autônomos',
    description:
      'Facilitamos o processo de formalização e cuidamos da documentação e legalização para um início seguro.',
    icon: UserPlus,
  },
  {
    title: 'Gestão e Consultoria para Holdings e Offshore',
    description:
      'Serviços especializados para estruturação de holdings familiares e empresas offshore, garantindo compliance e eficiência.',
    icon: Shield,
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
