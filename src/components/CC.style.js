import styled from "styled-components"

export const ContMain = styled.div`
display: flex;
border-radius: 5px;
width: 950px;
height: 600px;
background-color: #ffffff;
`
export const SideBar = styled.div`
height: 600px;
width: 350px;
background-color: black;
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
export const LocationContainer = styled.div`
border-radius: 5px;
border: 2px solid ;
margin-top: 40px;
margin-right: 1px;
width: 50%;
height: 250px;
background-color: #ffffff;
border-color: #dfe5eb;
`
export const LocationImage = styled.div`
border-radius: 5px 5px 0px 0px;
background-color: red;
width: 100%;
height: 50%;
`
export const LocationInfo = styled.div`
padding-left: 9px;
text-align: left;
border-radius: 0px 0px 5px 5px;
width: 100%;
height: 50%;
z-index: 1000;
`
export const LocationName = styled.h4`
margin-top: 9px;
font-size: medium;
margin-bottom: 2px;
`
export const LocationRegion = styled.h5`
font-weight: normal;
font-size: x-small;
margin-top: 6px;
margin-bottom: 10px;

`
export const LocationText = styled(LocationRegion)`
font-weight: normal;
margin-bottom: 0px;
font-size: x-small;
`
export const MinInvestment = styled.div`
width: 80px;
`
export const MinInvestmentNum = styled.span`
font-weight: bold;
font-size: x-small;
margin-top: 4px;
margin-bottom: 0px;
`
export const MinInvestmentText = styled.h5`
opacity: 0.3;
font-size: xx-small;
margin-top: 0px;
`
export const ProjectedReturn = styled.div`
width: 80px;
`
export const ProjectedReturnNum = styled.span`
font-weight: bold;
font-size: x-small;
margin-top: 4px;
margin-bottom: 0px;
`
export const ProjectedReturnText = styled.h5`
opacity: 0.3;
font-size: xx-small;
margin-top: 0px;
`
export const Last = styled.div`
display: flex;
flex-direction: row;
`