import React from 'react';
import { IDataService } from "../common/types";
import { SectionGroup } from '../components/section/SectionGroup';
import { SectionPanel } from '../components/section/SectionPanel';
import './QuestionOne.css';

export const QuestionOne: React.FC<{ service: IDataService }> = ({
  service,
}) => {
  return (
    <SectionGroup>
      <SectionPanel>
        <section className="jobs">
          Please refer to src/INSTRUCTIONS.md

          <div className="jobs__search">
            {/* Render a search field here... */}
          </div>

          <div className="jobs__list">
            {/* Render a list of results here... */}
          </div>
        </section>
      </SectionPanel>
    </SectionGroup>
  );
};
