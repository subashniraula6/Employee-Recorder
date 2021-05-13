import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {
    CardContainer,
    EmployeeIcon,
    InfoContainer,
    InfoKey,
    InfoValue,
    ControlContainer,
    DeleteCard,
    EditCard,
    AddCard,
    NominateStatus,
    Candidate
} from './CardContainer.styles'
import { removeEmployee, editEmployee } from '../actions/employeeActions'

const EmployeeCard = ({
    id,
    isCandidate,
    name,
    email,
    address,
    phone,
    company,
    history,
    match,
    add,
    removeEmployee,
    editEmployee }) => {

    const handleDelete = async () => {
        try {
            await removeEmployee(id);
        } catch (error) {
            alert("Unable to delete")
        }
    }

    return (
        <CardContainer add>
            {
                add ?
                    (<AddCard>
                        <Link
                            to={`${match.path}/add`}
                            style={{ 'textDecoration': 'none' }}>
                            +
                            </Link>
                    </AddCard>)
                    : (
                        <>
                            <EmployeeIcon src={process.env.PUBLIC_URL + `/gravatar.jpg`} alt='gravatar' />

                            <InfoContainer>
                                <InfoKey>Name: </InfoKey>
                                <InfoValue>{name}</InfoValue>
                            </InfoContainer>

                            <InfoContainer>
                                <InfoKey>Email: </InfoKey>
                                <InfoValue>{email}</InfoValue>
                            </InfoContainer>

                            <InfoContainer>
                                <InfoKey>Address: </InfoKey>
                                <InfoValue>{address}</InfoValue>
                            </InfoContainer>

                            <InfoContainer>
                                <InfoKey>Phone: </InfoKey>
                                <InfoValue>{phone}</InfoValue>
                            </InfoContainer>

                            <InfoContainer>
                                <InfoKey>Company: </InfoKey>
                                <InfoValue>{company}</InfoValue>
                            </InfoContainer>

                            <ControlContainer>
                                <Link to={`${match.path}/edit/${id}`}><EditCard /></Link>

                                <NominateStatus onClick={e => editEmployee({
                                    id,
                                    isCandidate: !isCandidate,
                                    name,
                                    email,
                                    address,
                                    phone,
                                    company,
                                    toggle: true
                                })}>
                                    <Candidate
                                        iscandidate={isCandidate.toString()}
                                    />
                                </NominateStatus>
                                <DeleteCard onClick={handleDelete} />
                            </ControlContainer>
                        </>
                    )
            }

        </CardContainer>
    )
}
EmployeeCard.propTypes = {
    removeEmployee: PropTypes.func.isRequired
}

export default connect(null, { removeEmployee, editEmployee })(withRouter(EmployeeCard));
