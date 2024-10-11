import React from 'react';

function Location() {
  const handleButtonClick = () => {
    // Open Google Maps with the provided latitude and longitude
    window.open(`https://maps.app.goo.gl/T7mNHRupKSZqP7Sf6`, '_blank');
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
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.662518041803!2d80.1138265!3d12.929398999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525f1313e0f96f%3A0x2cbf85c809e208ed!2sAdventure%20Learning%20Software%20and%20Embedded%20Training%20institute%20in%20Chennai!5e0!3m2!1sen!2sin!4v1728068771018!5m2!1sen!2sin"
          width="100%"
          height="550"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
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
