const initial_state = {
    'employees': []
}

export default function employeeReducer(state = initial_state, action) {
    switch (action.type) {
        case 'AddEmployee':
            return {
                ...state,
                employees: state.employees.append(action.payload)
            }
        case 'RemoveEmployee':
            return {
                ...state,
                employees: state.employees.filter(employee => employee.id !== action.payload)
            }
        case 'toggleCandidate':
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