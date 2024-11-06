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
    bio: 'Rafael Cavalheri Alexandre é um profissional de TI com mais de 17 anos de experiência em auditoria, governança e segurança da informação, atuando principalmente em setores altamente regulados, como bancos, cooperativas de crédito e seguradoras digitais. Especializado em transformação digital e segurança cibernética, Rafael liderou equipes em projetos complexos e foi responsável técnico cadastrado no Banco Central do Brasil. Ele possui vasta experiência em metodologias ágeis, foco em resultados e certificação em proteção de dados, o que o qualifica para oferecer soluções personalizadas de alto impacto, em conformidade com a legislação vigente.',
    image: rafaPic,
  },
  {
    name: 'Luiz Fernando Cappi Monteiro',
    role: 'Sócio executivo',
    bio: 'Luis Fernando Cappi Monteiro possui mais de 20 anos de experiência em posições de liderança nas áreas de auditoria, controles internos, finanças e contabilidade. Com sólido conhecimento em governança, gestão de riscos, controles internos e práticas contábeis, destaca-se na condução de auditorias e na reestruturação de processos financeiros em grandes organizações. Hábil na formação e motivação de equipes, Luis Fernando garante alta performance e resultados consistentes, com experiência significativa em interações com órgãos reguladores, como BACEN e SUSEP.',
    image: cappiPic,
  },
  {
    name: 'Luiz Fernando de Paula',
    role: 'Sócio executivo',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis maximus placerat quam, efficitur aliquam orci sollicitudin a. Cras vel ex metus. Nullam nec tempus felis. Phasellus ut nisl vel libero pulvinar iaculis sit amet at elit. Curabitur hendrerit turpis non nibh vulputate tempor. In hac habitasse platea dictumst. Nam ac eros ac tellus volutpat efficitur. Proin in malesuada nisi. In eros enim, consequat sit amet sem pretium, gravida malesuada elit. Vestibulum mollis ligula eget tristique ornare. Suspendisse nisi augue, porttitor vel eros at, rhoncus hendrerit lectus. Sed sit amet urna eu leo efficitur auctor.',
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
