import Achivements from "./achivements";
import Techstack from "./techstack";

function AboutMe() {
  return (
    <div className="py-10 flex justify-center items-center mt-10 mb-3 lg:mb-10 lg:mx-40 mx-10  flex-col gap-8">
      <Techstack />
      <Achivements />
    </div>
  );
}

export default AboutMe;
