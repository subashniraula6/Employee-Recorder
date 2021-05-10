import React from 'react'
import {
    CardContainer,
    EmployeeIcon,
    InfoContainer,
    InfoKey,
    InfoValue,
    ControlContainer,
    DeleteCard,
    EditCard
   
} from './CardContainer.styles'

const EmployeeCard = ({ firstName,
    lastName,
    email,
    address,
    phone,
    company }) => {
    return (
        <CardContainer>
            <EmployeeIcon src={process.env.PUBLIC_URL + `/gravatar.jpg`} alt='gravatar'/>

            <InfoContainer>
                <InfoKey>Name: </InfoKey>
                <InfoValue>{firstName + lastName}</InfoValue>
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
                <EditCard/>
                <DeleteCard/>
            </ControlContainer>
        </CardContainer>
    )
}

export default EmployeeCard
