export interface Job {
  id: number;
  contactId: number;
  start: string;
  end: string;
  location: string;
  name: string;
}

export interface IDataService {
  getJobs: () => Promise<Job[]>;
  getJobsWithSearchTerm: (
    searchTerm: string
  ) => Promise<Job[]>;
}
