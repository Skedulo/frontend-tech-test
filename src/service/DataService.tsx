import { IDataService, Job } from '../common/types';
import data from './db.json';

const { jobs } = data as { jobs: Job[] };

export const DataService: IDataService = {
  getJobsWithSearchTerm: (searchTerm: string) => {
    const result = jobs.filter((job) =>
      job.name.toLowerCase().includes(searchTerm?.toLowerCase?.())
    );
    return Promise.resolve(result);
  },

  getJobs: () => {
    return Promise.resolve(jobs);
  },
};
