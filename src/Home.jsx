import Descript from "./Components/Descript";
import Faculty from "./Components/Faculty";
import President from "./Components/President";
import Statcards from "./Components/Statcards";
import Admin from "./Components/Admin";
import { Fade, Rotate, Zoom } from 'react-reveal';


function App() {

  return (
    <div>
    
    <Fade>
    <Descript/>
    <President/>
    <Admin/>
    <Faculty/>
    <Statcards/>
    </Fade>
  
    </div>
  );
}

export default App
