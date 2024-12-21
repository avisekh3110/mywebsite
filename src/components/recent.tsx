import { useState } from "react";
import { Link } from "react-router-dom";
import googleCloudLogo from "/gc.svg";
import myPicture from "/myImage.png";

export default function Recent() {
  const [recent, setRecent] = useState("My Portfolio Website");

  let count = 0;
  let newRecent: string | null;

  const handleClick = () => {
    count = count + 1;
    if (count === 10) {
      newRecent = prompt("Enter new Recent work:");
      if (newRecent !== null) {
        setRecent(newRecent);
      }
    }
  };

  return (
    <div
      className="flex justify-around items-center select-none rounded-lg h-40 sm:mx-10 lg:mx-36 
      duration-300 bg-[url('/casecadeImg.png')] ease-out"
    >
      <img
        src={myPicture}
        width={100}
        className="h-24 w-24 rounded-full ring-4 ring-white "
        title="Avisekh Sabi"
      />

      <div className="flex text-2xl sm:2xl font-bold font-sourGummy text-quarternary-a">
        <div onClick={handleClick}>Currently working on</div>
        <Link target="blank" to={""} className="pl-2">
          {recent}
        </Link>
      </div>
      <Link
        target="blank"
        to={
          "https://www.cloudskillsboost.google/public_profiles/eada8372-c786-4254-907c-aae29d5e0f43"
        }
        className="bg-white p-4 rounded-sm flex justify-center items-center gap-5"
      >
        <img src={googleCloudLogo} width={30} />
        <div className="text-lg font-semibold hidden  lg:flex pointer-events-">
          Visit my Google Cloud Skill Profile
        </div>
      </Link>
    </div>
  );
}
