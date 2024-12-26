import Achivements from "./achivements";
import Techstack from "./techstack";

function AboutMe() {
  return (
    <div className="py-10 flex justify-center items-center mt-10 mb-10 lg:mb-52 lg:mx-60 mx-10  flex-col gap-8">
      <Techstack />
      <Achivements />
    </div>
  );
}

export default AboutMe;
