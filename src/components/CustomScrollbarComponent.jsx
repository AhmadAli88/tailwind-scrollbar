

const CustomScrollbarComponent = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Custom Scrollbar Example</h2>

      {/* Horizontal scrollable section */}
      <div className="w-full overflow-x-auto scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-300 mb-8">
        <div className="flex space-x-4 p-4">
          <div className="w-64 h-64 bg-gray-300"></div>
          <div className="w-64 h-64 bg-gray-400"></div>
          <div className="w-64 h-64 bg-gray-500"></div>
          <div className="w-64 h-64 bg-gray-600"></div>
          <div className="w-64 h-64 bg-gray-700"></div>
        </div>
      </div>

      {/* Vertical scrollable section */}
      <div className="h-64 overflow-y-auto scrollbar-thin scrollbar-thumb-purple-500 scrollbar-track-yellow-100">
        <div className="space-y-4 p-4">
          <div className="h-16 bg-gray-300"></div>
          <div className="h-16 bg-gray-400"></div>
          <div className="h-16 bg-gray-500"></div>
          <div className="h-16 bg-gray-600"></div>
          <div className="h-16 bg-gray-700"></div>
          <div className="h-16 bg-gray-800"></div>
          <div className="h-16 bg-gray-900"></div>
        </div>
      </div>

      {/* Scrollable section with both horizontal and vertical scrollbars */}
      <div className="w-full h-64 overflow-auto scrollbar-thin scrollbar-thumb-green-500 scrollbar-track-gray-400 mt-8">
        <div className="flex space-x-4 p-4">
          <div className="w-64 h-64 bg-gray-200"></div>
          <div className="w-64 h-64 bg-gray-300"></div>
          <div className="w-64 h-64 bg-gray-400"></div>
          <div className="w-64 h-64 bg-gray-500"></div>
          <div className="w-64 h-64 bg-gray-600"></div>
        </div>
        <div className="space-y-4 p-4 mt-8">
          <div className="h-16 bg-gray-700"></div>
          <div className="h-16 bg-gray-800"></div>
          <div className="h-16 bg-gray-900"></div>
          <div className="h-16 bg-gray-600"></div>
          <div className="h-16 bg-gray-400"></div>
        </div>
      </div>
    </div>
  );
};

export default CustomScrollbarComponent;
