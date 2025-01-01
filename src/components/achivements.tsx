import { Link } from "react-router-dom";
import achive1 from "/achive1.jpg";
import achive2 from "/achive2.jpg";
import achive3 from "/achive3.jpg";

function Achivements() {
  return (
    <div className="h-max w-full m-5  flex flex-col items-center justify-around gap-6">
      <div className="text-quarternary-a font-bold text-2xl hover:tracking-widest duration-300 ">
        A C H I V E M E N T
      </div>
      <div className="flex flex-col justify-around items-center w-full gap-4 p-2 rounded-md ">
        <div className="w-full flex gap-4">
          <Link
            className="h-80 w-1/3  flex flex-col justify-start "
            to={
              "https://www.linkedin.com/posts/avisekh-sabi-660603246_swags-from-google-cloud-study-jam-activity-7223932610618527746-8730?utm_source=share&utm_medium=member_desktop"
            }
            target="_blank"
          >
            <img
              src={achive1}
              alt="GoogleCloudStudyJamSwags"
              className="rounded-lg"
            />
            <div className="py-4 flex flex-col items-start justify-center ">
              <div className="text-xl font-mono font-semibold text-quarternary-a rounded-b-lg">
                GDSC Swags
              </div>
              <div className="text-md font-mono font-semibold text-quarternary-c rounded-b-lg">
                Tier 1 in Study Jam
              </div>
            </div>
          </Link>
          <Link
            className="h-80 w-1/3  flex flex-col justify-start"
            to={
              "https://www.linkedin.com/posts/avisekh-sabi-660603246_thrilled-to-announce-that-ive-secured-third-activity-7223935840480092160-QBQ_?utm_source=share&utm_medium=member_desktop"
            }
            target="_blank"
          >
            <img
              src={achive2}
              alt="GoogleCloudStudyJamSwags"
              className="rounded-lg"
            />

            <div className="py-4 flex flex-col items-start justify-center ">
              <div className="text-xl font-mono font-semibold text-quarternary-a rounded-b-lg">
                Won Future Tech
              </div>
              <div className="text-md font-mono font-semibold text-quarternary-c rounded-b-lg">
                Made Track0tiny as project
              </div>
            </div>
          </Link>
          <Link
            className="h-80 w-1/3  flex flex-col justify-start"
            to={
              "https://www.linkedin.com/posts/avisekh-sabi-660603246_innovation-hackathon-ideathon-activity-7279183923224412161-BbwC?utm_source=share&utm_medium=member_desktop"
            }
            target="_blank"
          >
            <img
              src={achive3}
              alt="GoogleCloudStudyJamSwags"
              className="rounded-lg"
            />

            <div className="py-4 flex flex-col items-start justify-center ">
              <div className="text-xl font-mono font-semibold text-quarternary-a rounded-b-lg">
                Consecutive Wins
              </div>
              <div className="text-md font-mono font-semibold text-quarternary-c rounded-b-lg">
                Hackathon and Ideathon
              </div>
            </div>
          </Link>
        </div>
        {/* <div className="w-full flex gap-4">
          <div className="h-80 w-1/3 bg-blue-300">Avisekh</div>
          <div className="h-80 w-1/3 bg-blue-300">Avisekh</div>
          <div className="h-80 w-1/3 bg-blue-300">Avisekh</div>
        </div> */}
      </div>
    </div>
  );
}

export default Achivements;
