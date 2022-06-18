import styled from "styled-components";

export const Container = styled.div`
  background-color: hsl(205deg 84% 57%);
  width: 350px;
  height: 600px;
  top: 50%;
  left: 50%; 
  margin: -300px 0 0 200;
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;
  z-index: 3;
`
export const SloganContainer = styled.div`
height: 177px;
`

export const Slogan = styled.div`
  width: 239px;
  display: flex;
  position: relative;
  left: 20%;
`

export const United = styled.h3`
  /* position: absolute; */
  color: #ffffff;
  /* left: 78px; */
  font-family: 'Ubuntu', sans-serif;
  text-align: center;
  /* float: left; */
`

export const Properties = styled.h3`
  color: hsl(206deg 98% 75%);
  font-family: 'Ubuntu', sans-serif;
  text-align: center;
  float: right;
  /* position: absolute; */
  /* left: 150px; */
`

export const QuoteContainer = styled.div`
 position: relative;
 left: 12px;
 border-radius: 2px;
 color: #bcc6c8;
  text-align: left;
  font-size: 13px;
  position: relative;
  left: 12%;
  bottom: -20px;
  width: 240px;
  height: 170px;  
  z-index: 1;
  background: linear-gradient(164deg, rgba(234, 233, 233, 0.97) 10px, rgba(234, 233, 233, 0.97) 1px, rgba(234, 233, 233, 0.97) 30px, rgba(255, 255, 255, 1) 0);
`

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  width: 39px;
  height: 37px;
  z-index: 7;
  bottom: 14px;
  left: -10px;
  border-radius: 2px 2px;
  align-items: center;
  background-color: #f6f6f6;
`

export const Image = styled.image`
  background-image: url("https://www.seekpng.com/png/detail/73-739376_quotation-marks-blue-quotation-marks-png.png");
  background-size: 100%;
  width: 30px;
  height: 23px;
  background-repeat: no-repeat;
`
export const TextContainer = styled.div`
  border-radius: 2px;
  color: #bcc6c8;
  text-align: left;
  font-size: 12px;
  position: relative;
  left: 8%;
  bottom: 10px;
  width: 210px;
  height: 150px;  
  z-index: 1;
  /* background: linear-gradient(164deg, rgba(234, 233, 233, 0.97) 10px, rgba(234, 233, 233, 0.97) 1px, rgba(234, 233, 233, 0.97) 30px, rgba(255, 255, 255, 1) 0); */
`

export const ProgressBarContainer = styled.div`
  height: 200px;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: space-between;
  align-items: flex-start;
  margin-left: 70px;
  width: 75px;
  position: relative;
  bottom: 50px;
`

export const ProgressBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15px;
  height: 15px;
  border-radius: 3px;
  border: 3px solid white;
`

export const CheckedPage = styled.div`
  width: 8px;
  height: 8px;
  background-color: #fff;  
  border-radius: 1px;
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
  width: 3px;
  height: 13px;
  border-radius: 7px;
  margin-left: 8px;
`
