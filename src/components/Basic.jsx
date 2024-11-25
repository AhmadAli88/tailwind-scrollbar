const Basic = () => {
  return (
    <div
      style={{ height: '300px', overflowY: 'scroll' }}
      className='scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-200'
    >
      <div style={{ height: '1000px' }}>
        <h1>Custom Scrollbar in React</h1>
        <p>Scroll down to see the custom scrollbar.</p>
        <p>Keep scrolling!</p>
        <p>More content...</p>
      </div>
    </div>
  );
};

export default Basic;
