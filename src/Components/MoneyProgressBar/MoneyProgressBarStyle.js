import styled from "styled-components";


export const Square = styled.div`
display: flex;
width: 25px;
height: 27px;
background-color: #35a1ee;
border-radius: 2px;
flex-direction: column;
justify-content: center;
margin-left: -8px;
`


export const OrizontalLine = styled.div`
display: flex;
align-items: center;
flex-direction: row-reverse;
width: 87px;
height: 5px;
background-color: #35a1ee
`

export const VerticalLine = styled.div`
border-radius: 1px;
width: 5px;
height: 22px;
background-color: #35a1ee
`

export const Container = styled.div`
display: flex;
align-items: baseline;
`

export const Price = styled.span`
font-size: 12px;
position: relative;
top: 50px;
left: -28px;
color: #35A1EEFF;
font-weight: bolder;`