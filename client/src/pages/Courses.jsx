import CourseCard from "../components/CourseCard";

const Courses = () => {
  const courses = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
   <div className="max-w-5xl mx-auto">
     <div className="grid grid-cols-1 md:grid-cols-4 gap-x-4 gap-y-8 my-8 px-8 md:px-0">
      {courses.map((course) => (
        <CourseCard key={course} />
      ))}
    </div>
   </div>
  );
};

export default Courses;
