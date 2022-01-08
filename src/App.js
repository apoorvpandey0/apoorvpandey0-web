import Feed from "./components/Feed";
import SideBar from "./components/SideBar";
import ConnectBar from "./components/Connect";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <div className="grid grid-cols-1 md:grid-cols-12 h-full gap-4 my-3">
        <SideBar/>
        <Feed/>
        <ConnectBar/>
      </div>
    </div>
  );
}

export default App;
