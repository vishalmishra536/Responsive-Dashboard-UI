import { motion } from "framer-motion";

const jobs = [
  {
    title: "Frontend Developer",
    company: "ABC Tech",
  },
  {
    title: "UI/UX Designer",
    company: "XYZ Studio",
  },
  {
    title: "Java Developer",
    company: "Tech Solutions",
  },
];

function LatestJobs() {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Latest Jobs</h2>

      <div className="row">
        {jobs.map((job, index) => (
          <motion.div
            key={index}
            className="col-md-4 mb-4"
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.9,
              delay: index * 0.4,
            }}
            viewport={{ once: true }}
          >
            <div className="card shadow h-100">
              <div className="card-body">
                <h5>{job.title}</h5>
                <p>{job.company}</p>
                <button className="btn btn-primary">Apply Now</button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default LatestJobs;
