import React from 'react';
import { FamilyMemberButton } from './FamilyMemberButton';
import { useScrollToElement } from '../hooks/useScrollToElement';

interface FamilyMember {
  name: string;
  description: string;
  images: string[];
}

interface FamilySelectionProps {
  familyMembers: FamilyMember[];
}

export const FamilySelection: React.FC<FamilySelectionProps> = ({ familyMembers }) => {
  const scrollToElement = useScrollToElement();

  return (
    <div className="snap-start h-screen flex flex-col items-center justify-center bg-gradient-to-b from-green-950 to-green-900 p-8">
      <h2 className="text-5xl font-christmas font-bold text-yellow-400 mb-12 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
        Who is reading this?
      </h2>
      <div className="flex gap-8">
        {familyMembers.map((member) => (
          <FamilyMemberButton
            key={member.name}
            name={member.name}
            onClick={() => scrollToElement(`person-${member.name.toLowerCase()}`)}
          />
        ))}
      </div>
    </div>
  );
};