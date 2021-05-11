import api from '../../api/api'

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
