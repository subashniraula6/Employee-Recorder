import styled from 'styled-components'
import {FcFullTrash} from 'react-icons/fc'
import {FiEdit} from 'react-icons/fi'

export const CardContainer = styled.div`
width: 320px;
margin: 10px;
padding: 5px;
border: 2px solid purple;
text-align: start;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
font-family: Verdana;
line-height: 1.5em;
border-radius: 10px;
box-shadow: 5px 5px 10px green;
`
export const EmployeeIcon = styled.img`
width: 50%;
`
export const InfoContainer = styled.div`
    width: 100%;
    padding: 2px;
&:nth-child(even){
        background-color: #F76B8A;
        color: #F7C9CA;
    }
&:nth-child(odd){
        background-color: #66BFBF;
        color: #EAF6F6;
    }
`
export const InfoKey = styled.span`
font-weight: Bold;
`
export const InfoValue = styled.span`
 font-family: sans seriff;
 font-size: 1.2rem;
`
export const ControlContainer = styled.div`
padding: 5px;
`
export const EditCard = styled(FiEdit)`
height: 25px;
width:  25px;
margin-right: 200px;
`
export const DeleteCard = styled(FcFullTrash)`
height: 30px;
width: 30px;
`
