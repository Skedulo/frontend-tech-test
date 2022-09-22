import React from 'react';
import { IDataService } from '../common/types';
import { SectionGroup } from '../components/section/SectionGroup';
import { SectionPanel } from '../components/section/SectionPanel';

import './QuestionOne.css';

export const QuestionOne: React.FC<{ service: IDataService }> = () => {
  return (
    <SectionGroup>
      <SectionPanel>Please refer to src/INSTRUCTIONS.md</SectionPanel>
    </SectionGroup>
  );
};
