const MomDad = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Tim and Mary Ann - Still in Love</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex flex-col items-center">
          <img 
            src="/images/mom-dad-wedding-resized.JPG" 
            alt="Tim and Mary Ann"
            className="w-96 h-auto rounded-lg mb-4"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/400x300?text=Tim+and+Mary+Ann';
            }}
          />
          <p className="text-gray-700 text-center max-w-2xl">
            Celebrating Tim and Mary Ann Wolfgang!
          </p>
        </div>
      </div>
    </div>
  );
};

export default MomDad;
