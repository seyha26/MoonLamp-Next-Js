const Parallax = () => {
  return (
    <div className="flex items-center justify-center h-96  bg-fixed bg-parallax bg-cover flex-col">
      <h1 className="text-4xl font-bold text-white uppercase text-center drop-shadow-2xl">
        SUBSCRIBE TO OUR NEWSLETTER
      </h1>
      <div className="bg-white py-2 flex items-center justify-around border border-gray-200  rounded-[10px] mb-[49px] mt-10">
        <input
          className="outline-none ml-5 w-[200px] md:w-[400px]"
          type="email"
          placeholder="Enter your email..."
        />
        <div>
          <button className="flex items-center mr-2 py-[10px] px-[26px] rounded-[80px] font-semibold md:text-lg text-white bg-primary whitespace-nowrap flex-1 w-fit">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Parallax;
