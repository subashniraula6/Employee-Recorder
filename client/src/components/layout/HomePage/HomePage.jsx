import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import EmployeeCard from '../../EmployeeCard/EmployeeCard';
import {
    HomepageContainer
} from './HomePage.styles'
import { getEmployees } from '../../actions/employeeActions'
import { connect } from 'react-redux'
import TestPage from '../../../TestPage'
import { createStructuredSelector } from 'reselect'
import { employeesSelector } from '../../../redux/selectors/employeeSelector'

const HomePage = ({ employees, getEmployees }) => {
    useEffect(() => {
        getEmployees();
    }, [getEmployees])

    return (
        <HomepageContainer>
            {
                employees.map((employee) =>
                    <EmployeeCard key={employee.id} {...employee} />)
            }
            <EmployeeCard add />
        </HomepageContainer>
    )
}
export const mapStateToProps = createStructuredSelector({
    employees: employeesSelector
})
HomePage.propTypes = {
    getEmployees: PropTypes.func.isRequired,
    employees: PropTypes.object.isRequired
}
export default connect(mapStateToProps, { getEmployees })(HomePage)
