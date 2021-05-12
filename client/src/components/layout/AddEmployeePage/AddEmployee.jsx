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
    Button,
    Checkbox,
    LabelCandidate,
    ButtonLink
} from './AddEmployee.styles'
import { connect } from 'react-redux'
import { addEmployee } from '../../actions/employeeActions'
import { withRouter } from 'react-router-dom'

const AddEmployee = ({ addEmployee, history }) => {
    const [employeeForm, setEmployeeForm] = useState(
        {
            name: "",
            email: "",
            phone: "",
            address: "",
            company: "",
            isCandidate: false
        }
    )
    
    const {
        name,
        email,
        phone,
        address,
        company,
        isCandidate
    } = employeeForm;

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addEmployee(employeeForm);
            setEmployeeForm({
                name: "",
                email: "",
                phone: "",
                address: "",
                company: "",
                isCandidate: false
            })
            history.push('/employees');
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
        // console.log(employeeForm)
    }
    function toggleCheckbox(){
        setEmployeeForm(employee=> ({
            ...employee,
            isCandidate: !employeeForm.isCandidate
        }))  
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
                <p>Format: XXX-XXXXXXXXXX</p>

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
                    <LabelCandidate>Candidate?</LabelCandidate>
                    <Checkbox
                        type="checkbox"
                        checked={isCandidate}
                        onChange={toggleCheckbox}>
                    </Checkbox>
                </InputContainer>

                <InputContainer>
                    <Button type='submit'> Submit </Button>
                    <ButtonLink to="/employees"> Go Back </ButtonLink>
                </InputContainer>

            </EmployeeForm>
        </AddEmployeeContainer>
    )
}

export default connect(null, { addEmployee })(withRouter(AddEmployee))
