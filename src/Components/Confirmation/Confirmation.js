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
    ProjectContainer, 
    Last
} from "./ConfirmationStyle"
import ConfirmationSideBar from "./ConfirmationSideBar"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { getDatabase, ref, onValue} from "firebase/database";
import {useEffect, useState} from "react";
import {initializeApp} from "firebase/app";
import {getFirestore} from "@firebase/firestore";
import { child, get } from "firebase/database";
import {collection, getDocs,query, where, orderBy, getDoc} from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import React, { useRef } from 'react'
import { db } from "../../firebase";

const ConfirmationContainer = () => {
    const refName = useRef();
    const refPhone = useRef()
    const refEmail = useRef()
    const refCountry = useRef()
    const refMinAndMax = useRef()
    let navigate = useNavigate();
    const nextPage = () => {
        navigate("/")
    }

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

getDocs(queryDetails)
    .then((snapshot) => {
        let name = []
        snapshot.docs.forEach((doc) => {
            name.push({ ...doc.data(), id: doc.id })
        })
        const nameTemp = name[0].name
        const emailTemp = name[0].email
        const phoneTemp = name[0].phone
        const countryTemp = name[0].country
        myName = nameTemp
        myPhone = phoneTemp
        myEmail = emailTemp
        myCountry = countryTemp
        const confirmName = myName
        refName.current.textContent = confirmName 
        const confPhone = myPhone
        refPhone.current.textContent = confPhone
        const confEmail = myEmail
        refEmail.current.textContent = confEmail
        const confCountry = myCountry
        refCountry.current.textContent = confCountry
    })

getDocs(queryInvestment)
    .then((snapshot) => {
        let minAndMax = []
        snapshot.docs.forEach((doc) => {
            minAndMax.push({ ...doc.data(), id: doc.id })
        })
        minAndMaxInvestment = `${minAndMax[0].min}$ - ${minAndMax[0].max}$`
        const confInvestmentMinAndMax = minAndMaxInvestment
        refMinAndMax.current.textContent = confInvestmentMinAndMax
        console.log(minAndMax[0].min, minAndMax[0].max)
    })
        
    const getElements = () => {
        let arr = [{name: "name"}, {phone: "069048478"}]
        console.log(arr)
    }

    return (
        <ContMain>
            <SideBarContainer><ConfirmationSideBar/></SideBarContainer>
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
                        <ProjectH5 className="confirmationName" ref={refName}>{myName}</ProjectH5>
                        </TextSpace>
                        <TextSpace>
                        <ProjectPara>Phone Number</ProjectPara>
                        <ProjectH5 className="confirmationPhoneNumber" ref={refPhone}>{myPhone}</ProjectH5>
                        </TextSpace>
                        <TextSpace>
                        <ProjectPara>E-mail</ProjectPara>
                        <ProjectH5 className="confirmationEmail" ref={refEmail}>{myEmail}</ProjectH5>
                        </TextSpace>
                        <TextSpace>
                        <ProjectPara>Country</ProjectPara>
                        <ProjectH5 className="confirmationCountry" ref={refCountry}>{myCountry}</ProjectH5>
                        </TextSpace>
                        <TextSpace>
                        <ProjectPara>Soft cap - hard cap</ProjectPara>
                        <ProjectH5 className="confirmationInvestMinAndMax" ref={refMinAndMax}>{minAndMaxInvestment}</ProjectH5>
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