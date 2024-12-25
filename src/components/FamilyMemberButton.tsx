import React from 'react';

interface FamilyMemberButtonProps {
  name: string;
  onClick: () => void;
}

export const FamilyMemberButton: React.FC<FamilyMemberButtonProps> = ({ name, onClick }) => (
  <button
    onClick={onClick}
    className="px-8 py-4 bg-red-700 hover:bg-red-600 text-white rounded-lg text-xl font-christmas font-semibold transition-colors christmas-card-shadow"
  >
    {name}
  </button>
);