import { Link } from 'react-router-dom';
import crowdImage from './crowd_PNG41.png';
import "./style.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Alpha Events
        </h1>

        <Link to="/venue"><button>Venue</button></Link>
        <Link to="/organizer"><button>Organizer</button></Link>
        <Link to="/category"><button>Category</button></Link>
        <Link to="/event"><button>Event</button></Link>
        <Link to="/photo"><button>PhotoGallery</button></Link>

      </header>
      <img src={crowdImage} alt="Crowd" />
    </div>
  );
}

export default App;
