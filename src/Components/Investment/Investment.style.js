import styled from "styled-components"


export const Container = styled.div`
display: flex;
border-radius: 5px;
width: 950px;
height: 600px;
background-color: #ffffff;
position: absolute;
z-index: 2
`


export const SideBarContainer = styled.div`
border-radius: 5px 0px 0px 5px;
height: 600px;
width: 350px;
background-color: black;
`
export const Link = styled.a`
margin-top: 3px;
font-family: 'Roboto', sans-serif;
color: #3988dd;
`
export const Simplediv = styled.div`
margin-top: 5px;
`
export const Footer = styled.div`
justify-content: space-between;
position: relative;
bottom: -50px;
align-self: flex-end;
display: flex;
width: 100%;
height: 50px;
`
export const Button = styled.button`
font-family: 'Roboto', sans-serif;
color: ${(props) => props.color};
text-align: center;
border: none;
width: 110px;
height: 35px;
border-radius: 3px;
background-color: ${(props) => props.backgroundColor};
margin-right: 10px;
&:active{
    box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
}
`
export const Details = styled.div`
display: flex;
justify-content: center;
width: 600px;
height: 600px;
background-color: #ffffff;
border-top-right-radius: 5px;
border-bottom-right-radius: 5px;
`
export const Detailssecond = styled.div`
width: 450px;
height: 600px;
background-color: #ffffff;
border-top-right-radius: 5px;
border-bottom-right-radius: 5px;
`
export const Header = styled.div`
margin-top: 10px;
display: flex;
justify-content: space-between;
width: 100%;
height: 80px;
`
export const H4 = styled.h4`
display: flex;
font-size: x-large;
margin-bottom: 0;
`
export const H5 = styled.h5`
margin-top: 15px;
display: flex;
left: 10px;
color: gray;`
export const Para = styled.p`
display: flex;
justify-content: flex-start;
color: gray;
font-size: small;
text-align: left;
`
export const Count = styled(H4)`
text-align: left;
font-size: large;
`
export const InputContainer = styled.div`
width: 100%;
height: 80px;
display: flex;
justify-content: space-between;
align-items: center;

`
export const Input = styled.input`
width: 210px;
border-top: 0;
border-left: 0;
border-right: 0;
height: 30px;
border-color: #d5d9dc;
&:focus {
    outline: none;
    border-bottom-color: #35a0ee;
}
`
export const Label = styled.label`
padding-bottom: 5px;
`
export const Slider = styled.div`
width: 100%;
height: 100px;
`
export const InputSlider = styled.input`
width: 100%;
`
export const AccreditContainer = styled.div`
width: 100%;
display: flex;
flex-direction: row;
`
export const AccreditContainer2 = styled.div`
border: 2px solid black;
border-radius: 5px;
margin-right: 10px;
height: 30px;
`
export const Accredit = styled(H4)`
margin-top: 0;
font-size: medium;
`
export const AccreditInput = styled.input`
margin-right: 30px;
`