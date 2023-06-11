import axios from 'axios'

const EMPLOYEE_FIND_ALL = 'http://localhost:8091/employee/admin/all';

const EMPLOYEE_SAVE= 'http://localhost:8091/employee/admin/save';

const EMPLOYEE_UPDATE= 'http://localhost:8091/employee/normal/update';

const EMPLOYEE_GET_BY_ID= 'http://localhost:8091/employee/normal';

const EMPLOYEE_DELETE= 'http://localhost:8091/employee/admin/delete';

const EMPLOYEE_WITH_LEAVES= 'http://localhost:8091/employee/normal/leaves';

const EMPLOYEE_TAX_DETAILS= 'http://localhost:8091/employee/normal/tax';

const TAX_SAVE= 'http://localhost:8093/tax/save';

const EMPLOYEE_LOGIN= 'http://localhost:8091/employee/login';

const USER_SAVE_LEAVES= 'http://localhost:8092/leaves/save';

class EmployeeService{

    getAllEmployees(){
        return axios.get(EMPLOYEE_FIND_ALL)
    }

    createEmployee(employee){
        return axios.post(EMPLOYEE_SAVE, employee)
    }

    getEmployeeById(employeeId){
        return axios.get(EMPLOYEE_GET_BY_ID + '/' + employeeId);
    }

    updateEmployee(employeeId, employee){
        return axios.put(EMPLOYEE_UPDATE + '/' +employeeId, employee);
    }

    deleteEmployee(employeeId){
        return axios.delete(EMPLOYEE_DELETE + '/' + employeeId);
    }

    getEmployeesLeaves(employeeId){
        return axios.get(EMPLOYEE_WITH_LEAVES + '/' + employeeId);
    }

    getEmployeesTax(employeeId){
        return axios.get(EMPLOYEE_TAX_DETAILS + '/' + employeeId);
    }

    saveTax(taxInput){
        return axios.post(TAX_SAVE, taxInput);
    }

    login(loginDTO){
        return axios.post(EMPLOYEE_LOGIN,loginDTO);
    }

    saveLeaves(leaves){
        return axios.post(USER_SAVE_LEAVES,leaves);
    }

    
}

export default new EmployeeService();