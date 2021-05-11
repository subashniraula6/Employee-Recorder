import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
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
    AddNominationIcon,
    RemoveNominationIcon
} from './CardContainer.styles'
import { removeEmployee } from '../actions/employeeActions'

const EmployeeCard = ({
    id,
    isNominated,
    name,
    email,
    address,
    phone,
    company,
    history,
    add,
    removeEmployee }) => {

    const addLink = history.location.pathname + '/add';

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
                            to={addLink}
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
                                <EditCard />
                                <NominateStatus>
                                    {
                                        isNominated ? (<RemoveNominationIcon />) : (<AddNominationIcon />)
                                    }
                                </NominateStatus>
                                <DeleteCard onClick={handleDelete} />
                            </ControlContainer>
                        </>
                    )
            }

        </CardContainer>
    )
}

export default connect(null, { removeEmployee })(withRouter(EmployeeCard));
