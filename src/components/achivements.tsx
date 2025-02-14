import achive1 from "/achive1.jpg";
import achive2 from "/achive2.jpg";
import achive3 from "/achive3.jpg";
import AchivementBox from "./achinementBox";

function Achivements() {
  return (
    <div className="h-max w-full m-5  flex flex-col items-center justify-around gap-6">
      <div className="text-quarternary-a font-bold text-2xl hover:tracking-widest duration-300 ">
        A C H I V E M E N T
      </div>
      <div className=" flex flex-col justify-around items-center w-full gap-4 p-2 rounded-md ">
        <div className="w-full flex flex-wrap gap-x-10 justify-center">
          <AchivementBox
            achiveImg={achive1}
            achiveName="GDSC Swags"
            achiveDesc="Tier 1 in Study Jam"
            achiveLink="https://www.linkedin.com/posts/avisekh-sabi-660603246_swags-from-google-cloud-study-jam-activity-7223932610618527746-8730"
          />
          <AchivementBox
            achiveImg={achive2}
            achiveName="Won Future Tech"
            achiveDesc="Made Track0tiny as project"
            achiveLink="https://www.linkedin.com/posts/avisekh-sabi-660603246_thrilled-to-announce-that-ive-secured-third-activity-7223935840480092160-QBQ_"
          />
          <AchivementBox
            achiveImg={achive3}
            achiveName="Consecutive Wins"
            achiveDesc="IEEE Hackathon and Ideathon"
            achiveLink="https://www.linkedin.com/posts/avisekh-sabi-660603246_innovation-hackathon-ideathon-activity-7279183923224412161-BbwC"
          />
          {/* <AchivementBox
            achiveImg={achive3}
            achiveName="Consecutive Wins"
            achiveDesc="IEEE Hackathon and Ideathon"
            achiveLink="https://www.linkedin.com/posts/avisekh-sabi-660603246_innovation-hackathon-ideathon-activity-7279183923224412161-BbwC"
          /> */}
        </div>
      </div>
    </div>
  );
}

export default Achivements;
