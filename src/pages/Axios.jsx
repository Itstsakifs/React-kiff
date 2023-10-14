import React from "react";
import Case from "../component/case";
import axios from "axios";
import Table from "react-bootstrap/Table";

export default function Axios() {
    const [data, setData] = React.useState(null);

    React.useEffect(() => {
        axios
        .get("https://reqres.in/api/users?page=1")
        .then((res) => {
            setData(res.data.data);
        })
        .catch((err) => {
            console.error("Error fetching data:", err);
        });
    }, []);

    if (!data) return null;

return (
    <Case>
        <div className="w-full max-w-lg">
            <h4 className="text-2xl">Ini adalah penimplementasian Axios</h4>
            <Table striped bordered hover className="mt-3">
            <thead>
                <tr>
                    <th>NO</th>
                    <th>Email</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Avatar</th>
                </tr>
            </thead>
            <tbody>
                {data.map((vm,idx) => (
                <tr key={idx}>
                    <td>{1+idx}</td>
                    <td>{vm.email}</td>
                    <td>{vm.first_name}</td>
                    <td>{vm.last_name}</td>
                    <td>
                    <img
                        src={vm.avatar}
                        alt="Avatar"
                        style={{ width: "50px", height: "50px" }}
                    />
                    </td>
                </tr>
                ))}
            </tbody>
            </Table>
        </div>
    </Case>
    );
}
