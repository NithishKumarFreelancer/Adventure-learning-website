import React from "react";

function CourseModule() {
  return (
    <div className="flex flex-col gap-10 sm:gap-5 items-center mt-10 sm:px-6">
      <p class="bg-gradient-text bg-clip-text text-transparent font-bold text-3xl sm:text-center">
        Mastery Awaits: What You'll Conquer in This Course
      </p>
      <div className="flex flex-wrap gap-10 items-start justify-center ">
        {/* Card 1 */}
        <div className="border border-[#E1E9FF] p-5 flex flex-col gap-4 w-[300px]">
          <p className="text-[#143AA0] text-[18px] font-bold">Module 1</p>
          <p className="text-[#3F5387] text-[18px] font-bold">
            Frontend development
          </p>
          <div className="pl-7 flex flex-col gap-6">
            <ul className="list-disc pl-5 flex flex-col gap-1">
              <li className="text-[#5D7286]">Core Technologies</li>
              <li className="text-[#5D7286]">Frameworks and Libraries</li>
              <li className="text-[#5D7286]">Design Tools</li>
              <li className="text-[#5D7286]">Practical Skills</li>
            </ul>
          </div>
        </div>

        {/* Card 2 */}
        <div className="border border-[#E1E9FF] p-5 flex flex-col gap-4 w-[300px]">
          <p className="text-[#143AA0] text-[18px] font-bold">Module 2</p>
          <p className="text-[#3F5387] text-[18px] font-bold">
            Frontend development
          </p>
          <div className="pl-7 flex flex-col gap-6">
            <ul className="list-disc pl-5 flex flex-col gap-1">
              <li className="text-[#5D7286]">Core Technologies</li>
              <li className="text-[#5D7286]">Frameworks and Libraries</li>
              <li className="text-[#5D7286]">Design Tools</li>
              <li className="text-[#5D7286]">Practical Skills</li>
            </ul>
          </div>
        </div>

        {/* Card 3 */}
        <div className="border border-[#E1E9FF] p-5 flex flex-col gap-4 w-[300px]">
          <p className="text-[#143AA0] text-[18px] font-bold">Module 3</p>
          <p className="text-[#3F5387] text-[18px] font-bold">
            Frontend development
          </p>
          <div className="pl-7 flex flex-col gap-6">
            <ul className="list-disc pl-5 flex flex-col gap-1">
              <li className="text-[#5D7286]">Core Technologies</li>
              <li className="text-[#5D7286]">Frameworks and Libraries</li>
              <li className="text-[#5D7286]">Design Tools</li>
              <li className="text-[#5D7286]">Practical Skills</li>
            </ul>
          </div>
        </div>

        {/* Card 4 */}
        <div className="border border-[#E1E9FF] p-5 flex flex-col gap-4 w-[300px]">
          <p className="text-[#143AA0] text-[18px] font-bold">Module 4</p>
          <p className="text-[#3F5387] text-[18px] font-bold">
            Frontend development
          </p>
          <div className="pl-7 flex flex-col gap-6">
            <ul className="list-disc pl-5 flex flex-col gap-1">
              <li className="text-[#5D7286]">Core Technologies</li>
              <li className="text-[#5D7286]">Frameworks and Libraries</li>
              <li className="text-[#5D7286]">Design Tools</li>
              <li className="text-[#5D7286]">Practical Skills</li>
            </ul>
          </div>
        </div>

        {/* Card 5 */}
        <div className="border border-[#E1E9FF] p-5 flex flex-col gap-4 w-[300px]">
          <p className="text-[#143AA0] text-[18px] font-bold">Module 5</p>
          <p className="text-[#3F5387] text-[18px] font-bold">
            Frontend development
          </p>
          <div className="pl-7 flex flex-col gap-6">
            <ul className="list-disc pl-5 flex flex-col gap-1">
              <li className="text-[#5D7286]">Core Technologies</li>
              <li className="text-[#5D7286]">Frameworks and Libraries</li>
              <li className="text-[#5D7286]">Design Tools</li>
              <li className="text-[#5D7286]">Practical Skills</li>
            </ul>
          </div>
        </div>
      </div>
      <button
        className="text-white font-semibold w-2/4 sm:w-[100%] p-3 rounded-md text-[18px]"
        style={{
          background:
            "linear-gradient(to right, #143AA0 0%, #143AA0 54%, #B3B4B7 100%)",
        }}
      >
        Buy Now for $600 <span className="line-through text-[10px]">$9000</span>
      </button>
    </div>
  );
}

export default CourseModule;
