import React from "react";

function SocialMedia() {
  const phoneNumber = "918111005300"; // Phone number with country code
  const message = "Hello, I need assistance"; // Optional predefined message
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <div className="fixed right-5 bottom-10">
      <a
        href="https://www.facebook.com/AdventureLearningTbm/"
        target="_blank"
        rel="noopener noreferrer"
        className="  cursor-pointer p-2  rounded-full"
      >
        <img src="/socialMedia/facebook_real.svg" className="h-7 bg-white rounded-md" alt="WhatsApp" />
      </a>
      <a
        href={whatsappURL}
        target="_blank"
        rel="noopener noreferrer"
        className=" cursor-pointer p-2 rounded-full"
      >
        <img src="/socialMedia/whatsapp-svgrepo-com1.svg" className="h-7" alt="WhatsApp" />
      </a>
      <a
        href="https://www.instagram.com/adventure_learning_official/"
        target="_blank"
        rel="noopener noreferrer"
        className=" cursor-pointer p-2 rounded-full"
      >
        <img src="/socialMedia/instagram_real.svg" className="h-7" alt="WhatsApp" />
      </a>
      <a
        href="https://www.instagram.com/adventure_learning_official/"
        target="_blank"
        rel="noopener noreferrer"
        className=" cursor-pointer p-2 rounded-full"
      >
        <img src="/socialMedia/Icons.svg" className="h-7" alt="WhatsApp" />
      </a>
    </div>
  );
}

export default SocialMedia;