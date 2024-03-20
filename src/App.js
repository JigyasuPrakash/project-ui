import { Link } from 'react-router-dom';
import crowdImage from './crowd_PNG41.png';
import "./style.css";
import Gallery from './components/Gallery';
import './components/gallery.css'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
         <u>Alpha Events</u> 
        </h1>
        <div className='carousel '>
         <Gallery/>
        </div>
        <Link to="/venue"><button className='btn'>Venue</button></Link>
        <Link to="/organizer"><button  className='btn'>Organizer</button></Link>
        <Link to="/category"><button  className='btn'>Category</button></Link>
        <Link to="/event"><button  className='btn'>Event</button></Link>
        <Link to="/poster"><button  className='btn'>Poster</button></Link>

      </header>
      {/* <img src={crowdImage} alt="Crowd" /> */}
    </div>
  );
}

export default App;
