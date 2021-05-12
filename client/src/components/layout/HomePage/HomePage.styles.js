import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const MainContainer = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
`
export const HomepageContainer = styled.div`
width: 100%;
padding: 30px;
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
`
export const Title = styled.h1`
color: green;
margin: 40px 0 0 0;
`
export const CandidatesLink = styled(Link)`
padding: 5px;
margin: 30px 0 80px 0;
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