
import { InputLonger, InputCont, SideBarContainer, Header, ContMain, DetailsCont ,H4, H3, H5, Para, Detailssecond, Link, Footer, Button, Simplediv, Input } from "./Details.style"
import DetailSideBar from "../Details/DetailsSideBar"
import { useForm } from "react-hook-form"
import {useState, useEffect, useContext} from "react";
import { getDocs, setDoc, doc, collection, serverTimestamp} from "firebase/firestore";
import { db } from "../../firebase";
import {initializeApp} from "firebase/app";
import {getFirestore} from "@firebase/firestore";
import SideBar from "../SideBar/SideBar";
import { useLocation } from "react-router"
import { useNavigate } from 'react-router-dom';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";



const makeid = (length) => {
    let text = "";
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (let i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
}

const Details = () => {
    let navigate = useNavigate()
    const nextPage = () => {
        navigate("/page2")
    }

    const [Name, SetName] = useState("")
    const [Email, SetEmail] = useState("")
    const [Number, SetNumber] = useState("")
    const [Country, SetCountry] = useState("")

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
const date = new Date().toString()
const handleSubmit = async (e) => {
    nextPage()
    e.preventDefault();
    const add = await setDoc(doc(db, "users", makeid(20)), {
        name: Name,
        email: Email,
        phone: Number,
        country: Country,
        createdAt: serverTimestamp()
    });
}


    return (
        <ContMain>
            <SideBarContainer>
            <DetailSideBar></DetailSideBar>
            </SideBarContainer>
            <DetailsCont>
                <Detailssecond>
                    <Header>
                        <H5>STEP 1 OF 3</H5>
                        <Para>Lost or Have Troubles?<Link> Get Help  → </Link></Para>
                    </Header>
                    <H3>Contact Details</H3>
                    <Para>welcome to United Properties, we are glad to see you! Let's get started by  letting us know a little</Para>
                        <form onSubmit={handleSubmit}>
                            <Input type="tel" placeholder="Full name"
                                   value={Name}
                                   onChange={(e) => SetName(e.target.value)}
                            />
                            <Input placeholder="tel"  inputMode="numeric" autoComplete="cc-number"
                                   value={Number}
                                   onChange={(e) => SetNumber(e.target.value)}/>
                        <InputLonger placeholder="Email address"
                                     value={Email}
                                     onChange={(e) => SetEmail(e.target.value)}/>
                        <InputLonger placeholder="Country"
                                     value={Country}
                                     onChange={(e) => SetCountry(e.target.value)}/>
                    <H4>Privacy Policy</H4>
                    <Para>we know you care about how personal information is used and shared, so we take your privacy seriously</Para>
                    <Para color="#35a1ee">Expand privacy policy →</Para>
                    <Footer>
                        <Simplediv>
                            <Button onClick={nextPage} color="#3988dd" backgroundColor="#edf7fd" >Skip for now</Button>
                            <Button onClick={handleSubmit} type="submit" color="white" backgroundColor="#35a1ee">Next step→</Button>
                        </Simplediv>
                    </Footer>
                        </form>
                </Detailssecond>
            </DetailsCont>
        </ContMain>
    )
}
export default Details
