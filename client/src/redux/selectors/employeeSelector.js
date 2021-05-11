import { createSelector } from 'reselect'

export const employeeReducerSelector = state => state.employee

//select employees array
export const employeesSelector = createSelector(
    [employeeReducerSelector],
    employee => employee.employees
)

export const selectEmployee = employeeUrlParam => {
    return createSelector(
        [employeesSelector],
        employees =>
            employees.find((employee) =>
                employee.id === employeeUrlParam
            )
    )
}