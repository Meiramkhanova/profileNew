import { Outlet } from "react-router-dom";
import "./App.css";
import Aside from "./components/Aside";

function App() {
  return (
    <>
      <Aside />
      <div className="main-content">
        <nav>Navbar</nav>
        <section style={{ scrollBehavior: "smooth" }}>
          <Outlet />
        </section>
      </div>
    </>
  );
}

export default App;
