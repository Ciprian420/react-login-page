import {
  Header,
  SideBarContainer,
  Details,
  H4,
  Count,
  Input,
  Footer,
  Simplediv,
  Button,
  Label,
  H5,
  Para,
  Detailssecond,
  InputContainer,
  Slider,
  Link,
  AccreditContainer,
  AccreditContainer2,
  Accredit,
  AccreditInput,
  Container,
} from "./Investment.style";
import MoneyProgressBar from "../MoneyProgressBar/MoneyProgressBar";
import SideBar from "../SideBar/SideBar";
import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';



const Container2 = () => {
  const navigate = useNavigate()

  const changeUrl = () => {
    navigate("/page3")
  }

  const changeUrlBack = () => {
    navigate("/")
  }
  return (
    <Container className="containerInvest">
      <SideBarContainer>
        <SideBar />
      </SideBarContainer>
      <Details>
        <Detailssecond>
          <Header>
            <H5>STEP 2 OF 3</H5>
            <Para>
              Lost or Have Troubles?<Link> Get Help → </Link>
            </Para>
          </Header>
          <H4>Investment Plans</H4>
          <Para>
            Let us know about your investment plans. This will help us get you
            to the right expert who will help u further
          </Para>
          <Count>How much are you planning to invest in this year?</Count>
          <InputContainer>
            <Input placeholder="From" type="number" className="from"/>
            <Input placeholder="To" type="number" className="to"/>
          </InputContainer>
          <Slider>
            <MoneyProgressBar></MoneyProgressBar>
          </Slider>
          <Accredit>Are u an accredited investor?</Accredit>
          <AccreditContainer>
            <AccreditContainer2>
              <AccreditInput type="radio" id="choice1" name="choice" />
              <Label for="choice1">Yes</Label>
            </AccreditContainer2>
            <AccreditContainer2>
              <AccreditInput type="radio" id="choice2" name="choice" />
              <Label for="choice2">No</Label>
            </AccreditContainer2>
          </AccreditContainer>
          <Footer>
            <Para color="#3988dd" onClick={changeUrlBack} style={{ cursor: "pointer" }}>
              ← Back to the previous
            </Para>
            <Simplediv>
              <Button
                color="#3988dd"
                backgroundColor="#edf7fd"
                onClick={changeUrl}
              >
                Skip for now
              </Button>
              <Button color="white" backgroundColor="#35a1ee" onClick={changeUrl}>
                Next stop→
              </Button>
            </Simplediv>
          </Footer>
        </Detailssecond>
      </Details>
    </Container>
  );
};

export default Container2;
