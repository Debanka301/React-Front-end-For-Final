import React, {useState, useEffect} from 'react'
import {Link, useNavigate, useParams } from 'react-router-dom';
import EmployeeService from '../Services/EmployeeService';


const LoginComponent = () =>{

const [name, setName] = useState('')
const [password, setPassword] = useState('')
const [id, setId]= useState('')
const [role, setRole] = useState('')

const navigate= useNavigate();

const logInHandler =(l)=>{
    l.preventDefault();

    const logInDTO = {name,password}

    EmployeeService.login(logInDTO).then((response)=>{
        //console.log(response.data.role);
        setRole(response.data.role)
        setId(response.data.id)
        if(role==='USER'){
            navigate('/user-dashboard', {state:{id:id}})
        }
        if(role==='ADMIN'){
            navigate('/admin-dashboard', {state:{id:id}})
        }
        
    }).catch(error => {
        console.log(error)
    })

}

const title =()=>{
    return <h3>Login</h3>
}

    return(
        <div>
           <br />
           <div className = "container">
                <div className = "row">
                    <div className = "card col-md-6 offset-md-3 offset-md-3">
                       {
                           title()
                       }
                        <div className = "card-body">
                            <form>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Username :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter username"
                                        name = "username"
                                        className = "form-control"
                                        value = {name}
                                        onChange = {(e) => setName(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Password:</label>
                                    <input
                                        type = "password"
                                        placeholder = "Enter password"
                                        name = "password"
                                        className = "form-control"
                                        value = {password}
                                        onChange = {(e) => setPassword(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <button className = "btn btn-success" onClick = {(e) => logInHandler(e)} >Submit </button>
                                <Link to="#" className="btn btn-danger" style = {{marginLeft:"10px"}}> Cancel </Link>
                            </form>

                        </div>
                    </div>
                </div>

           </div>

        </div>
    )
}

export default LoginComponent;