import {   
    SelectPara, 
    SelectInput, 
    RealEstate, 
    Select , 
    H3font, 
    Header, 
    SideBarContainer, 
    H3, 
    H5, 
    DetailsSecond, 
    Link, 
    Footer,
    Button, 
    CustomDiv 
} from "./Preferences.style"
import PreferencesSideBar from "../Preferences/PreferencesSideBar"
import {ContainerMain, CustomParagraph, InnerContainer} from "../Details/Details.style";
import { useState } from "react"
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import {initializeApp} from "firebase/app";
import {getFirestore} from "@firebase/firestore";
import {doc, setDoc} from "firebase/firestore";
import {clickHandlerFamily, clickHandlerHospitality, clickHandlerIndustrial, clickHandlerMultifamily,
     clickHandlerOffice, clickHandlerOther, clickHandlerRetail,clickHandlerWarehousing} from "./PrefrencesStyleFunction/PrefrencesStyleFunction";


const makeid = (length) => {
    let text = "";
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (let i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
}



const Preferences = (props) => {

    let navigate = useNavigate();
    const nextPage = () => {
        navigate("/page4")
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
        await setDoc(doc(db, "preferences", makeid()), {
            preferences: "string"

        });
    }
      
    return (
        <ContainerMain>
            <SideBarContainer><PreferencesSideBar/></SideBarContainer>
            <InnerContainer>
                <DetailsSecond>
                    <Header>
                        <H5>STEP 3 OF 3</H5>
                        <CustomParagraph>Lost or Have Troubles?<Link> Get Help  → </Link></CustomParagraph>
                    </Header>
                    <H3>Investment Preferences</H3>
                    <CustomParagraph>This will help us figure out what your investment options are so that we can show you only possibly intresting for your deals</CustomParagraph>

                    <H3font>What kind of real estate are u interested in?</H3font>
                    <Select>
                        <RealEstate className="borderFamily">
                            <SelectInput className="checkboxFamily" type="checkbox" value="Family"/>
                            <SelectPara className="paragraphFamily">Single Family</SelectPara>
                        </RealEstate>

                        <RealEstate className="borderMultifamily">
                            <SelectInput className="checkboxMultifamily" type="checkbox" value="Residential multifamily" />
                            <SelectPara className="paragraphMultifamily">Residential multifamily</SelectPara>
                        </RealEstate>

                        <RealEstate className="borderRetail">
                            <SelectInput className="checkboxRetail" type="checkbox" value="Retail"/>
                            <SelectPara className="paragraphRetail">Comercial retail</SelectPara>
                        </RealEstate>

                        <RealEstate className="borderIndustrial">
                            <SelectInput className="checkboxIndustrial" type="checkbox"  value="Industrial"/>
                            <SelectPara className="paragraphIndustrial">Comercial industrial</SelectPara>
                        </RealEstate>

                        <RealEstate className="borderHospitality">
                            <SelectInput className="checkboxHospitality" type="checkbox" value="Hospitality" />
                            <SelectPara  className="paragraphHospitality">Comercial hospitality</SelectPara>
                        </RealEstate>

                        <RealEstate className="borderWarehousing">
                            <SelectInput className="checkboxWarehousing" type="checkbox" value="Warehousing" />
                            <SelectPara className="paragraphWarehousing">Comercial warehousing</SelectPara>
                        </RealEstate>

                        <RealEstate className="borderOffice">
                            <SelectInput className="checkboxOffice" type="checkbox" value="Office"/>
                            <SelectPara className="paragraphOffice">Comercial office</SelectPara>
                        </RealEstate>

                        <RealEstate className="borderOther">
                            <SelectInput className="checkboxOther" type="checkbox" value="Other" onClick={(clickHandlerOther)}/>
                            <SelectPara className="paragraphOther">other</SelectPara>
                        </RealEstate>

                    </Select>
                    <Footer>
                        <CustomParagraph color="#3988dd" onClick={() => {navigate("/page2")}}>← Back to the previous</CustomParagraph>
                        <CustomDiv>
                            <Button onClick={nextPage} color="#3988dd" backgroundColor="#edf7fd">Skip for now</Button>
                            <Button onClick={handleSubmit} type="submit" color="white" backgroundColor="#35a1ee">Next step</Button>
                        </CustomDiv>
                    </Footer>
                </DetailsSecond>
            </InnerContainer>
        </ContainerMain>
    )
}
export default Preferences