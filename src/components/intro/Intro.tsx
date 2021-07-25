import './intro.scss';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import { init } from 'ityped';
import { useEffect, useRef } from 'react';

export default function Intro() {
  const textRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!textRef.current) return;
    init(textRef.current, {
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Software Engineer", "UChicago Alumni", "First-Generation College Graduate"]
    });
  }, [])

  return (
    <div className='intro' id='home'>
      <div className="left">
        <div className="imgContainer">
          <img src="https://www.pngall.com/wp-content/uploads/2016/04/Happy-Person-Free-Download-PNG.png" alt="man" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Marco Anaya</h1>
          <h3><span ref={textRef}></span></h3>
          <a href="#portfolio">
            <ExpandMoreOutlinedIcon className="icon"/>
          </a>  
        </div>
        
      </div>
    </div>
  )
}
