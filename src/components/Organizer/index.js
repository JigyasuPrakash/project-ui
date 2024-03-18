import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { TableContainer, Paper, Table, TableHead, TableCell, TableRow } from '@mui/material'

function App() {
    const [organizer, setOrganizer] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3030/organizer").then((response) => {
            if (response.status === 200) {
                setOrganizer(response.data);
            } else {
                console.error("Something went wrong!");
            }
        })
    }, []);
    return (
        <div className="App">
            <header className="App-header">
                <h2>ORGANIZER</h2>

                <TableContainer className={Paper}>
                    <Table sx={{ minWidth: 650 }}>
                        <TableHead>
                            <TableRow>
                                <TableCell>Committee</TableCell>
                                <TableCell>Contact</TableCell>
                                <TableCell>Email</TableCell>
                                <TableCell>Name</TableCell>
                            </TableRow>
                        </TableHead>
                        <tbody>
                            {organizer.map((organizer, index) => (
                                <TableRow key={index}>
                                    <TableCell>{organizer.comittee}</TableCell>
                                    <TableCell>{organizer.poc_contact}</TableCell>
                                    <TableCell>{organizer.poc_email}</TableCell>
                                    <TableCell>{organizer.poc_name}</TableCell>
                                </TableRow>
                            ))}
                        </tbody>
                    </Table>
                </TableContainer>
                <Link to="/"><button>Home</button></Link>
            </header>
        </div>
    );
}

export default App;
