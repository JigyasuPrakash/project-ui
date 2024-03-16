import { Link } from "react-router-dom";

function App() {
    const category = [
        {audience_size: "small", duration: "one-day", name: "Cultural", sponser: "true"},
        {audience_size: "small", duration: "one-day", name: "Cultural", sponser: "true"},
        {audience_size: "small", duration: "one-day", name: "Cultural", sponser: "true"},
        {audience_size: "small", duration: "one-day", name: "Cultural", sponser: "true"}, 
    ];

    return (
        <div className="App">
            <header className="App-header">
            <Link to="/"><button>Home</button></Link>
            <h1>Category Table</h1>
            
            <table>
                <thead>
                    <tr>
                 
                        <th>Audience Size</th>
                        <th>Duration</th>
                        <th>Name</th>
                        <th>Sponsor</th>
                    </tr>
                </thead>
                <tbody>
                    {category.map((ele, index) => (
                        <tr key={index}>
                             <td>{ele.audience_size}</td>
                
                            <td>{ele.duration}</td>
                            <td>{ele.name}</td>
                            <td>{ele.sponser}</td>
                        </tr>
                    ))}
                </tbody>
                </table>
            </header>
        </div>
    );
}

export default App;
