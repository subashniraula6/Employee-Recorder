import React from 'react'
import {
    LandingContainer,
    LandingHeader,
    LandingBody,
    Description,
    Navigation,
    ButtonLink,
    LandingImage
} from './Landing.styles'

const Landing = () => {
    return (
        <LandingContainer>
            <LandingHeader>
                Welcome to my page
            </LandingHeader>
            <LandingBody>
                <LandingImage src={process.env.PUBLIC_URL+'/bg.jpg'} />
                <Description>
                    Employee Recorder records the information of
                    Employees allowing addition, removal, updating
                    of employees information.
                    It also keep track of candidate employees for
                    Employee
                    of the Month Awards.
                </Description>
                <Navigation>
                    <ButtonLink to='/employees'>View all Employees</ButtonLink>
                    <ButtonLink to='/employees/candidates'>View Candidates for Employee of the Month</ButtonLink>
                </Navigation>
            </LandingBody>
        </LandingContainer>
    )
}

export default Landing
