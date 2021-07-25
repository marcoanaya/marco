import './topbar.scss'
import { Mail, LinkedIn, GitHub } from '@material-ui/icons';
import React from 'react';

type TopbarProps = {
  menuOpen: boolean,
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Topbar({ menuOpen, setMenuOpen }: TopbarProps) {
  return (
    <div className={`topbar ${menuOpen && 'active'}`}>
      <div className="wrapper">
        <div className="left">
          {/* <a href="#portfolio">portfolio</a>
          <a href="#contact">contact</a> */}
          <a href="#home" className="logo">Marco Anaya</a>
          <div className="itemContainer">
            <Mail className="icon"/>
            <a href="mailto:marcoanayavaldovinos@gmail.com">marcoanayavaldovinos@gmail.com</a>
            <LinkedIn className="icon"/>
            <a href="https://linkedin.com/in/marcoanaya">marcoanaya</a>
            <GitHub className="icon"/>
            <a href="https://github.com/marcoanaya">marcoanaya</a>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span className="line1"></span>
          <span className="line2"></span>
          <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  )
} 
