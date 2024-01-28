import { useEffect, useState } from "react";
import CourseCard from "../components/CourseCard";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("https://student-portal-server-beta.vercel.app/courses")
      .then((res) => res.json())
      .then((data) => setCourses(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-x-4 gap-y-8 my-8 px-8 md:px-0">
        {courses?.data?.map((course) => (
          <CourseCard key={course._id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default Courses;
