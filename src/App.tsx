import Contact from "./components/contact/Contact";
import Portfolio from "./components/portfolio/Portfolio";
import Topbar from "./components/topbar/Topbar";
import './app.scss'
import Intro from "./components/intro/Intro";
import { useState } from "react";
import Menu from "./components/menu/Menu";

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Topbar {...{menuOpen, setMenuOpen}}/>
      <Menu {...{menuOpen, setMenuOpen}}/>
      <div className="sections">
        <Intro/>
        <Portfolio/>
        <Contact/>
     </div>
    </div>
  );
}

export default App;
