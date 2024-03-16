import { Link } from "react-router-dom";

function App() {
    const venue = [
        {name: "ABC", location: "Main Audi", capacity: 50, approval_required: "Yes"},
        {name: "PQR", location: "MBA Audi", capacity: 20, approval_required: "Yes"},
        {name: "PQR", location: "MBA Audi", capacity: 20, approval_required: "Yes"},
        {name: "PQR", location: "MBA Audi", capacity: 20, approval_required: "Yes"}
    ];

    return (
        <div className="App">
            <header className="App-header">
            <Link to="/"><button>Home</button></Link>
                <h2>Venue Table </h2>
               
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Location</th>
                            <th>Capacity</th>
                            <th>Approval Required</th>
                        </tr>
                    </thead>
                    <tbody>
                        {venue.map((ele, index) => (
                            <tr key={index}>
                                <td>{ele.name}</td>
                                <td>{ele.location}</td>
                                <td>{ele.capacity}</td>
                                <td>{ele.approval_required}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </header>
        </div>
    );
}

export default App;
