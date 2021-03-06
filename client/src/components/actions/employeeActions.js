import api from '../../api/api'
import uuid from 'react-uuid'

//Get all Employees
export const getEmployees = () => async dispatch => {
    try {
        const response = await api.get('/employees');
        if (response.data) {
            dispatch({
                type: 'GET_EMPLOYEES',
                payload: response.data
            })
        }

    } catch (error) {
        console.log('error')
        // dispatch({
        //     type: EMPLOYEE_ERROR,
        //     payload: { msg: error.response.statusText, status: error.response.status }
        // })
    }
}

//Add employees 
export const addEmployee = (employeeForm) => async dispatch => {
    const request = {
        id: uuid(),
        ...employeeForm
    }
    try {
        const response = await api.post('/employees', request);
        if (response.data) {
            dispatch({
                type: 'ADD_EMPLOYEE',
                payload: response.data
            })
            alert("Added")
        }
    } catch (error) {
        console.log(error)
        // dispatch({
        //     type: EMPLOYEE_ERROR,
        //     payload: { msg: error.response.statusText, status: error.response.status }
        // })
    }
}
//Remove employee 
export const removeEmployee = (id) => async dispatch => {
    alert(id)
    try {
        const response = await api.delete(`/employees/${id}`);
        if (response.data) {
            dispatch({
                type: 'REMOVE_EMPLOYEE',
                payload: id
            })
        }
    } catch (error) {
        console.log(error)
        // dispatch({
        //     type: EMPLOYEE_ERROR,
        //     payload: { msg: error.response.statusText, status: error.response.status }
        // })
    }
}

//Edit employee 
export const editEmployee = ({ id, toggle, ...employeeForm }) => async dispatch => {
    try {
        const response = await api.put(`/employees/${id}`, employeeForm);
        console.log(response.data)
        if (response.data) {
            dispatch({
                type: 'EDIT_EMPLOYEE',
                payload: response.data
            })
            if (!toggle) {
                alert("Edited")
            }

        }
    } catch (error) {
        console.log(error)
        // dispatch({
        //     type: EMPLOYEE_ERROR,
        //     payload: { msg: error.response.statusText, status: error.response.status }
        // })
    }
}
