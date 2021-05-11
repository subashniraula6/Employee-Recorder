import React from 'react'
import {
    AddEmployeeContainer,
    EmployeeForm,
    InputContainer,
    NameIcon,
    EmailIcon,
    Input,
    PhoneIcon,
    AddressIcon,
    CompanyIcon,
    Button
} from './AddEmployee.styles'

const AddEmployee = () => {
    return (
        <AddEmployeeContainer>
            <h1
                style={{
                    'margin-top': '25px',
                    'color': 'magenta'
                }}
            >
                Add Employee
             </h1>

            <EmployeeForm>
                <InputContainer>
                    <NameIcon />
                    <Input type='text' placeholder='Name' />
                </InputContainer>

                <InputContainer>
                    <EmailIcon />
                    <Input type='email' placeholder='Email' />
                </InputContainer>

                <InputContainer>
                    <PhoneIcon />
                    <Input type='text' placeholder='Phone' />
                </InputContainer>

                <InputContainer>
                    <AddressIcon />
                    <Input type='text' placeholder='Address' />
                </InputContainer>

                <InputContainer>
                    <CompanyIcon />
                    <Input type='text' placeholder='Company' />
                </InputContainer>

                <InputContainer>
                    <Button> Submit </Button>
                </InputContainer>

            </EmployeeForm>
        </AddEmployeeContainer>
    )
}

export default AddEmployee
