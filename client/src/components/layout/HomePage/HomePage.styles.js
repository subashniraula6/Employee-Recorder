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
padding: 7px 15px;
margin: 10px 0;
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
height: 50px;

box-shadow: 4px 4px 5px navy;
transition: all 0.2s ease;

&:hover {
    height: 60px;
    box-shadow: 2px 2px 3px navy;
}
`
export const ButtonGroup = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-bottom: 50px;
`