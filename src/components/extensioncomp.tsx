import incredwatcher from "/incredwatcher.png";
import darogawatcher from "/darogawatcher.png";

export default function ExtensionComp() {
  return (
    <div className=" w-[56rem] h-[30rem] p-4 bg-gradient-to-r from-black via-slate-950 to-black border-t-[1px] border-b-[1px] border-slate-950 ">
      <div className=" flex items-center justify-center text-3xl hover:tracking-widest duration-300 -rotate-90 translate-x-[25rem] translate-y-[13rem] ">
        E X T E N S I O N S
      </div>
      <div className=" flex items-center justify-center text-3xl hover:tracking-widest duration-300 -rotate-90 -translate-x-[25rem] translate-y-[10rem]">
        V S C O D E
      </div>
      <div className="flex justify-center gap-4">
        <div className="ring-1 ring-indigo-900 w-[18rem] h-[24rem] -translate-y-20 rounded-sm p-2 flex flex-col justify-between">
          <div>
            <img src={incredwatcher} />
          </div>
          <div>
            <div>INCREDIBLE WATCHER</div>
            <div className="text-slate-500 font-mono text-md">14K installs</div>
          </div>
          <div className="font-mono text-gray-400">
            It is a VS code Extension that takes error and display it in a funny
            way. It make coding fun.
          </div>
          <button className="flex bg-green-500 p-2 w-full justify-center items-center">
            INSTALL
          </button>
        </div>
        <div className="ring-1 ring-indigo-900 w-[18rem] h-[24rem] rounded-sm p-2 flex flex-col justify-between">
          <div>
            <img src={darogawatcher} />
          </div>
          <div>
            <div>DAROGA WATCHER</div>
            <div className="text-slate-500 font-mono text-md">426 installs</div>
          </div>
          <div className="font-mono text-gray-400">
            It is a VS code Extension that takes error and display it in a funny
            way. It make coding fun.
          </div>
          <button className="flex bg-green-500 p-2 w-full justify-center hover:bg-green-700 items-center duration-300 ease-outs">
            INSTALL
          </button>
        </div>
      </div>
    </div>
  );
}
