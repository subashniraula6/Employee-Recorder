import React, { useState } from 'react'
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
import {connect} from 'react-redux'
import {addEmployee} from '../../actions/employeeActions'
import {Redirect} from 'react-router-dom'

const AddEmployee = ({addEmployee}) => {
    const [employeeForm, setEmployeeForm] = useState(
        {
            name: "",
            email: "",
            phone: "",
            address: "",
            company: ""
        }
    )
    const {
        name,
        email,
        phone,
        address,
        company
    } = employeeForm;

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            await addEmployee(employeeForm);
        } catch (error) {
            console.log(error);
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setEmployeeForm(form => ({
            ...form,
            [name]: value
        })
        )
    }
    
    return (
        <AddEmployeeContainer>
            <h1
                style={{
                    'marginTop': '25px',
                    'color': 'magenta'
                }}
            >
                Add Employee
             </h1>

            <EmployeeForm onSubmit={handleSubmit}>
                <InputContainer>
                    <NameIcon />
                    <Input
                        type='text'
                        placeholder='Name'
                        onChange={handleChange}
                        name='name'
                        value={name}
                        required
                    />
                </InputContainer>

                <InputContainer>
                    <EmailIcon />
                    <Input
                        type='email'
                        placeholder='Email'
                        name='email'
                        value={email}
                        onChange={handleChange}
                        required
                    />
                </InputContainer>

                <InputContainer>
                    <PhoneIcon />
                    <Input
                        type='tel'
                        placeholder='Phone'
                        name='phone'
                        value={phone}
                        pattern="[0-9]{3}-[0-9]{10}"
                        onChange={handleChange}
                        required
                    />
                </InputContainer>

                <InputContainer>
                    <AddressIcon />
                    <Input
                        type='text'
                        placeholder='Address'
                        name='address'
                        value={address}
                        onChange={handleChange}
                        required
                    />
                </InputContainer>

                <InputContainer>
                    <CompanyIcon />
                    <Input
                        type='text'
                        placeholder='Company'
                        name='company'
                        value={company}
                        onChange={handleChange}
                        required
                    />
                </InputContainer>

                <InputContainer>
                    <Button type='submit'> Submit </Button>
                </InputContainer>

            </EmployeeForm>
        </AddEmployeeContainer>
    )
}

export default connect(null, {addEmployee})(AddEmployee)
