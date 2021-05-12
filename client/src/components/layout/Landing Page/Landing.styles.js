import styled from 'styled-components'
import { Link } from 'react-router-dom'

var green = '#2BAE66FF';

export const LandingContainer = styled.div`
position: relative;
margin-top: 50px; 
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
export const LandingImage = styled.img`
width: 100vw;
height: 90vh;
object-fit: cover;
position: absolute;
left: 0;
top: 0;
z-index: -999;
background-position right bottom, left top;

`
export const LandingHeader = styled.h1`
font-size: 3.5rem;
margin: 20px;
margin-top: 90px;
color: #7698e8;
-webkit-text-stroke: 2px #2c4d5c;
`
export const LandingBody = styled.div`
font-size: 2rem;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
export const Description = styled.p`
font-size: 1.4rem;
width: 70%;
margin: 30px;
color: #5f7bad;
`
export const Navigation = styled.div`
display: flex;
flex-direction: column;
text-decoration: none;
justify-content: center;
align-items: center;
list-style: none;
width: 70%;

`
export const ButtonLink = styled(Link)`
font-size: 1rem;
margin: 1.2rem;
&:link,
&:visited {
    text-transform: uppercase;
    text-decoration: none;
    padding: 1rem 2rem;
    display: inline-block;
    border-radius: 10rem;
    transition: all .2s;
    position: relative;
    font-size: 1.1rem;
    background-color: ${green};
    color: #cce0e0;
}

&:hover {
    transform: translateY(-.1rem);
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
}

&:active {
    transform: translateY(.1rem);
    box-shadow: 0 .5 1rem rgba(0, 0, 0, 0.2);
}

&::after {
    content: '';
    display: inline-block;
    height: 100%;
    width: 100%;
    border-radius: 10rem;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    transition: all 0.4s;
}

&::after {
    background-color: #81c77d;
}

&:hover::after {
    transform: scaleX(1.4) scaleY(1.6);
    opacity: 0;
}

`