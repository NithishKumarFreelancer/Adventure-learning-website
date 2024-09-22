import React from 'react';

// Example latitude and longitude
const LATITUDE = 12.939230;
const LONGITUDE = -80.112760;

function Location() {
  const handleButtonClick = () => {
    // Open Google Maps with the provided latitude and longitude
    window.open(`https://maps.app.goo.gl/7x4fGn9Ddypczd9Z9`, '_blank');
  };

  return (
    <div className="flex flex-col items-center bg-white relative">
      <div className="mt-10 mb-10 sm:mt-5 sm:mb-5 flex flex-col gap-3 items-center">
        <p className="text-learnsmarter_text_p text-sm sm:text-xs font-medium">
          Location
        </p>
        <p className="font-semibold text-enroll_users text-3xl sm:text-2xl text-center">
          Experience Our Office Today!
        </p>
      </div>
      <div className="relative w-full flex justify-center">
        <img src="DesktopMap.svg" alt="Map" className="sm:h-[300px] object-cover" />
        <button
          onClick={handleButtonClick}
          className="absolute bottom-5 right-5 bg-[#042C9A] text-white p-3 rounded-full shadow-lg hover:bg-[#415CA5]"
        >
          Open Map
        </button>
      </div>
    </div>
  );
}

export default Location;
