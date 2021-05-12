const initial_state = {
    employees: null,
    loading: true
}

export const employeeReducer = (state = initial_state, action) => {
    switch (action.type) {
        case 'GET_EMPLOYEES':
            return {
                ...state,
                employees: action.payload,
                loading: false
            }
        case 'ADD_EMPLOYEE':
            return {
                ...state,
                employees: [state.employees, ...action.payload],
                loading: false
            }
        case 'REMOVE_EMPLOYEE':
            return {
                ...state,
                employees: state.employees.filter(employee => employee.id !== action.payload),
                loading: false
            }
        case 'EDIT_EMPLOYEE':
            return {
                ...state,
                employees: state.employees.map(employee => {
                    if(employee.id === action.payload.id){
                        return action.payload;
                    }
                    else return employee;
                }),
                loading: false
            }
        default:
            return state;
    }
}