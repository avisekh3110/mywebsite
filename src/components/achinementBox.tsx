import { Link } from "react-router-dom";

interface AchiveProps {
  achiveImg: string;
  achiveLink: string;
  achiveName: string;
  achiveDesc: string;
}

function AchivementBox(prop: AchiveProps) {
  return (
    <>
      <Link
        className="h-fit w-[15rem] lg:w-[20rem] flex flex-col justify-start hover:scale-[120%] duration-300"
        to={prop.achiveLink}
        target="_blank"
      >
        <img
          src={prop.achiveImg}
          alt="GoogleCloudStudyJamSwags"
          className="rounded-lg"
        />

        <div className="py-4 flex flex-col items-start justify-center ">
          <div className="text-xl font-mono font-semibold text-quarternary-a rounded-b-lg">
            {prop.achiveName}
          </div>
          <div className="text-md font-mono font-semibold text-quarternary-c rounded-b-lg">
            {prop.achiveDesc}
          </div>
        </div>
      </Link>
    </>
  );
}

export default AchivementBox;
