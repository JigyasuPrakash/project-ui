import { Link } from "react-router-dom";

function App() {
    const event = [
        {name:"Samiksha Agrawal",year:[1,2,3], fee:"80", start_date:"6 March 2024 at 21:00:00 UTC+5:30", end_date:"7 March 2024 at 21:00:00 UTC+5:30"},
        {name:"Samiksha Agrawal",year:[1,2,3], fee:"80", start_date:"6 March 2024 at 21:00:00 UTC+5:30", end_date:"7 March 2024 at 21:00:00 UTC+5:30"},
        {name:"Samiksha Agrawal",year:[1,2,3], fee:"80", start_date:"6 March 2024 at 21:00:00 UTC+5:30", end_date:"7 March 2024 at 21:00:00 UTC+5:30"},
        {name:"Samiksha Agrawal",year:[1,2,3], fee:"80", start_date:"6 March 2024 at 21:00:00 UTC+5:30", end_date:"7 March 2024 at 21:00:00 UTC+5:30"},
    ];

    return (
        <div className="App">
            <header className="App-header">
            <Link to="/"><button>Home</button></Link>
            <h1>Event Table</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Year</th>
                        <th>Fee</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Link</th>
                    </tr>
                </thead>
                <tbody>
                    {event.map((ele, index) => (
                        <tr key={index}>
                            <td>{ele.name}</td>
                            <td>{ele.year.join(', ')}</td>
                            <td>{ele.fee}</td>
                            <td>{ele.start_date}</td>
                            <td>{ele.end_date}</td>
                        </tr>
                    ))}
                </tbody>
                </table>
            </header>
        </div>
    );
}

export default App;
