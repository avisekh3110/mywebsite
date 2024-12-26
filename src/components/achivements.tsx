import achive1 from "/achive1.jpg";
import achive2 from "/achive2.jpg";
import achive3 from "/achive3.jpg";

function Achivements() {
  return (
    <div className="h-max w-full m-5  flex flex-col items-center justify-around gap-6">
      <div className="text-quarternary-a   font-bold text-2xl hover:tracking-widest duration-300 ">
        A C H I V E M E N T
      </div>
      <div className="flex flex-col justify-around items-center w-full gap-4 ">
        <div className="w-full flex gap-4">
          <div className="h-80 w-1/3  flex flex-col justify-start ">
            <img
              src={achive1}
              alt="GoogleCloudStudyJamSwags"
              className="rounded-t-lg"
            />

            <div className="h-14 flex items-center  justify-center text-lg font-mono font-semibold bg-quarternary-a rounded-b-lg p-4 text-center">
              Google Study Jam Swags
            </div>
          </div>
          <div className="h-80 w-1/3  flex flex-col justify-start ">
            <img
              src={achive2}
              alt="GoogleCloudStudyJamSwags"
              className="rounded-t-lg"
            />

            <div className="h-14 flex items-center  justify-center text-lg font-mono font-semibold bg-quarternary-a rounded-b-lg p-4 text-center">
              3rd Prize in Future Tech
            </div>
          </div>
          <div className="h-80 w-1/3  flex flex-col justify-start ">
            <img
              src={achive3}
              alt="GoogleCloudStudyJamSwags"
              className="rounded-t-lg"
            />

            <div className="h-14 flex items-center  justify-center text-lg font-mono font-semibold bg-quarternary-a rounded-b-lg p-4 text-center">
              consecutive Wins
            </div>
          </div>
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
