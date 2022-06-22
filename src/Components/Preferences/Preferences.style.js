import styled from "styled-components"

export const CustomDiv = styled.div`
margin-top: 5px;
`
export const InputCont = styled.div`
width: 100%;
height: 150px;
`
export const SideBarContainer = styled.div`
border-radius: 5px 0px 0px 5px;
height: 600px;
width: 350px;
background-color: black;
`
export const ContMain = styled.div`
display: flex;
border-radius: 5px;
width: 950px;
height: 600px;
background-color: #ffffff;
position: absolute;
z-index: 1
`
// export const SideBar = styled.div`
// height: 600px;
// width: 350px;
// background-color: black;
// `
export const DetailsCont = styled.div`
display: flex;
justify-content: center;
width: 700px;
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
export const Footer = styled.div`
justify-content: space-between;
position: relative;
bottom: -50px;
align-self: flex-end;
display: flex;
width: 100%;
height: 50px;
margin-bottom: 10px;
`
export const H3 = styled.h3`
display: flex;
margin-bottom: 0;
font-family: 'Roboto', sans-serif;
`
export const H5 = styled.h5`
margin-top: 15px;
display: flex;
left: 10px;
color: gray;
`
export const H4 = styled.h4`
font-family: 'Roboto', sans-serif;
display: flex;
`
export const Para = styled.p`
display: flex;
justify-content: flex-start;
color: gray;
font-size: small;
text-align: left;
`
export const Link = styled.a`
margin-top: 3px;
font-family: 'Roboto', sans-serif;
color: #3988dd;
`
export const H3font = styled.h3`
display: flex;
margin-bottom: 0;
font-size: 13px;
font-family: 'Kdam Thmor Pro', sans-serif;
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
export const Select = styled.div`
display: flex;
width: 490px;
height: 274px;
flex-wrap: wrap;
position: relative;
left: -15px;
`
export const RealEstate = styled.div`
display: flex;
width: 90px;
height: 100px;
margin-top:10px;
margin-left: 20px;
margin-bottom: 0;
border-radius: 3px;
border: solid 2px lightgrey;
background-color: #fff;

`
export const SelectInput = styled.input`
display: flex;
`
export const SelectPara = styled.p`
font-size: 12px;
display: flex;
text-align: left;
justify-self: center;
align-self: flex-end;
color: gray;
`