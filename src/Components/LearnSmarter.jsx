import "../Styles/LearnSmarter.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WhyAdvButton from "../atomicComponents/WhyAdvButton";
function LearnSmarter() {
  return (
    <div className="learnsmarter max-w-screen-xl  py-10  md:flex-col-reverse max-[768px]:flex-col-reverse max-[768px]:gap-12  max-[768px]:px-6 lg:flex lg:flex-row container d-flex">
      <div className="learnsmarter-info_line flex-1">
        <div className="learnsmarter-info ">
          <WhyAdvButton text={"LEARN SMARTER, NOT HARDER"} />
          <h1>Enjoyable learning experience await you</h1>
          <p>
            you can learn whenever and where ever u want try it out and where
            ever u want try it out
          </p>
        </div>
        <div className="line w-lg-80 w-sm-100"></div>
        <div className="user_count_con">
          <div className="users_count">
            <div className="circle1"></div>
            <number>10,000</number>
            <p>Daily Active Users</p>
          </div>
          <div className="users_count">
            <div className="circle2"></div>
            <number>60%</number>
            <p>Course Enrolment Rate</p>
          </div>
        </div>
      </div>
      <div className="images flex-1">
        <img src="LearnSmarter.svg" alt="" />
      </div>
    </div>
  );
}
export default LearnSmarter;