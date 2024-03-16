import { Link } from "react-router-dom";
import "./style.css";

function App() {
    const organizer = [
        {name:"Nitin Mohan",year:[1,2,3], fee:"80", start_date:"6 March 2024 at 21:00:00 UTC+5:30", end_date:"7 March 2024 at 21:00:00 UTC+5:30"},
        {name:"Nitin Mohan",year:[1,2,3], fee:"80", start_date:"6 March 2024 at 21:00:00 UTC+5:30", end_date:"7 March 2024 at 21:00:00 UTC+5:30"},
        {name:"Nitin Mohan",year:[1,2,3], fee:"80", start_date:"6 March 2024 at 21:00:00 UTC+5:30", end_date:"7 March 2024 at 21:00:00 UTC+5:30"},
        {name:"Nitin Mohan",year:[1,2,3], fee:"80", start_date:"6 March 2024 at 21:00:00 UTC+5:30", end_date:"7 March 2024 at 21:00:00 UTC+5:30"},
    ];
    return (
        <div className="App">
            <header className="App-header">
                <h2>
                    ORGANIZER
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
                        {organizer.map((event, index) => (
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
