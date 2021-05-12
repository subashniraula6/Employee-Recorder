import React, { useState, useEffect } from 'react'
import { employeesSelector } from '../../../redux/selectors/employeeSelector'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { getEmployees } from '../../actions/employeeActions'
import { Link } from 'react-router-dom'
import EmployeeCard from '../../EmployeeCard/EmployeeCard'
import { CandidateContainer, Title, ButtonLink } from './CandidatesStyles'
import { MainContainer } from '../HomePage/HomePage.styles'

const Candidates = ({ candidates, getEmployees }) => {

    useEffect(() => {
        getEmployees()
    }, [getEmployees])
    console.log(candidates)

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
