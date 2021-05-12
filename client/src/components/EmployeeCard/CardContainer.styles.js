import styled from 'styled-components'
import { FcFullTrash } from 'react-icons/fc'
import { FiEdit } from 'react-icons/fi'
import {VscStarFull} from 'react-icons/vsc'

export const CardContainer = styled.div`
width: 330px;
height: 360px;
margin: 15px;
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
transition: all 0.2s ease;

&:hover {
    width: 310px;
    height: 340px;
    box-shadow: 3px 3px 5px green;
}
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
width; 100%;
display: flex;
justify-content: space-between;
align-items: center;
`
export const EditCard = styled(FiEdit)`
height: 27px;
width:  27px;
cursor: pointer;
`
export const DeleteCard = styled(FcFullTrash)`
height: 30px;
width: 30px;
cursor: pointer;

`
export const AddCard = styled.div`
height: 100%;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
font-size: 100px;
color: brown;
cursor: pointer;


`

export const NominateStatus = styled.div`
margin: 0 20px;
cursor: pointer
`

export const Candidate = styled(VscStarFull)`
height: 28px;
width:  28px;
color: ${({iscandidate})=> ((iscandidate=== 'true') ? 'black': 'grey')}

`