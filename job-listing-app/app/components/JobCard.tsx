import JobInterface from "../Job";
import Link from "next/link";
import Image from "next/image";

const JobCard = (job: JobInterface) => {
  return (
    <div className="border-gray-300 border rounded-4xl mr-100 ml-30 mt-5 mb-5 p-5 hover:bg-gray-300">
      <div className="p-2 flex gap-6">
        <div className="w-20 h-20 rounded-full overflow-hidden shrink-0">
          <Image
            src={job.image}
            alt={`${job.title} logo`}
            width={80}
            height={80}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="">
          <Link href={`/jobs/${job.id}`} className="text-xl font-semibold mb-1">
            {job.title}
          </Link>
          <p className="text-gray-500 mb-2">
            {job.company} • {" "}
            {job.about.location}
          </p>
          <p>{job.description}</p>
          <div className="flex align-center mt-2">
            <hr className="text-black" />
            <div className="flex gap-2 align-center justify-center  text-sm">
              {job.about.categories.map((category, index) => {
                const isEven = index % 2 === 0;
                const colorClasses = isEven
                  ? "text-amber-400"
                  : "text-[#4640DE]";

                return (
                  <div
                    key={index}
                    className={`${colorClasses} min-w-20 text-center border-2 pt-2 pb-2 pr-4 pl-4 rounded-3xl font-semibold`}
                  >
                    {category}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;