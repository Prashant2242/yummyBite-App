const Shimmer = () => {
    return (
      <div className="flex flex-wrap gap-4 p-4">
        {Array(12) // Generating 12 shimmer placeholders
          .fill("")
          .map((_, index) => (
            <div
              key={index}
              className="w-44 h-96 p-2 mx-2 shadow-lg bg-gray-200 rounded-lg animate-pulse"
            >
              {/* Image Placeholder */}
              <div className="h-40 w-44 bg-gray-300 rounded-md"></div>
  
              {/* Text Placeholder */}
              <div className="mt-3 h-4 bg-gray-300 rounded w-3/4"></div>
              <div className="mt-2 h-3 bg-gray-300 rounded w-5/6"></div>
              <div className="mt-2 h-3 bg-gray-300 rounded w-1/2"></div>
              <div className="mt-2 h-3 bg-gray-300 rounded w-3/4"></div>
              <div className="mt-2 h-3 bg-gray-300 rounded w-1/3"></div>
            </div>
          ))}
      </div>
    );
  };
  
  export default Shimmer;
  
