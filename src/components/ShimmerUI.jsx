const ShimmerUI = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {Array(12)
        .fill("")
        .map((_, index) => (
          <div
            key={index}
            className="bg-gray-100 items-center animate-pulse rounded-lg w-[13rem] h-[15rem] shadow-md"
          >
            <div className="bg-gray-300 m-auto w-[10rem] rounded-lg h-[60%] mt-4"></div>
            <div className="bg-gray-300 h-[10%] w-[10rem] my-2 mx-auto"></div>
            <div className="bg-gray-300 h-[10%] w-[8rem] m-auto "></div>
            <div className="flex justify-between">
              <div className="bg-gray-300 h-[10%] w-1/3  "></div>
              <div className="bg-gray-300 h-[10%] w-1/3  "></div>
              <div className="bg-gray-300 h-[10%] w-1/3  "></div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ShimmerUI;
