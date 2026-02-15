import github from "/assets/github.png";
import instagram from "/assets/instagram.png";
import linkedin from "/assets/linkedin.png";
import youtube from "/assets/youtube.png";

import { Link } from "react-router-dom";

function SoicalBar() {
  return (
    <div className=" absolute right-0 top-[25%] select-none justify-around bg-quarternary-a bg-opacity-20 py-6 px-4 rounded-full flex sm:flex-col self-center lg:mr-16 mr-10 gap-8">
      <Link
        to={"https://github.com/avisekh3110"}
        target="_blank"
        title="Github"
      >
        <img src={github} width="25" height="25" />
      </Link>
      <Link
        to={"https://www.linkedin.com/in/avisekh-sabi-660603246/"}
        target="_blank"
        title="LinkedIn"
      >
        <img src={linkedin} width="25" height="25" />
      </Link>
      <Link
        to={"https://www.instagram.com/avisekh_sabi/"}
        target="_blank"
        title="Instagram"
      >
        <img src={instagram} width="25" height="25" />
      </Link>
      <Link
        to={"https://www.youtube.com/@avisekhartzz"}
        target="_blank"
        title="Youtube"
      >
        <img src={youtube} width="25" height="25" />
      </Link>
    </div>
  );
}

export default SoicalBar;
