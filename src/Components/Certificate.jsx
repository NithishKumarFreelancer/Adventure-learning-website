import React from 'react'

function Certificate() {
  return (
    <div className="mt-10 sm:flex sm:flex-col sm:items-center sm:px-8 sm:mb-4">
            <h className="text-[#143AA0] font-bold text-3xl sm:text-center">
              Let Your Certificates Speak
            </h>
            <div className="flex items-center mt-10 sm:flex sm:flex-col  sm:gap-5">
              <div>
                <img src="/courseInfo/certificate.png" alt="" />
              </div>
              <div className="flex flex-col gap-3 sm:gap-4 ">
                <div className="flex items-center gap-3">
                  <img src="courseInfo/tick.svg" className="w-6 h-6" alt="" />
                  <p className="text-[#5D7286] text-sm">
                    ADV Learning Certificate in Full stack development
                  </p>
                </div>
                <div className="flex items-center gap-3">
                <img src="courseInfo/tick.svg" className="w-6 h-6" alt="" />

                  <p className="text-[#5D7286] text-sm">
                    Our globally recognized certificates enhance your
                    programming profile and elevate your career prospects.
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <img src="courseInfo/tick.svg" className="w-6 h-6" alt="" />
                  <p className="text-[#5D7286] text-sm">
                    Certificates are generated after the completion of course.
                  </p>
                </div>
              </div>
            </div>
          </div>
  )
}

export default Certificate