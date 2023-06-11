import React, {useState, useEffect} from 'react'
import EmployeeService from '../Services/EmployeeService'
import { Link } from 'react-router-dom'

const EmployeeLeavesList = () =>{
    const [employees, setEmployees] = useState([])

    useEffect(() => {

        getAllEmployees();
    }, [])

    const getAllEmployees = () => {
        EmployeeService.getAllEmployees().then((response) => {
            setEmployees(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    }

    return (
        <div className = "container">
            <h2 className = "text-center"> List of Employees </h2>
            <br/>
            <table className="table table-bordered table-striped">
                <thead>
                    <th> Employee Id </th>
                    <th> Employee Name </th>
                    <th> Employee Age </th>
                    <th> Employee Address </th>
                    <th> Employee Role </th>
                    <th> Action </th>
                </thead>
                <tbody>
                    {
                        employees.map(
                            employee =>
                            <tr key = {employee.id}> 
                                <td> {employee.id} </td>
                                <td> {employee.name} </td>
                                <td>{employee.age}</td>
                                <td>{employee.address}</td>
                                <td>{employee.role}</td>
                                <td>
                                    {/* <Link className="btn btn-info" to={`/edit-employee/${employee.id}`} >Update</Link>
                                    <button className = "btn btn-danger" onClick = {() => deleteEmployee(employee.id)}
                                    style = {{marginLeft:"10px"}}> Delete</button> */}
                                    <Link className='btn btn-info' to={`/employee-leaves/${employee.id}`}>Leaves Record</Link>
                                    
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default EmployeeLeavesList;