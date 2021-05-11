import {createSelector} from 'reselect'

export const employeeReducerSelector = state => state.employee

export const employeesSelector = createSelector(
    [employeeReducerSelector],
    employee => employee.employees
)