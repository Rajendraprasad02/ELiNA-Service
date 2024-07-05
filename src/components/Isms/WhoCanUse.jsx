import React from "react";
import pic from "../../images/IsmsTherapist.jpg";
import pic2 from "../../images/TherapistIsms.jpg";
import pic3 from "../../images/IsmsSchools.jpg";
import pic4 from "../../images/IsmsParents.jpg";
import pic5 from "../../images/IsmsRehabit.jpg";

const KeyContent = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
        <path d="M72 88a56 56 0 1 1 112 0A56 56 0 1 1 72 88zM64 245.7C54 256.9 48 271.8 48 288s6 31.1 16 42.3V245.7zm144.4-49.3C178.7 222.7 160 261.2 160 304c0 34.3 12 65.8 32 90.5V416c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V389.2C26.2 371.2 0 332.7 0 288c0-61.9 50.1-112 112-112h32c24 0 46.2 7.5 64.4 20.3zM448 416V394.5c20-24.7 32-56.2 32-90.5c0-42.8-18.7-81.3-48.4-107.7C449.8 183.5 472 176 496 176h32c61.9 0 112 50.1 112 112c0 44.7-26.2 83.2-64 101.2V416c0 17.7-14.3 32-32 32H480c-17.7 0-32-14.3-32-32zm8-328a56 56 0 1 1 112 0A56 56 0 1 1 456 88zM576 245.7v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM320 32a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM240 304c0 16.2 6 31 16 42.3V261.7c-10 11.3-16 26.1-16 42.3zm144-42.3v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM448 304c0 44.7-26.2 83.2-64 101.2V448c0 17.7-14.3 32-32 32H288c-17.7 0-32-14.3-32-32V405.2c-37.8-18-64-56.5-64-101.2c0-61.9 50.1-112 112-112h32c61.9 0 112 50.1 112 112z" />
      </svg>
    ),
    p: "Better and easier communication between parents and therapist",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V400c0 44.2 35.8 80 80 80H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H80c-8.8 0-16-7.2-16-16V64zm406.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320 210.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L240 221.3l57.4 57.4c12.5 12.5 32.8 12.5 45.3 0l128-128z" />
      </svg>
    ),
    p: "Keep Track of Children's Therapy Progress",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
        <path d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM64 288c0-17.7 14.3-32 32-32h96c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V288zM300.9 397.9L256 368V304l44.9-29.9c2-1.3 4.4-2.1 6.8-2.1c6.8 0 12.3 5.5 12.3 12.3V387.7c0 6.8-5.5 12.3-12.3 12.3c-2.4 0-4.8-.7-6.8-2.1z" />
      </svg>
    ),
    p: "Easy and Quick Home Reinforcement of Therapy Activities",
  },
];

const KeyContent2 = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
        <path d="M72 88a56 56 0 1 1 112 0A56 56 0 1 1 72 88zM64 245.7C54 256.9 48 271.8 48 288s6 31.1 16 42.3V245.7zm144.4-49.3C178.7 222.7 160 261.2 160 304c0 34.3 12 65.8 32 90.5V416c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V389.2C26.2 371.2 0 332.7 0 288c0-61.9 50.1-112 112-112h32c24 0 46.2 7.5 64.4 20.3zM448 416V394.5c20-24.7 32-56.2 32-90.5c0-42.8-18.7-81.3-48.4-107.7C449.8 183.5 472 176 496 176h32c61.9 0 112 50.1 112 112c0 44.7-26.2 83.2-64 101.2V416c0 17.7-14.3 32-32 32H480c-17.7 0-32-14.3-32-32zm8-328a56 56 0 1 1 112 0A56 56 0 1 1 456 88zM576 245.7v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM320 32a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM240 304c0 16.2 6 31 16 42.3V261.7c-10 11.3-16 26.1-16 42.3zm144-42.3v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM448 304c0 44.7-26.2 83.2-64 101.2V448c0 17.7-14.3 32-32 32H288c-17.7 0-32-14.3-32-32V405.2c-37.8-18-64-56.5-64-101.2c0-61.9 50.1-112 112-112h32c61.9 0 112 50.1 112 112z" />
      </svg>
    ),
    p: "Increase client engagement and reduce churn",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V400c0 44.2 35.8 80 80 80H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H80c-8.8 0-16-7.2-16-16V64zm406.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320 210.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L240 221.3l57.4 57.4c12.5 12.5 32.8 12.5 45.3 0l128-128z" />
      </svg>
    ),
    p: "Remain in sync with child's behavior outside center",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
        <path d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM64 288c0-17.7 14.3-32 32-32h96c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V288zM300.9 397.9L256 368V304l44.9-29.9c2-1.3 4.4-2.1 6.8-2.1c6.8 0 12.3 5.5 12.3 12.3V387.7c0 6.8-5.5 12.3-12.3 12.3c-2.4 0-4.8-.7-6.8-2.1z" />
      </svg>
    ),
    p: "Proper Documentation of Child Therapy Journey",
  },
];

const WhoCanUseContent = [
  {
    WhoCanUseImg: pic,
    p: (
      <span>
        Therapy <span className="text-blue-700">Centers</span>
      </span>
    ),
  },
  {
    WhoCanUseImg: pic2,
    p: (
      <span>
        Individual<span className="text-pink-700"> Therapist </span>
      </span>
    ),
  },
  {
    WhoCanUseImg: pic4,
    p: <span className="text-green-500"> Parents</span>,
  },
  {
    WhoCanUseImg: pic3,
    p: <span className="text-violet-600"> Schools</span>,
  },
  {
    WhoCanUseImg: pic5,
    p: <span className="text-blue-600"> Rehabilitation</span>,
  },
];

const WhoCanUse = () => {
  return (
    <>
      <div className="IsmsBg2">
        <h1 className="text-4xl animationHero flex justify-center mt-28 mb-16 md:text-5xl lg:text-6xl font-black text-indigo-600">
          Who can use ISMS?
        </h1>
        <div className="flex flex-wrap flex-col md:flex-row justify-center mx-auto md:w-[70%] lg:w-[100%] lg:gap-8">
          {WhoCanUseContent.map((item) => (
            <div class="animationHero  bg-transparent md:p-3 lg:p-5 rounded-lg  dark:bg-gray-800 dark:border-gray-700">
              <a className="flex justify-center" href="#">
                <img
                  class="rounded-full w-[150px] h-[150px] lg:w-[200px] lg:h-[200px] object-cover"
                  src={item.WhoCanUseImg}
                  alt=""
                />
              </a>
              <div class="p-5 flex justify-center">
                <a href="#">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {item.p}
                  </h5>
                </a>
              </div>
            </div>
          ))}
        </div>
        {/* Key Benefits */}
        <div className="animationHero text-4xl flex justify-center  md:text-5xl lg:text-6xl font-black text-indigo-600 mb-5 mt-10 md:mb-20 lg:mt-10">
          Key Benefits
        </div>
        <div className="flex justify-center">
          <div className="flex justify-center  flex-col md:flex-row content-center px-5 my-8 md:m-5 lg:shadow-2xl gap-5 lg:gap-20 lg:w-[70%] rounded-3xl lg:p-10 bg-white">
            <div className="flex flex-col gap-6">
              {KeyContent.map((item) => (
                <div className="animationHero flex flex-row items-center gap-10">
                  <div className="w-8">{item.icon}</div>
                  <p className="text-base lg:text-lg">{item.p}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-6">
              {KeyContent2.map((item) => (
                <div className="animationHero flex flex-row items-center gap-10">
                  <div className="w-8">{item.icon}</div>
                  <p className="text-base lg:text-lg">{item.p}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhoCanUse;
