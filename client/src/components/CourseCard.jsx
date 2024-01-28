import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  const { title, price, img, skillLevel } = course;
  return (
    <div className=" rounded shadow-lg shadow-purple-200 flex flex-col justify-between">
      <div className="relative overflow-hidden rounded-t  ">
        <img
          src={img}
          className=" object-cover h-32 w-full hover:scale-110 rounded-t delay-75 duration-300 transition-all"
          alt=""
        />
        <p className="bg-pink-400 text-white absolute top-2 left-2 rounded-full px-2">
          {skillLevel}
        </p>
      </div>
      <div className="card-body ">
        <div className="px-2 my-2 space-y-2">
          <Link to={"/"} className="leading-6  font-semibold">
            {title}
          </Link>
          <div className="flex gap-x-2">
            <Rating
              readonly
              placeholderRating={5}
              emptySymbol={<FaRegStar />}
              placeholderSymbol={<FaStar className="text-yellow-400" />}
              fullSymbol={<FaStar />}
            />
            <span className="font-semibold">4.50</span>
            <span className="text-gray-500">(2)</span>
          </div>
        </div>
        <div className="h-[2px] bg-gray-300 "></div>
        <div className="flex  justify-between items-center py-3 px-2">
          <p className="font-bold">${price}</p>
          <button className="border-purple-500 text-purple-500 border-2 px-3 py-1 rounded">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
