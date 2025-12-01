import JobCard from "./components/JobCard";
import Header from "./components/Header";

import type JobInterface from "./Job";
import jobsData from "./data/jobs.json";

const data = jobsData.job_postings as JobInterface[];
const len = data.length;

export default function Home() {
  return (
    <>
      {Header(len)}
      {data.map((job) => (
        <JobCard key={job.id} {...job} />
      ))}
    </>
  );
}