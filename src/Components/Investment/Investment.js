import { ContMain, Header, SideBarContainer, Details, H4, Count, Input, Footer, Simplediv, Button,
    Label, H5, Para, Detailssecond, InputContainer, Slider, Link,
    AccreditContainer, AccreditContainer2, Accredit, AccreditInput } from "./Investment.style"
import MoneyProgressBar from "../MoneyProgressBar/MoneyProgressBar";
import SideBar from "../SideBar/SideBar";
import { getDocs, setDoc, doc, collection} from "firebase/firestore";
import {initializeApp} from "firebase/app";
import {getFirestore} from "@firebase/firestore";
import {useState} from "react";
import InvestmentSideBar from "../Investment/InvestmentSideBar"
const makeid = () => {
    let text = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (let i = 0; i < 21; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}
;
const Container2 = () => {
    const [Min, SetMin] = useState("")
    const [Max, SetMax] = useState("")
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
        e.preventDefault();
        await setDoc(doc(db, "users", makeid()), {
            min: Min,
            max: Max,
        });
    }
    return (
        <ContMain>
            <SideBarContainer><InvestmentSideBar/></SideBarContainer>
            <Details>
                <Detailssecond>
                <Header>
                        <H5>STEP 2 OF 3</H5>
                        <Para>Lost or Have Troubles?<Link> Get Help  → </Link></Para>
                    </Header>
                    <H4>Investment Plans</H4>
                    <Para style={{}} >Let us know about your investment plans. This will help us get you to the right expert who will help u further</Para>
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
                    <Para color="#3988dd">← Back to the previous</Para> 
                        <Simplediv>
                            <Button color="#3988dd" backgroundColor="#edf7fd">Skip for now</Button> 

                            <Button type="submit" color="white" backgroundColor="#35a1ee">Next stop→</Button>
                        </Simplediv>
                    </Footer>
                </form>
                </Detailssecond>
            </Details>
        </ContMain>
    )
}
export default Container2