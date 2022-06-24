import styled from "styled-components";


export const Square = styled.div`
margin-top: 20px;
width: 15px;
height: 15px;
background-color: #35a1ee;
border-radius: 2px;
margin-left: -10px;
`


export const OrizontalLine = styled.div`
margin-top: 10px;
display: flex;
align-items: center;
flex-direction: row-reverse;
width: 87px;
height: 3px;
background-color: #35a1ee;
`

export const OrizontalLineIC = styled.div`
margin-top: 10px;
display: flex;
align-items: center;
flex-direction: row-reverse;
width: 87px;
height: 3px;
background-color: #e9f0f6;
`

export const VerticalLine = styled.div`
border-radius: 1px;
width: 3px;
height: 15px;
background-color: #35a1ee;
`
export const VerticalLineIC = styled.div`
border-radius: 1px;
width: 3px;
height: 15px;
background-color: #e9f0f6;
`

export const Container = styled.div`
display: flex;
align-items: baseline;
margin-top: 20px;

`

export const Price = styled.span`
color: #7abdf0;
font-size: 12px;
position: relative;
top: 50px;
left: -28px;
color: #898080;
font-weight: bolder;`