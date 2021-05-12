import styled from 'styled-components'
import { IoMdPerson, IoMdMail, IoMdCall } from 'react-icons/io'
import { ImLocation, ImOffice } from 'react-icons/im'
import {Link} from 'react-router-dom'

export const AddEmployeeContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`
export const EmployeeForm = styled.form`
margin-top: 30px;
width: 80%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

@media screen and (max-width: 700px){
    width: 100%;
}
`
export const InputContainer = styled.div`
margin: 20px;
width: 50%;
display: flex;
justify-content: center;
align-items: center;
@media screen and (max-width: 700px){
    width: 70%;
}
@media screen and (max-width: 350px){
    width: 90%;
}
`
export const Input = styled.input`
width: 100%;
height: 35px;
font-size: 16px;
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

export const Checkbox = styled.input`
height: 20px;
width: 20px;
margin: 0 10px;
`   
export const LabelCandidate = styled.h5`
font-size: 16px;
color: orange;
font-family: arial;
line-height: 2rem;
`
export const ButtonLink = styled(Link)`
padding: 5px;
cursor: pointer;
font-size: 18px;
text-align: center;
color: purple;
border-style: solid;
border-radius: 25px;
text-decoration: none;
display: flex;
flex-direction: column;
justify-content: center;
height: 40px;
width: 100px;
margin: 0px 10px;
cursor: pointer;
font-size: 18px;
text-align: center;
color: purple;
border-radius: 25px;
`
