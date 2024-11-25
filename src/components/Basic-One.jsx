const BasicOne = () => {
  return (
    // <div className='h-64 overflow-y-scroll scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-200'>
    //   <div style={{ height: '1000px' }}>Content with custom scrollbar</div>
    // </div>
    <div className="h-64 overflow-y-scroll custom-scrollbar">
    <div style={{ height: '1000px' }}>Content with custom scrollbar</div>
  </div>
  );
};

export default BasicOne;
