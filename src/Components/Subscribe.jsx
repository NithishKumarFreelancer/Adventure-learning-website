import React, { useState } from "react";
import axios from "axios";
import Confetti from "react-confetti";

function Subscribe() {
  const [email, setEmail] = useState("");
  const [showConfetti, setShowConfetti] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popupVisible, setPopupVisible] = useState(false);

  const handleSubscribe = async () => {
    const currentDateTime = new Date().toISOString(); // Get the current date and time

    const url = 'https://api.sheety.co/e8afbbce175c456cfded262f044131c7/subscribedStudents/page1';
    const body = {
      page1: {
        email: "em",
        datetime: "data",
      }
    };

    try {
      const response = await axios.post(url, body, {
        headers: {
          'Content-Type': 'application/json',
        }
      });

      console.log("Subscription successful:", response.data.page1);

      setShowConfetti(true);
      setShowPopup(true);

      setTimeout(() => {
        setShowConfetti(false);
      }, 4000); // Confetti duration

      setTimeout(() => {
        setPopupVisible(true);
      }, 100); // Slight delay for smoother transition

      setTimeout(() => {
        setPopupVisible(false);
        setShowPopup(false); // Hide the popup after it disappears
      }, 4000); // Popup and confetti auto-close at the same time

    } catch (error) {
      console.error("Error during subscription:", error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className="relative p-4 bg-[#F4F4F4]">
      {showConfetti && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          numberOfPieces={300}
          recycle={false}
          style={{ position: "fixed", top: 0, left: 0, zIndex: 50 }}
        />
      )}

      {showPopup && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div
            className={`bg-white p-6 rounded-md shadow-lg text-center relative transition-transform duration-500 ease-out transform ${
              popupVisible ? "scale-100 opacity-100" : "scale-75 opacity-0"
            }`}
          >
            <p className="text-enroll_users font-semibold text-lg">
              🎉 Thank you for subscribing!
            </p>
            <p className="text-learnsmarter_text_p text-sm mt-2">
              You've successfully subscribed to our newsletter.
            </p>
          </div>
        </div>
      )}

      <div className="container flex-col lp:max-w-full tb:max-w-full gap-3 lp:px-10 flex mx-auto sm:max-w-full sm:px-4">
        <div className="w-full flex flex-col items-center gap-4 pb-4 sm:gap-1 ">
          <div className="flex flex-col items-center">
            <h1 className="text-enroll_users font-semibold text-2xl sm:text-xl">
              Subscribe to Our Newsletter for
            </h1>
            <h1 className="text-enroll_users font-semibold text-2xl sm:text-xl">
              the Latest Course Updates!
            </h1>
          </div>
          <p className="text-learnsmarter_text_p font-medium text-sm w-[450px] text-center sm:w-96">
            Stay informed about our newest courses and exclusive offers.
            Subscribe now and receive 20% off on your first course enrollment!
          </p>
        </div>
        <div className="w-fit flex mr-auto ml-auto gap-3 flex-col justify-center">
          <div className="flex justify-between w-fit bg-subscribeFormBG px-3 py-2 rounded-full">
            <div className="flex gap-2">
              <img className="w-5" src="mail-icon.svg" alt="Mail Icon" />
              <input
                className="bg-subscribeFormBG outline-none text-sm"
                type="text"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <button
              onClick={handleSubscribe}
              className="bg-enroll_users text-white font-medium text-sm flex items-center px-6 py-3 rounded-full"
            >
              Subscribe
            </button>
          </div>
          <p className="text-learnsmarter_text_p font-medium text-sm text-center flex gap-1 mt-2 text-wrap sm:flex sm:flex-col">
           <p>
            We prioritize the protection of your data in our
            </p>
            <span className="underline underline-offset-2 cursor-pointer">
              privacy policy.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
