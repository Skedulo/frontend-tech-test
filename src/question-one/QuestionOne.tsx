import React, { useCallback, useState } from 'react';
import { IDataService, Job } from "../common/types";
import { JobsList } from '../components/JobsList';
import { SearchField } from '../components/SearchField';
import { SectionGroup } from '../components/section/SectionGroup';
import { SectionPanel } from '../components/section/SectionPanel';
import './QuestionOne.css';

export const QuestionOne: React.FC<{ service: IDataService }> = ({
  service,
}) => {
  const [jobs, setJobs] = useState<Job[]>([]);

  const searchForJobs = useCallback(async (searchTerm: string) => {
    const data = await service.getJobsWithSearchTerm(searchTerm);
    setJobs(data)
  }, [service, setJobs])

  const clearJobs = useCallback(() => {
    setJobs([]);
  }, [setJobs])

  return (
    <SectionGroup>
      <SectionPanel>
        <section className="jobs">
          <div className="jobs__search">
            <SearchField onSearch={searchForJobs} onClear={clearJobs} />
          </div>
          <div className="jobs__list">
            <JobsList jobs={jobs}></JobsList>
            {/* Render a list of results here... */}
          </div>
        </section>
      </SectionPanel>
    </SectionGroup>
  );
};
