import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getEmployees } from '../../actions/employeeActions'
import EmployeeCard from '../../EmployeeCard/EmployeeCard'
import { CandidateContainer, Title, ButtonLink } from './CandidatesStyles'
import { MainContainer } from '../HomePage/HomePage.styles'

const Candidates = ({ candidates, getEmployees, ...otherprops }) => {
    console.log(otherprops);
    useEffect(() => {
        getEmployees()
    }, [getEmployees])

    return (
        <MainContainer>
            <Title>Candidates for Employee of the Month</Title>
            <CandidateContainer>
                {
                    candidates.map(candidate => <EmployeeCard key={candidate.id} {...candidate} />)
                }
            </CandidateContainer>
            <ButtonLink to='/employees'>Go Back</ButtonLink>
        </MainContainer>
    )
}
export const mapStateToProps = state => ({
    candidates: state.employee.employees.filter(employee => employee.isCandidate === true)
})

export default connect(mapStateToProps, { getEmployees })(Candidates)
