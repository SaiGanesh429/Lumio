import Header from "./components/Header";
import MainContainer from "./components/MainContainer";
import SideContainer from "./components/SideContainer";

export default function Home() {
  return (
    <div>
      <div className="flex">
       <SideContainer />
       <MainContainer />
      </div>
    </div>
  );
}
