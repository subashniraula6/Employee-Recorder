import styled from 'styled-components'
import { IoMdPerson, IoMdMail, IoMdCall } from 'react-icons/io'
import { ImLocation, ImOffice } from 'react-icons/im'

export const AddEmployeeContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
export const EmployeeForm = styled.form`
margin-top: 30px;
width: 70%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
export const InputContainer = styled.form`
margin: 30px;
width: 50%;
display: flex;
justify-content: center;
align-items: center;

`
export const Input = styled.input`
width: 100%;
height: 35px;
`
export const NameIcon = styled(IoMdPerson)`
height: 30px;
width: 30px;
margin: 3px 10px;
`
export const EmailIcon = styled(IoMdMail)`
height: 30px;
width: 30px;
margin: 3px 10px;
`
export const PhoneIcon = styled(IoMdCall)`
height: 30px;
width: 30px;
margin: 3px 10px;
`
export const AddressIcon = styled(ImLocation)`
height: 30px;
width: 30px;
margin: 3px 10px;
`
export const CompanyIcon = styled(ImOffice)`
height: 30px;
width: 30px;
margin: 3px 10px;
`
export const Button = styled.button`
height: 40px;
width: 100px;
margin: 0px 10px;
cursor: pointer;
font-size: 18px;
text-align: center;
color: purple;
border-radius: 25px;


`
