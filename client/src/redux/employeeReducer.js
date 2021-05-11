const initial_state = {
    employees: [{
        'firstName': 'subash',
        'lastName': 'niraula',
        'email': 'subashniraula6@gmail.com',
        'phone': '9808067978',
        'address': 'ktm',
        'isCandidate': false,
    }]
}

export default function employeeReducer(state = initial_state, action) {
    switch (action.type) {
        case 'GET_EMPLOYEES':
            return {
                ...state,
                employees: action.payload,
            }
        case 'ADD_EMPLOYEE':
            return {
                ...state,
                employees: state.employees.append(action.payload)
            }
        case 'REMOVE_EMPLOYEE':
            return {
                ...state,
                employees: state.employees.filter(employee => employee.id !== action.payload)
            }
        case 'TOOGLE_CANDIDATE':
            return {
                ...state,
                employees: state.employees.map(employee => {
                    if (employee.id === action.payload) {
                        employee.isCandidate = !employee.isCandidate
                    }
                })
            }
        default:
            return state;
    }
}