import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Cover = () => {
  return (
    <div className="bg-gray-200 w-full md:h-[60vh]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 h-full px-4 md:px-0">
        <div className="self-center my-10 justify-items-center">
          <h1 className="text-4xl md:text-6xl text-gray-900 font-bold font-serif">
            Build skill with online course
          </h1>
          <p className="text-gray-700 text-xl my-4">
            Choose from 213,000 online video courses with <br className="hidden md:block" /> new additions
            published every month.
          </p>
          <div className="flex flex-col  md:flex-row md:gap-4 px-8  md:p-0 gap-y-2">
            <Link to={"/courses"} className="bg-purple-500 hover:bg-purple-600 delay-100 duration-200 transition-all py-3 px-5 rounded-full text-white font-semibold ">
              Explore Courses
            </Link>
            <Link to={"/courses"} className="outline-yellow-500 outline-2 outline py-3 px-5 rounded-full text-yellow-500 font-semibold flex items-center gap-x-2 ">
              Start Learning <FaArrowRight />
            </Link>
          </div>
        </div>
        <div>
          <img
            src="./student-remove-bg.png"
            className="h-full bg-cover object-cover "
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Cover;
