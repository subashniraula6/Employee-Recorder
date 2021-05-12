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

const HomePage = ({ employee, getEmployees, ...otherprops }) => {
    const { employees, loading } = employee;
    console.log(otherprops)
    useEffect(() => {
        getEmployees();
    }, [getEmployees])
    return !loading ? (
        <MainContainer>
            <Title>Employees List</Title>
            <HomepageContainer>
                {
                    (employees.map((employee) =>
                        <EmployeeCard key={employee.id} {...employee} />))
                }
                <EmployeeCard add />
            </HomepageContainer>

            <ButtonGroup>
                <CandidatesLink to={`${otherprops.match.path}/candidates`}>
                    Click to see candidates for employee of the Month
            </CandidatesLink>
                <CandidatesLink to='/'>
                    Back
            </CandidatesLink>
            </ButtonGroup>

        </MainContainer>
    ) :
        <h1>Loading.........</h1>
}
export const mapStateToProps = state => ({
    employee: state.employee
})
HomePage.propTypes = {
    getEmployees: PropTypes.func.isRequired,
    employee: PropTypes.object.isRequired
}
export default connect(mapStateToProps, { getEmployees })(HomePage)
