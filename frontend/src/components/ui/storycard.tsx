import React from "react";
const Card: React.FC = () => {
  return (
    <div className="bg-gray-200 mx-80 rounded-lg shadow-lg">
  {/* Header */}
  <div className="flex items-center justify-between p-3 border-b border-gray-300 rounded-t-lg bg-orange">
    {/* Profile Icon */}
    <div className="w-6 h-6 bg-white rounded-full"></div>

    {/* Three Dots Menu */}
    <div className="flex space-x-2">
      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
    </div>
  </div>

  {/* Content */}
  <div className="p-6">
    {Array(6)
      .fill("")
      .map((_, index) => (
        <p
          key={index}
          className="text-center font-semibold text-gray-700 mb-4 break-words"
        >
          hryikjsdjdsjbdhusdjfsdujsdfjsdfjnsudfsdhufihsuhfjsdfjhduhfushiuusihfjdshjkfhsdjhfjkuihuisfjksfjsduifjdhjksdhdhkjhsdjkhdjkhsjdhjkdsjdshdsisd
        </p>
      ))}
  </div>
</div>

  
  );
};

export default Card;
