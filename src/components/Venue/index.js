import { Link } from "react-router-dom";
import "./style.css";

function App() {
    const venue = [
        {name: "MG auditorium", location:"Globe square", approval_required: true,capacity:400},
        {name: "MG auditorium", location:"Globe square", approval_required: true,capacity:400},
        {name: "MG auditorium", location:"Globe square", approval_required: true,capacity:400},
        {name: "MG auditorium", location:"Globe square", approval_required: true,capacity:400},
    ];


    return (
        <div className="App">
            <header className="App-header">
                <h2>
                    VENUE
                </h2>
                
                <table className="venue-table">

                    <thead>
                        <tr><th>Name</th>
                            <th>location</th>
                            <th>approval_required</th>
                            <th>capacity</th>
                        </tr>
                    </thead>

                    <tbody>
                        {venue.map((event, index) => (
                            <tr key={index}>
                                <td>{event.name}</td>
                                <td>{event.location}</td>
                                <td>{event.approval_required ? "TRUE" : "FALSE"}</td>
                                <td>{event.capacity}</td>
                            </tr>
                        ))}
                    </tbody>

                
                </table>
                <Link to="/"><button>Home</button></Link>


            </header>
        </div>
    );
}

export default App;
