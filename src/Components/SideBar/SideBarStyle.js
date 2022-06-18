import styled from "styled-components";

export const Container = styled.div`
  background-color: hsl(205deg 84% 57%);
  position: absolute;
  width: 500px;
  height: 700px;
  top: 50%;
  left: 50%;
  margin: -343px 0 0 -285px;
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;
    
`
export const SloganContainer = styled.div`
height: 177px;
`

export const Slogan = styled.div`
  width: 239px;
`

export const United = styled.h3`
  position: absolute;
  color: #ffffff;
  left: 78px;
  font-family: 'Ubuntu', sans-serif;
  text-align: left;
  float: left;
`

export const Properties = styled.h3`
  color: hsl(206deg 98% 75%);
  font-family: 'Ubuntu', sans-serif;
  text-align: right;
  float: right;
  position: absolute;
  left: 150px;
`

export const QuoteContainer = styled.div`
  position: absolute;
  bottom: -8px;
  left: 47px;
`

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  width: 39px;
  height: 37px;
  background-color: #fff;
  z-index: 2;
  bottom: 238px;
  left: 21px;
  border-radius: 2px 2px;
  align-items: center;
  background-color: #f6f6f6;
`

export const Image = styled.image`
  background-image: url("https://www.seekpng.com/png/detail/73-739376_quotation-marks-blue-quotation-marks-png.png");
  background-size: 100%;
  width: 40px;
  height: 23px;
  background-repeat: no-repeat;
`
export const TextContainer = styled.div`
  border-radius: 5px;
  color: #bcc6c8;
  text-align: center;
  position: absolute;
  left: 39px;
  bottom: 56px;
  width: 348px;
  height: 200px;
  z-index: 1;
  background: linear-gradient(164deg, rgba(234, 233, 233, 0.97) 10px, rgba(234, 233, 233, 0.97) 1px, rgba(234, 233, 233, 0.97) 30px, rgba(255, 255, 255, 1) 0);
`

export const ProgressBarContainer = styled.div`
  height: 200px;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: space-between;
  align-items: flex-start;
  margin-left: 70px;;
  width: 75px;
`

export const ProgressBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 23px;
  height: 22px;
  border-radius: 5px;
  border: 3px solid white;
`

export const CheckedPage = styled.div`
  width: 12px;
  height: 12px;
  background-color: #fff;  
  border-radius: 3px;
`

export const ProgressTextContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const ProgressText = styled.span`
  color: white;
  margin-left: 17px;
  width: 180px;
  font-weight: bolder;
  height: 25px;
  text-align: left;
`

export const Lines = styled.line`
background-color: #fff;
  width: 4px;
  height: 12px;
  border-radius: 10px;
  margin-left: 11px;
`
