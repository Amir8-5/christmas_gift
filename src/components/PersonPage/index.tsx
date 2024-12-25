import React from 'react';
import { PersonPageProps } from './types';
import { PersonPageLayout } from './PersonPageLayout';

export const PersonPage: React.FC<PersonPageProps> = (props) => {
  return <PersonPageLayout {...props} />;
};