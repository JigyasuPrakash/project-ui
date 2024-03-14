import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>
          Homepage
        </h2>
        <Link to="/venue"><button>Venue</button></Link>
        <Link to="/organizer"><button>Organizer</button></Link>
        <Link to="/category"><button>Category</button></Link>
        <Link to="/event"><button>Event</button></Link>
      </header>
    </div>
  );
}

export default App;
