import WhyAdvButton from "../atomicComponents/WhyAdvButton";
function LearnSmarter() {
  return (
    <div className="container  lp:max-w-full tb:max-w-full lp:px-10  flex mx-auto sm:max-w-full sm:px-0">
      <div className="w-100 flex justify-between items-center flex-1 p-4 sm:flex-col-reverse sm:gap-10  tb:flex-col-reverse tb:w-full tb:h-fit tb:gap-10">
        <div className="learnsmarter-info_line flex flex-col gap-7  w-2/4 sm:w-full tb:w-full">
          <div className="flex flex-col h-fit tb:flex gap-4 tb:items-center sm:items-center">
            <WhyAdvButton text={"LEARN SMARTER, NOT HARDER"} />
            <h1 className="text-enroll_users font-semibold text-3xl w-80 tb:text-center sm:text-center  sm:flex-wrap   ">
              Enjoyable learning experience await you
            </h1>
            <p className="text-learnsmarter_text_p text-sm font-medium mb-0 tb:text-center sm:text-center  sm:flex-wrap ">
            
  Learn anytime, anywhere. Discover new skills and practice wherever you are. Enjoy flexible and convenient learning with us. <strong>Access a wide range of courses designed to fit your schedule and enhance your career growth.</strong> </p>
          </div>
          <div className="border-[1px] border-navBorder"></div>
          <div className="flex space-x-10">
            <div className="space-y-1">
              <div className="w-3 h-3 rounded-full bg-active_users"></div>
              <number className="font-bold pt-2 text-3xl">10,000</number>
              <p className="text-learnsmarter_text_Color pt-2 text-xs font-semibold">
                Daily Active Users
              </p>
            </div>
            <div className="space-y-1">
              <div className="w-3 h-3 rounded-full bg-enroll_users"></div>
              <number className="font-bold pt-2 text-3xl">60%</number>
              <p className="text-learnsmarter_text_Color pt-2 text-xs font-semibold">
                Course Enrolment Rate
              </p>
            </div>
          </div>
        </div>
        <div className="images sm:flex justify-center   w-2/5 sm:w-full  sm:h-3/4 tb:w-full  tb:h-1/4">
          <img
            className="w-full sm:w-11/12 sm:h-full tb:h-full"
            src="LearnSmarter.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default LearnSmarter;