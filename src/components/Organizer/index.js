import { Link } from "react-router-dom";

function App() {
    const organizer = [
        {committee: "NSS", poc_contact: "123-456-7890", poc_email: "devendramahajan@gmail.com", poc_name: "Devendra Mahajan"},
        {committee: "NSS", poc_contact: "123-456-7890", poc_email: "devendramahajan@gmail.com", poc_name: "Devendra Mahajan"},
        {committee: "NSS", poc_contact: "123-456-7890", poc_email: "devendramahajan@gmail.com", poc_name: "Devendra Mahajan"},
        {committee: "NSS", poc_contact: "123-456-7890", poc_email: "devendramahajan@gmail.com", poc_name: "Devendra Mahajan"},
    ];
    return (
        <div className="App">
            <header className="App-header">
            <Link to="/"><button>Home</button></Link>
                <h2>
                    ORGANIZER Table
                </h2>
                
                <table>

                    <thead>
                        <tr><th>committee</th>
                            <th>poc_contact</th>
                            <th>poc_email</th>
                            <th>poc_name</th>
                        </tr>
                    </thead>

                    <tbody>
                        {organizer.map((event, index) => (
                            <tr key={index}>
                                <td>{event.committee}</td>
                                <td>{event.poc_contact}</td>
                                <td>{event.poc_email}</td>
                                <td>{event.poc_name}</td>
                            </tr>
                        ))}
                    </tbody>
                
                </table>
            </header>
        </div>
    );
}

export default App;