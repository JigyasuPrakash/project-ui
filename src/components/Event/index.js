import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import './style.css';

function App() {

    const [events, setEvents] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3030/event").then((response) => {
            if (response.status == 200) {
                console.log(response.data);
                setEvents(response.data);
            } else {
                console.error("Something went wrong!");
            }
        })
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <h2>
                    EVENT
                </h2>

                <table className="event-table">
                    <thead>
                        <tr>
                            <th>name</th>
                            <th>year</th>
                            <th>fee</th>
                            <th>start_date</th>
                            <th>end_date</th>

                        </tr>
                    </thead>

                    <tbody>
                        {events.map((event, index) => (
                            <tr key={index}>
                                <td>{event.name}</td>
                                <td>{event.year}</td>
                                <td>{event.fee}</td>
                                <td>{event.start_date}</td>
                                <td>{event.end_date}</td>
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
