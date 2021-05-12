import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import EmployeeCard from '../../EmployeeCard/EmployeeCard';
import {
    MainContainer,
    HomepageContainer,
    Title,
    CandidatesLink, ButtonGroup
} from './HomePage.styles'
import { getEmployees } from '../../actions/employeeActions'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { employeesSelector } from '../../../redux/selectors/employeeSelector'

const HomePage = ({ employees, getEmployees }) => {
    useEffect(() => {
        getEmployees();
    }, [])
    return (
        <MainContainer>
            <Title>Employees List</Title>
            <HomepageContainer>
                {
                    employees ? (employees.map((employee) =>
                        <EmployeeCard key={employee.id} {...employee} />)) :
                        <h1>Loading</h1>
                }
                <EmployeeCard add />
            </HomepageContainer>
            
            <ButtonGroup>
                <CandidatesLink to='/employees/candidates'>
                    Click to see candidates for employee of the Month
            </CandidatesLink>
                <CandidatesLink to='/'>
                    Back
            </CandidatesLink>
            </ButtonGroup>

        </MainContainer>
    )
}
export const mapStateToProps = createStructuredSelector({
    employees: employeesSelector
})
HomePage.propTypes = {
    getEmployees: PropTypes.func.isRequired,
    employees: PropTypes.array.isRequired
}
export default connect(mapStateToProps, { getEmployees })(HomePage)
