function Footer() {
  return (
    <footer className="bg-[#F4F4F4]">
      <div
        className=" container mx-auto sm:max-w-full
     lp:max-w-full lp:px-10 px-4 pb-6 pt-8  lg:px-8"
      >
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="flex flex-col sm:flex sm:items-center tb:items-center ">
            <div className="flex sm:items-center  text-teal-600 sm:justify-start">
              <img src="adventure-logo.svg" alt="" />
            </div>
            <p className="lp:w-96 mt-6 lg:text-sm leading-relaxed text-gray-500 sm:max-w-xs sm:text-center  tb:lp:w-2/5 tb:text-center">
              As we are a leader in the Technology Development, Training and R&D
              Services. Our responsibility is to empower Education through the
              knowledge transformation for better Wisdom society.
            </p>
            <ul className="flex gap-5 mt-4">
              <a href="https://www.instagram.com/adventure_learning_official/">
                <img src="/socialMedia/insta.svg" className="h-5" alt="" />
              </a>
              <a href="https://www.youtube.com/@Adventure_Learning">
                <img src="/socialMedia/yt.svg" className="h-5" alt="" />
              </a>
              <a href="https://www.facebook.com/AdventureLearningTbm/">
                <img src="/socialMedia/fb.svg" className="h-5" alt="" />
              </a>
              <a href="https://x.com/Advelearning">
                <img src="socialMedia/twitter.svg" className="h-5" alt="" />
              </a>
            </ul>
          </div>
          <div className="grid lg:grid-cols-4  lp:grid-cols-4 gap-8 sm:grid-cols-1 md:grid-cols-4 lg:col-span-2">
            {/* <div className=" sm:text-center tb:text-center">
              <p className="text-lg font-medium text-gray-900">Student Zone</p>

              <ul className="mt-8 space-y-4 text-sm">
                <li>
                  <a className="text-gray-700 transition hover:text-gray-700/75">
                    Blog
                  </a>
                </li>

                <li>
                  <a className="text-gray-700 transition hover:text-gray-700/75">
                    Internships
                  </a>
                </li>

                <li>
                  <a className="text-gray-700 transition hover:text-gray-700/75">
                    Tutorials
                  </a>
                </li>

                <li>
                  <a className="text-gray-700 transition hover:text-gray-700/75">
                    Video Reviews
                  </a>
                </li>
                <li>
                  <a className="text-gray-700 transition hover:text-gray-700/75">
                    Online Training Reviews
                  </a>
                </li>
                <li>
                  <a className="text-gray-700 transition hover:text-gray-700/75">
                    Reviews
                  </a>
                </li>
                <li>
                  <a className="text-gray-700 transition hover:text-gray-700/75">
                    Interview Questions
                  </a>
                </li>
                <li>
                  <a className="text-gray-700 transition hover:text-gray-700/75">
                    Online Courses
                  </a>
                </li>
              </ul>
            </div> */}
            {/* <div className=" sm:text-center tb:text-center">
              <p className="text-lg font-medium text-gray-900">
                Student Success Stories
              </p>

              <ul className="mt-8 space-y-4 text-sm">
                <li>
                  <a className="text-gray-700 transition hover:text-gray-700/75">
                    Collect
                  </a>
                </li>

                <li>
                  <a className="text-gray-700 transition hover:text-gray-700/75">
                    Follow Us!
                  </a>
                </li>
              </ul>
            </div> */}

            {/* <div className=" sm:text-center tb:text-center">
              <p className="text-lg font-medium text-gray-900">
                Corporate Training
              </p>

              <ul className="mt-8 space-y-4 text-sm">
                <li>
                  <a className="text-gray-700 transition hover:text-gray-700/75">
                    Become an Instructor
                  </a>
                </li>

                <li>
                  <a className="text-gray-700 transition hover:text-gray-700/75">
                    Franchise Opportunities
                  </a>
                </li>
                <li>
                  <a className="text-gray-700 transition hover:text-gray-700/75">
                    {" "}
                    Support{" "}
                  </a>
                </li>
                <li className="flex  sm:justify-center tb:justify-center">
                  <a className="flex gap-2 text-gray-700 transition hover:text-gray-700/75">
                    <span className="flex gap-2 text-gray-700 transition group-hover:text-gray-700/75">
                      Live Chat
                      <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-75"></span>
                        <span className="relative inline-flex size-2 rounded-full bg-[#2246A5]"></span>
                      </span>
                    </span>
                  </a>
                </li>
              </ul>
            </div> */}
            <div className="sm:text-center tb:text-center">
              <p className="text-lg font-medium text-gray-900">Company</p>

              <ul className="mt-8 space-y-4 text-sm">
                <li>
                  <a className="text-gray-700 transition hover:text-gray-700/75">
                    About Us
                  </a>
                </li>

                <li>
                  <a className="text-gray-700 transition hover:text-gray-700/75">
                    Services
                  </a>
                </li>

                <li>
                  <a className="text-gray-700 transition hover:text-gray-700/75">
                    Branches
                  </a>
                </li>

                <li>
                  <a className="text-gray-700 transition hover:text-gray-700/75">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a className="text-gray-700 transition hover:text-gray-700/75">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div className=" sm:text-center tb:text-center">
              <p className="text-lg font-medium text-gray-900">
                Top Adventure Courses
              </p>

              <ul className="mt-8 space-y-4 text-sm">
                <li>
                  <a className="text-gray-700 transition hover:text-gray-700/75">
                    Full stack development
                  </a>
                </li>

                <li>
                  <a className="text-gray-700 transition hover:text-gray-700/75">
                    Embedded system
                  </a>
                </li>
                <li>
                  <a className="text-gray-700 transition hover:text-gray-700/75">
                    Java
                  </a>
                </li>
                <li>
                  <a className="text-gray-700 transition hover:text-gray-700/75">
                    Python
                  </a>
                </li>

                <li>
                  <a className="text-gray-700 transition hover:text-gray-700/75">
                    Software testing
                  </a>
                </li>

                <li>
                  <a className="text-gray-700 transition hover:text-gray-700/75">
                    Data science
                  </a>
                </li>

                <li>
                  <a className="text-gray-700 transition hover:text-gray-700/75">
                    Data analytics
                  </a>
                </li>

                <li>
                  <a className="text-gray-700 transition hover:text-gray-700/75">
                    AWS
                  </a>
                </li>
                <li>
                  <a className="text-gray-700 transition hover:text-gray-700/75">
                    Dev Ops
                  </a>
                </li>
                <li>
                  <a className="text-gray-700 transition hover:text-gray-700/75">
                    CCNA
                  </a>
                </li>
              </ul>
            </div>
            <div className=" sm:text-center tb:text-center">
              <p className="text-lg font-medium text-gray-900">
                Terms & Conditions
              </p>

              <ul className="mt-8 space-y-4 text-sm">
                <li>
                  <a className="text-gray-700 transition hover:text-gray-700/75">
                    Refund/Cancellation Policy
                  </a>
                </li>

                <li>
                  <a className="text-gray-700 transition hover:text-gray-700/75">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a className="text-gray-700 transition hover:text-gray-700/75">
                    Cookie Policy
                  </a>
                </li>
                <li>
                  <a className="text-gray-700 transition hover:text-gray-700/75">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
            <div className="sm:text-center w-[100%] tb:text-center">
              <p className="text-lg font-medium text-gray-900">Contact Us</p>

              <ul className="mt-8 space-y-4 sm: text-sm">
                <li>
                  <a className="flex items-center justify-center sm:justify-start gap-1.5 ltr:sm:justify-start rtl:sm:justify-end">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5 shrink-0 text-gray-900"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>

                    <span className="flex-1 text-gray-700">
                      info@adventurelearning.in
                    </span>
                  </a>
                </li>

                <li>
                  <a className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5 shrink-0 text-gray-900"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>

                    <span className="flex-1 text-nowrap text-gray-700">
                      +91 81110 05300
                    </span>
                  </a>
                </li>

                <li className="flex items-start justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5 shrink-0 text-gray-900"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>

                  <address className="mt-0.5 flex-1  not-italic text-gray-700">
                    No.14, First floor, Kamaraj Street, West Tambaram, Chennai,
                    Tamil Nadu 600045
                  </address>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-6">
          <div className="mx-auto lp:px-0 px-4 sm:px-2 lg:px-8">
            <p className="text-gray-700 text-sm lg:text-sm">
              ©2024 Adventure Technology Solutions Pvt Ltd. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
