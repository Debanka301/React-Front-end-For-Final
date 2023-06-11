import React, {useState, useEffect} from 'react'
import {Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import EmployeeService from '../Services/EmployeeService';

const UserDashboard = () =>{

    const location= useLocation();

    const [name, setName]= useState('');

    useEffect(() => {

        EmployeeService.getEmployeeById(id).then((response) =>{
            setName(response.data.name)
        }).catch(error => {
            console.log(error)
        })
    }, [])

    const id= location.state.id;
    console.log(id);

    return(
        <div>

        <Link className='btn btn-info' to={`/user-tax/${id}`}>See Tax</Link>
        <br></br>
        <Link className='btn btn-info' to={`/user-addLeaves/${id}`}>See Leaves</Link>
        <br></br>
        <Link className='btn btn-info' to={`/user-profile/${id}`}>See Profile</Link>
        </div>
    );
}

export default UserDashboard;