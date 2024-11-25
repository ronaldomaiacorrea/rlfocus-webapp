import { ElementType } from 'react'

export interface Service {
  title: string
  description: string
  icon: ElementType
  link: string
  content: Section[]
  heading: string
}

export interface TeamMember {
  name: string
  role: string
  bio: string
  image?: string
}

export interface Testimonial {
  text: string
  author: string
  company?: string
}

export interface Valor {
  title: string
  description: string
}

interface SectionItem {
  boldText: string
  text: string
}

export interface Section {
  title: string
  items: SectionItem[]
}
