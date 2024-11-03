import { ElementType } from 'react'

export interface Service {
  title: string
  description: string
  icon: ElementType
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
