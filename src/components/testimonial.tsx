import TestiCard from "./testiCard";
import testi1 from "/testi1.jpg";
import testi2 from "/testi2.jpg";
import testi3 from "/testi3.png";
import testi5 from "/testi5.jpg";

export default function Testimonial() {
  return (
    <div className=" flex flex-col justify-between  h-[32rem] mb-20 gap-6">
      <div className=" h-1/4 flex flex-col justify-center items-center">
        <div className="text-8xl text-secondary opacity-40 font-extrabold">
          CONNECTIONS
        </div>
        <div className="font-bold text-white tracking tracking-widesest text-xl absolute transform translate-y-2 translate-x-3">
          TESTIMONIALS
        </div>
      </div>
      <div className="bg-gradient-to-l from-secondary to-purple-900 h-3/4 flex justify-center items-center">
        <div className=" w-5/6 h-full flex justify-start items-center gap-5 overflow-hidden px-8">
          <TestiCard
            testiLink="https://www.linkedin.com/in/anubhav-yadav-9b8408207?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            testiDesc="Avisekh is the most reliable person to work with, be it night or day he is the one i can trust with any work. Be it designing or Winning a hackathon, Sabi is my no. 1 choice."
            testiImg={testi1}
            testiName="Anubhav Yadav"
          />
          <TestiCard
            testiLink="https://www.linkedin.com/in/anuragkumar008/"
            testiDesc="Avisekh is incredibly dedicated and hardworking as a web developer. I truly admire his ability to tackle complex challenges, stay committed to his craft."
            testiImg={testi2}
            testiName="Anurag Kumar"
          />
          <TestiCard
            testiLink="https://www.linkedin.com/in/aryan-srivastav-550931200/"
            testiDesc="Avisekh is a brilliant frontend developer and UI/UX designer who combines creativity, precision, energy, and humor. He makes every project enjoyable and successful."
            testiImg={testi3}
            testiName="Aryan Srivastava"
          />
          <TestiCard
            testiLink="https://www.linkedin.com/in/anubhav-yadav-9b8408207?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            testiDesc="Avisekh is the most reliable person to work with, be it night or
            day he is the one i can trust with any work. Be it designing or
            Winning a hackathon, Sabi is my no. 1 choice."
            testiImg={testi1}
            testiName="Anubhav Yadav"
          />
          <TestiCard
            testiLink="https://www.linkedin.com/in/nidhi-sharma-9a5862344/"
            testiDesc="Avisekh is the most reliable person to work with, be it night or
          day he is the one i can trust with any work. Be it designing or
          Winning a hackathon, Sabi is my no. 1 choice."
            testiImg={testi5}
            testiName="Nidhi Sharma"
          />
        </div>
      </div>
    </div>
  );
}
