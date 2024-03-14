import { Link } from "react-router-dom";

function App() {
    const organizer = [
        {comittee:"Music Club", poc_contact:"8372849132", poc_email:"mohannitin@gmail.com", poc_name:"Nitin Mohan"},
        {comittee:"Music Club", poc_contact:"8372849132", poc_email:"mohannitin@gmail.com", poc_name:"Nitin Mohan"},
        {comittee:"Music Club", poc_contact:"8372849132", poc_email:"mohannitin@gmail.com", poc_name:"Nitin Mohan"},
        {comittee:"Music Club", poc_contact:"8372849132", poc_email:"mohannitin@gmail.com", poc_name:"Nitin Mohan"},
    ];
    return (
        <div className="App">
            <header className="App-header">
                <h2>
                    ORGANIZER
                </h2>
                
                <table>

                    <thead>
                        <tr><th>comittee</th>
                            <th>poc_contact</th>
                            <th>poc_email</th>
                            <th>poc_name</th>
                        </tr>
                    </thead>

                    <tbody>
                        {organizer.map((event, index) => (
                            <tr key={index}>
                                <td>{event.comittee}</td>
                                <td>{event.poc_contact}</td>
                                <td>{event.poc_email}</td>
                                <td>{event.poc_name}</td>
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
