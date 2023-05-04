import Navbar from "./components/navbar";
import MiniAbout from "./components/miniabout";
import ImgNsocial from "./components/imgandsocial";
import ViewNscrldwn from "./components/viewnscrldwn";

function App() {
  return (
    <div className="bg-primary-a">
      <Navbar />
      <ViewNscrldwn />
      <MiniAbout />
      <ImgNsocial />
    </div>
  );
}

export default App;
