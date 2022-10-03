import { FC } from "react";
import { Job } from "../common/types";

type Props = {
  jobs: Job[];
}

const jobMapper = (job: Job) => {
  return (
    <li key={job.id}>
      <div>
        <div>{job.name}</div>
        <div>{job.location}</div>
        <div>{job.start}-{job.end}</div>
      </div>
    </li>
  )
}

export const JobsList: FC<Props> = ({ jobs }) => {
  return (
    <div>
      Here are the current jobs available based on your search:
      <ul>
        {jobs.map(jobMapper)}
      </ul>
    </div>
  )
}