import { useEffect, useState } from "react";
import CourseCard from "./CourseCard";

const FeaturedCourses = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("https://student-portal-server-beta.vercel.app///localhost:5000/courses")
      .then((res) => res.json())
      .then((data) => setCourses(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="max-w-5xl mx-auto my-20 px-4 md:px-4">
      <h1 className="text-3xl font-semibold text-center "> Featured Coures</h1>
      <p className="max-w-2xl mx-auto text-center text-gray-700 text-lg">
        Learning often happens in classrooms but it doesn&apos;t have to. Use
        Eduflow to facilitate learning experiences no matter the context.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-x-4 gap-y-8 my-8 px-8 md:px-0">
        {courses?.data?.slice(0, 8).map((course) => (
          <CourseCard key={course._id} course={course} />
        ))}
      </div>
      <div className="text-center">
        <button className="bg-purple-500 hover:shadow-xl hover:shadow-purple-200 hover:bg-purple-600 delay-100 duration-200 transition-all py-3 px-5 rounded-full text-white font-semibold ">
          Browse All Courses
        </button>
      </div>
    </div>
  );
};

export default FeaturedCourses;
