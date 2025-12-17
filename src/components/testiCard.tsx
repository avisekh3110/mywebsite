import { Link } from "react-router-dom";

interface TestiCardProps {
  testiImg: string;
  testiLink: string;
  testiName: string;
  testiDesc: string;
}

function TestiCard(prop: TestiCardProps) {
  return (
    <div className="relative h-5/6 min-w-[20rem] flex items-end animate-swipe hover:scale-[120%]">
      <img
        src={prop.testiImg}
        alt="Sample"
        className="absolute bg-white h-20 w-20 -translate-y-52 translate-x-4 rounded-full ring-gray-500 ring"
      />
      <div className="bg-white h-5/6 flex flex-col justify-start rounded-md w-full ">
        <Link
          to={prop.testiLink}
          target="_blank"
          className="flex w-full justify-end py-4 pr-8 text-lg font-bold"
        >
          {prop.testiName}
        </Link>
        <div className="flex px-4 text-center font-mono font-semibold text-gray-700 overflow-y-scroll">
          {prop.testiDesc}
        </div>
      </div>
    </div>
  );
}

export default TestiCard;
