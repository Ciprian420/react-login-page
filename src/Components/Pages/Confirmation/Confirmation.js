import { 
    ContMain,
    Simplediv,
    Button,
    Bottom,
    Header,
    Footer,
    SideBarContainer,
    Details,
    H4,
    H5,
    ProjectH5,
    Link,
    Para,
    ProjectPara,
    TextSpace,
    Detailssecond,
    LocationContainer, 
    LocationImage, 
    LocationInfo, 
    LocationName, 
    LocationText, 
    LocationRegion, 
    MinInvestment, 
    MinInvestmentNum, 
    MinInvestmentText, 
    ProjectedReturn, 
    ProjectedReturnNum, 
    ProjectedReturnText, 
    ProjectContainer, 
    Last
} from "./ConfirmationStyle"
import {Container, SloganContainer, Slogan, United, Properties, ProgressBarContainer, QuoteContainer, Image, ImageContainer, TextContainer} from "../../SideBar/SideBarStyle"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { getDatabase, ref, onValue} from "firebase/database";
import {useEffect, useState} from "react";
import {initializeApp} from "firebase/app";
import {getFirestore} from "@firebase/firestore";
import { child, get } from "firebase/database";
import {collection, getDocs,query, where, orderBy, getDoc} from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import Stefan from "../../img/stefanel.png"



const ConfirmationContainer = () => {
    let navigate = useNavigate();
    const nextPage = () => {
        navigate("/")
    }
    const [name, setName] = useState("")
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
    const colRefDetails = collection(db, "users")
    const colRefInvestment = collection(db, "investmentInfo")
    const colRefPreferences = collection(db, "prefernces")
    const queryDetails = query(colRefDetails, orderBy("createdAt", "desc"))
    const queryInvestment = query(colRefInvestment, orderBy("createdAt", "desc"))
    const queryPrefernces = query(colRefPreferences, orderBy("createdAt", "desc"))
    let myName
    let myPhone
    let myEmail
    let myCountry
    let minAndMaxInvestment
    console.log('myName :>> ', myName);
    getDocs(queryDetails)
        .then((snapshot) => {
            let name = []
            snapshot.docs.forEach((doc) => {
                name.push({ ...doc.data(), id: doc.id })
            })
            myName = name[0].name;
            myPhone = name[0].phone;
            myEmail = name[0].email;
            myCountry = name[0].country;
            const confCountry = document.querySelector(".confirmationCountry")
            const confName = document.querySelector(".confirmationName")
            const confPhone = document.querySelector(".confirmationPhoneNumber")
            const confEmail = document.querySelector(".confirmationEmail")
            confName.textContent = myName
            confPhone.textContent = myPhone
            confEmail.textContent = myEmail
            confCountry.textContent = myCountry
            console.log('myName :>> ', myName);
        })
    getDocs(queryInvestment)
        .then((snapshot) => {
            let minAndMax = []
            snapshot.docs.forEach((doc) => {
                minAndMax.push({ ...doc.data(), id: doc.id })
            })
            minAndMaxInvestment = `${minAndMax[0].min}$ - ${minAndMax[0].max}$`
            const confInvestmentMin = document.querySelector(".confirmationInvestMinAndMax")
            confInvestmentMin.textContent = minAndMaxInvestment

            console.log(minAndMax[0].min, minAndMax[0].max)
        }) 
    return (
        <ContMain>
            <SideBarContainer>
                <Container img={Stefan}>
        <SloganContainer>
          <Slogan>
            <United>UNITED</United>
            <Properties>PROPERITIES</Properties>
          </Slogan>
        </SloganContainer>
        <ProgressBarContainer>
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
            <Details>
                <Detailssecond>
                    <Header/>
                    <H4>Confirmation</H4>
                    <Para>Every property in this neighborhood has attracted more than $1,000,000. Investors are finally submitting offers like hotcakes!</Para>
                    <Bottom>
                    <LocationContainer>
                    <LocationImage></LocationImage>
                    <LocationInfo>
                        <LocationName>
                        Moldova, Chisinau
                        </LocationName>
                    </LocationInfo>
                    </LocationContainer>
                    <ProjectContainer>
                        <TextSpace>
                        <ProjectPara>Full Name</ProjectPara>
                        <ProjectH5 className="confirmationName">{myName}</ProjectH5>
                        </TextSpace>
                        <TextSpace>
                        <ProjectPara>Phone Number</ProjectPara>
                        <ProjectH5 className="confirmationPhoneNumber">{myPhone}</ProjectH5>
                        </TextSpace>
                        <TextSpace>
                        <ProjectPara>E-mail</ProjectPara>
                        <ProjectH5 className="confirmationEmail">{myEmail}</ProjectH5>
                        </TextSpace>
                        <TextSpace>
                        <ProjectPara>Country</ProjectPara>
                        <ProjectH5 className="confirmationCountry">{myCountry}</ProjectH5>
                        </TextSpace>
                        <TextSpace>
                        <ProjectPara>Soft cap - hard cap</ProjectPara>
                        <ProjectH5 className="confirmationInvestMinAndMax">{minAndMaxInvestment}</ProjectH5>
                        </TextSpace>
                    </ProjectContainer>
                    </Bottom>
                    <Footer>
                    <Para color="#3988dd" onClick={() => {navigate("/page3")}}>← Back to the previous</Para> 
                        <Simplediv>
                            <Button color="white" backgroundColor="#35a1ee" onClick={() => {navigate("/")}}>Finish</Button>
                        </Simplediv>
                    </Footer>
                </Detailssecond>
            </Details>
        </ContMain>
    )
}

export default ConfirmationContainer