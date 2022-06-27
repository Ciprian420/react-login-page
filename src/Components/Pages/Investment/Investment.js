import {
  Header,
  SideBarContainer,
  DetailsSecond,
  H4,
  Count,
  Input,
  Footer,
  ButtonsContainer,
  Button,
  Label,
  H5,
  Slider,
  Link,
  AccreditContainer,
  AccreditContainer2,
  Accredit,
  AccreditInput,
  CustomDiv,
} from "./Investment.style";
import MoneyProgressBar from "../../MoneyProgressBar/MoneyProgressBar";
import styled from "styled-components";
import {createContext, useState} from "react";
import { getDocs, setDoc, doc, collection, serverTimestamp} from "firebase/firestore";
import {initializeApp} from "firebase/app";
import {getFirestore} from "@firebase/firestore";
import {Container, SloganContainer, Slogan, United, Properties, ProgressBarContainer, ProgressTextContainer, ProgressBar, CheckedPage, Lines, ProgressText, QuoteContainer, Image, ImageContainer, TextContainer} from "../../SideBar/SideBarStyle"
import {ContainerMain, CustomParagraph, InnerContainer} from "../Details/Details.style";
import {BrowserRouter as Router, Route, Routes, useNavigate} from "react-router-dom";
import React from "react";



const makeid = () => {
    let text = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (let i = 0; i < 21; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}


const Investment = () => {
    let navigate = useNavigate()
    const nextPage = () => {
        navigate("/page3")
    }
    const [Min, SetMin] = useState("")
    const [Max, SetMax] = useState("")
    const date = new Date().toString()
    const firebaseConfig = {
        apiKey: "AIzaSyDFCyVx0svRELkympaEGa0IXW5r0PnCRTE",
        authDomain: "login-ad768.firebaseapp.com",
        projectId: "login-ad768",
        storageBucket: "login-ad768.appspot.com",
        messagingSenderId: "130602005190",
        appId: "1:130602005190:web:e142f77ea3cd7c4bca9dc7",
        measurementId: "G-1365Q36W6L"
    };
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app)

    const handleSubmit = async (e) => {
        nextPage()
        e.preventDefault();
        await setDoc(doc(db, "investmentInfo", makeid()), {
            min: Min,
            max: Max,
            createdAt: serverTimestamp()
        });
    }
    return (
        <ContainerMain>
            <SideBarContainer>
<Container>
      <SloganContainer>
        <Slogan>
          <United>UNITED</United>
          <Properties>PROPERITIES</Properties>
        </Slogan>
      </SloganContainer>
      <ProgressBarContainer>
        <div>
          <ProgressTextContainer color="white">
            <ProgressBar color="white">
              <CheckedPage/>
            </ProgressBar>
         <ProgressText color="white">Contact Details</ProgressText>
          </ProgressTextContainer>
        </div>
        <Lines color="white"/>
        <Lines color="white"/>
        <div>
          <ProgressTextContainer color="white">
            <ProgressBar color="white">
              <CheckedPage/>
            </ProgressBar>
            <ProgressText color="white">Investment Plans</ProgressText>
          </ProgressTextContainer>
        </div>
        <Lines color="white"/>
        <Lines color="white"/>
        <div>
          <ProgressTextContainer color="#6dc7fc">
            <ProgressBar color="#6dc7fc"/>
            <ProgressText color="#6dc7fc">Investment Preferences</ProgressText>
          </ProgressTextContainer>
        </div>
      </ProgressBarContainer>
      <QuoteContainer>
        <ImageContainer>
          <Image/>
        </ImageContainer>
        <TextContainer>
          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, eaque.{" "}
          </p>
          <h4>Lorem ipsum.</h4>
          <p>Lorem ipsum dolor sit amet.</p>
        </TextContainer>
      </QuoteContainer>
    </Container>
</SideBarContainer>
            <InnerContainer>
                <DetailsSecond>
                <Header>
                        <H5>STEP 2 OF 3</H5>
                        <CustomParagraph>Lost or Have Troubles?<Link> Get Help  → </Link></CustomParagraph>
                    </Header>
                    <H4>Investment Plans</H4>
                    <CustomParagraph style={{}} >Let us know about your investment plans. This will help us get you to the right expert who will help u further</CustomParagraph>
                    <Count>How much are you planning to invest in this year?</Count>
                    <form onSubmit={handleSubmit}>
                        <Input placeholder="From"
                               value={Min}
                               onChange={(e) => SetMin(e.target.value)}/>
                        <Input placeholder="To"
                               value={Max}
                               onChange={(e) => SetMax(e.target.value)}/>
                        <Slider>
                        <MoneyProgressBar></MoneyProgressBar>
                    </Slider>
                    <Accredit style={{marginTop: 10,fontSize: 'medium'}}>Are u an accredited investor?</Accredit>
                    <AccreditContainer>
                        <AccreditContainer2>
                    <AccreditInput type="radio" id="choice1" name="choice"/>
                    <Label for="choice1">Yes</Label>
                        </AccreditContainer2>
                        <AccreditContainer2>
                    <AccreditInput type="radio" id="choice2" name="choice"/>
                    <Label for="choice2">No</Label>
                    </AccreditContainer2>
                    </AccreditContainer>
                    <Footer>
                            <CustomParagraph color="#3988dd" onClick={() => {navigate("/")}}>← Back to the previous</CustomParagraph>
                        <ButtonsContainer>
                            <Button onClick={nextPage} color="#3988dd" backgroundColor="#edf7fd">Skip for now</Button>
                            <Button onClick={handleSubmit} type="submit" color="white" backgroundColor="#35a1ee">Next step→</Button>
                        </ButtonsContainer>
                    </Footer>
                </form>
                </DetailsSecond>
            </InnerContainer>
        </ContainerMain>
    )
}
export default Investment

