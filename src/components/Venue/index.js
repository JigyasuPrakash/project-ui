import { Link } from "react-router-dom";

function App() {
    const venue = ["ABC", "PQR", "XYZ", "CDEF"];

    return (
        <div className="App">
            <header className="App-header">
                <h2>
                    Venue Page hai ye bro
                </h2>
                <Link to="/"><button>Home</button></Link>
                {venue.map((ele) => (
                    <button>{ele}</button>
                ))}
            </header>
        </div>
    );
}

export default App;
