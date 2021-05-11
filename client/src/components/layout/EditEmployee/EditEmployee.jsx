import React, { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'
import {employeesSelector} from '../../../redux/selectors/employeeSelector'
import {createStructuredSelector} from 'reselect'
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
} from './EditEmployee.styles'
import {connect} from 'react-redux'
import {editEmployee} from '../../actions/employeeActions'
import {Redirect} from 'react-router-dom'

const EditEmployee = ({employees, editEmployee, history}) => {
    const [employeeForm, setEmployeeForm] = useState(
        {
            name: "",
            email: "",
            phone: "",
            address: "",
            company: ""
        }
    )

    let {id} = useParams();
    
    useEffect(()=>{
        if (employees){
            const employee = employees.filter(employee => employee.id === id)
            console.log(employee[0]);
            setEmployeeForm(employee[0]);
        }
    }, [])
    console.log(employeeForm);

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
            await editEmployee(employeeForm);
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
                Edit Employee
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
                    <Button type='submit'> Submit </Button>
                </InputContainer>

            </EmployeeForm>
        </AddEmployeeContainer>
    )
}
export const mapStateToProps = createStructuredSelector({
    employees: employeesSelector
})

export default connect(mapStateToProps, {editEmployee})(EditEmployee)
