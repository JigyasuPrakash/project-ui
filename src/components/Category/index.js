import { Link } from "react-router-dom";
import "./style.css";

function App() {
    const category = [
        {name: "Cultural", sponsor: true, audience_size: "small", duration: "one-day"},
        {name: "Music", sponsor: true, audience_size: "small", duration: "one-day"},
        {name: "Drama", sponsor: true, audience_size: "small", duration: "one-day"},
        {name: "Sports", sponsor: true, audience_size: "small", duration: "one-day"}

    ];
    return (
        <div className="App">
            <header className="App-header">
                <h2>
                    CATEGORY
                </h2>
                <table className="category-table">

                    <thead>
                        <tr><th>Name</th>
                            <th>Sponsor</th>
                            <th>Audience Size</th>
                            <th>Duration</th>
                        </tr>
                    </thead>

                    <tbody>
                        {category.map((event, index) => (
                            <tr key={index}>
                                <td>{event.name}</td>
                                <td>{event.sponsor ? "TRUE" : "FALSE"}</td>
                                <td>{event.audience_size}</td>
                                <td>{event.duration}</td>
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
