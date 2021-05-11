import api from '../../api/api'
import uuid from 'react-uuid'

//Get all Employees
export const getEmployees = () => async dispatch => {
    try {
        const response = await api.get('/employees');
        console.log(response.data)
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
        console.log(response.data)
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