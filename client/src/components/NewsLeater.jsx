const NewsLeater = () => {
  return (
    <div className="bg-[url('/peoples.png')] bg-no-repeat w-full bg-cover bg-center h-96 mt-20 relative -z-30">
      <div
        className="bg-purple-900/50  absolute top-0
        left-0 w-full h-full"
      ></div>
      <div className="max-w-xl mx-auto flex flex-col justify-center h-full relative px-4">
        <p className="text-white text-4xl text-center mb-2">
          Want to get special offers and <br className="hidden md:block" /> Courses updates?
        </p>
        <input
          type="text"
          placeholder="Your email address"
          className="w-full p-3 outline-blue-600 focus:outline duration-150 delay-100 ease-linear mt-2 rounded-full"
        />
      </div>
    </div>
  );
};

export default NewsLeater;
