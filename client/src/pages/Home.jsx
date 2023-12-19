import Cover from "../components/Cover";
import DetailsInNumber from "../components/DetailsInNumber";
import FeaturedCourses from "../components/FeaturedCourses";
import NewsLeater from "../components/NewsLeater";

const Home = () => {
  return (
    <div>
      <Cover />
      <FeaturedCourses />
      <DetailsInNumber />
      <NewsLeater/>
    </div>
  );
};

export default Home;
