import React from 'react'
import { TeamMember } from '../../types'

interface TeamMemberCardProps {
  member: TeamMember
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center">
      {member.image && (
        <img
          src={member.image}
          alt={member.name}
          className="w-32 h-32 rounded-full mb-4 object-cover border-4 border-orange-700"
        />
      )}
      <h3 className="md:text-2xl text-xl font-semibold text-blue-900 mb-2">
        {member.name}
      </h3>
      <p className="md:text-xl text-lg text-gray-600 font-medium mb-2">
        {member.role}
      </p>
      <p className="md:text-xl text-lg text-gray-500 italic leading-relaxed">
        {member.bio}
      </p>
    </div>
  )
}

export default TeamMemberCard
