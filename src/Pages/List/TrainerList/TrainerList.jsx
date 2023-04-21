import Navbar from "../../../Components/Navbar/Navbar";
import Sidebar from "../../../Components/Sidebar/Sidebar";
import "./TrainerList.scss"
import { Link } from "react-router-dom";
import Footer from "../../../Components/Footer/Footer";
import { DataGrid } from '@mui/x-data-grid';
import { useState } from "react";

const columns = [
    { field: 'id', headerName: 'ID', width: 50 },
    { field: 'firstName', headerName: 'First name', width: 100 },
    { field: 'lastName', headerName: 'Last name', width: 100 },
    { field: 'phone', headerName: 'Mobile', width: 120 },
    { field: 'email', headerName: 'Email', width: 250 },
    { field: 'subject', headerName: 'Subject', width: 130 },
];

export const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', email: 'snowjohn123@gmail.com', phone: '9500443328', subject: 'FullStack' },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', email: 'lannisterserceei123@gmail.com', phone: '9500443328', subject: 'Salesforce'},
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', email: 'snowjohn123@gmail.com', phone: '9500443328', subject: 'C Language' }
];
const TrainerList = () => {
    const [data, setData] = useState(rows);

    const handleDelete = (id) => {
        console.log(id);
        // setData(data.filter(item => item.id !== id));
    }

    const actionColumn = [{
        field: 'action', headerName: 'Action', width: 150, renderCell: (param) => {
            return (
                <div className="cellAction">
                    <Link to="/students/:studentId" style={{ textDecoration: "none" }}>
                        <div className="editButton">Edit</div>
                    </Link>
                    <div className="deleteButton" onClick={()=>handleDelete(param.rows.id)}>Delete</div>
                </div>
            )
        }
    }];
    return(
        <div className="list">
            <Sidebar/>
            <div className="listContainer">
                <Navbar/>
               <div className="contents">
                    <div className="buttonContent">
                        <Link to="/students/new" style={{ textDecoration: "none" }}>
                            <button>Add New Trainer</button>
                        </Link>
                    </div>
                    <div className="datatable">
                        <DataGrid
                            className="datagrid"
                            rows={data}
                            columns={columns.concat(actionColumn)}
                            pageSize={8}
                            rowsPerPageOptions={[8]}
                            checkboxSelection
                        />
                    </div>
               </div>
                <Footer/>
            </div>
        </div>
    )
}
export default TrainerList;