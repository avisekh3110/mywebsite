import { useState } from "react";
import { Link } from "react-router-dom";
import googleCloudLogo from "/gc.svg";
// import myPicture from "/myImage.png";
import myPicture from "/myImage2.png";
import axios from "axios";

export default function Recent() {
  const [recent, setRecent] = useState("Loading..");
  const [recentlink, setRecentlink] = useState("");

  interface Repo {
    name: string;
    html_url: string;
    created_at: string;
    updated_at: string;
    pushed_at: string;
    homepage: string;
  }

  axios
    .get<Repo[]>("https://api.github.com/users/avisekh3110/repos")
    .then((res) => {
      const repos: Repo[] = res.data;

      const latestRepo = repos.reduce((latest, repo) =>
        new Date(repo.updated_at) > new Date(latest.updated_at) ? repo : latest
      );

      setRecent(latestRepo.name);
      setRecentlink(
        latestRepo.homepage ? latestRepo.homepage : latestRepo.html_url
      );
    })
    .catch((err) => {
      console.log(err.message);
    });

  return (
    <div
      className="flex justify-around items-center select-none rounded-lg h-36 sm:mx-10 lg:mx-36 
      duration-300 bg-[url('/casecadeImg.png')] ease-out p-4"
    >
      <div className="flex justify-center items-center py-2 px-4 gap-4">
        <img
          src={myPicture}
          width={100}
          className="h-24 w-24 rounded-full ring-4 ring-quarternary-a "
          title="Avisekh Sabi"
        />
        <div className="hidden lg:flex flex-col">
          <div className="text-quarternary-a font-mono font-bold text-xl">
            Avisekh Sabi
          </div>
          <div className="text-quarternary-c font-mono font-bold text-base">
            @avisekh_sabi
          </div>
        </div>
      </div>

      <div className="flex font-bold  flex-wrap justify-center items-center">
        <div className="text-quarternary-a text-2xl sm:2xl font-mono  ">
          Currently working on
        </div>
        <Link
          target="blank"
          to={recentlink}
          className="pl-3 text-white font-mono text-2xl sm:2xl animate-pulse"
        >
          {recent}
        </Link>
      </div>
      <Link
        target="blank"
        to={
          "https://www.cloudskillsboost.google/public_profiles/eada8372-c786-4254-907c-aae29d5e0f43"
        }
        className="bg-quarternary-a hover:bg-quarternary-b duration-300 p-4 rounded-sm flex justify-center items-center gap-5"
      >
        <img src={googleCloudLogo} width={30} />
        <div className="text-lg font-semibold hidden lg:flex ">
          Visit my Google Cloud Skill Profile
        </div>
      </Link>
    </div>
  );
}
