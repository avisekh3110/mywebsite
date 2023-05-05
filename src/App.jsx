import Navbar from "./components/navbar";
import MiniAbout from "./components/miniabout";
// import ImgNsocial from "./components/imgandsocial";
// import ViewNscrldwn from "./components/viewnscrldwn";

function App() {
  return (
    <div className="bg-primary-a min-h-screen min-w-screen">
      <Navbar />
      {/* <ViewNscrldwn /> */}
      <div className="flex">
        <MiniAbout />
        {/* <ImgNsocial /> */}
      </div>
    </div>
  );
}

export default App;
