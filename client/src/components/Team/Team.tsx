import React from 'react'
import TeamMemberCard from './TeamMemberCard'
import { team } from '@/data/content'

const Team: React.FC = () => {
  return (
    <section id="team" className="py-20 bg-orange-100">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="md:text-4xl text-3xl font-bold text-center mb-12 text-indigo-900">
          Nossa Equipe
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <TeamMemberCard key={index} member={member} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team
