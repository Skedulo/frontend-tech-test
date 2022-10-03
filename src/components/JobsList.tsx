import { FC } from "react";
import { Job } from "../common/types";
import './JobsList.css';

type Props = {
  jobs: Job[];
}

const jobMapper = (job: Job) => {
  return (
    <li key={job.id} className='job__item'>
      <div className="title">{job.name}</div>
      <div>Location: {job.location}</div>
      <div>Start date: {new Date(job.start).toDateString()}</div>
      <div>Start time: {new Date(job.start).toTimeString()}</div>
      <div>End date: {new Date(job.end).toDateString()}</div>
      <div>End time: {new Date(job.end).toTimeString()}</div>
    </li>
  )
}

export const JobsList: FC<Props> = ({ jobs }) => {
  return (
    <div>
      Here are the current jobs available based on your search:
      <ul className="jobs">
        {jobs.map(jobMapper)}
      </ul>
    </div>
  )
}