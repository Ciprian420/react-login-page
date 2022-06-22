import styled from "styled-components";


export const Square = styled.div`
margin-top: 10px;
width: 20px;
height: 20px;
background-color: #898080;
border-radius: 2px;
margin-left: -8px;
`


export const OrizontalLine = styled.div`
margin-top: 10px;
display: flex;
align-items: center;
flex-direction: row-reverse;
width: 87px;
height: 4px;
background-color: #898080
`

export const VerticalLine = styled.div`
border-radius: 1px;
width: 4px;
height: 15px;
background-color: #898080
`

export const Container = styled.div`
display: flex;
align-items: baseline;
`

export const Price = styled.span`
position: relative;
top: 50px;
left: -28px;
color: #898080;
font-weight: bolder;`