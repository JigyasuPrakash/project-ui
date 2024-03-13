import { Link } from "react-router-dom";

function App() {
    const venue = [
        {name: "ABC", location: "Main Audi", capacity: 50},
        {name: "PQR", location: "MBA Audi", capacity: 20}
    ];

    return (
        <div className="App">
            <header className="App-header">
                <h2>
                    Venue Page hai ye bro
                </h2>
                <Link to="/"><button>Home</button></Link>
                {venue.map((ele) => (
                    <p>{ele.name} :: {ele.location} :: {ele.capacity}</p>
                ))}
            </header>
        </div>
    );
}

export default App;
