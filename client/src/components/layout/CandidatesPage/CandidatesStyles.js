import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Title = styled.h1`
color: green;
margin: 100px 0 0 0;
`

export const CandidateContainer = styled.div`
width: 100%;
padding: 50px;
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
`
export const ButtonLink = styled(Link)`
width: 20%;
padding: 5px;
margin: 10px;
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
`