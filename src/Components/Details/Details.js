import { InputLonger, InputCont, Header, ContMain, DetailsCont ,H4, H3, H5, Para, Detailssecond, Link, Footer, Button, Simplediv, Input } from "./Details.style"
import SideBar from "../SideBar/SideBar"
import { useForm } from "react-hook-form"
import { useState } from "react"

const normalizeCardNumber = (value) => {
    return value.replace(/\s/g,"").match(/.{1,4}/g)?.join(" ").substr(0,19) || ""
}



const Details = () => {
    const [step] = useState(0);
    return (
        <ContMain>
                <SideBar></SideBar>
            <DetailsCont>
                <Detailssecond>
                    {
                        step === 0 && <div>Step1</div>
                    }
                    {
                        step === 1 && <div>Step2</div>
                    }
                    <Header>
                        <H5>STEP 1 OF 3</H5>
                        <Para>Lost or Have Troubles?<Link> Get Help  → </Link></Para>
                    </Header>
                        <H3>Contact Details</H3>
                        <Para>welcome to United Properties, we are glad to see you! Let's get started by  letting us know a little</Para>
                        <InputCont>
                            {/* <InputMask classname="input" mask={'+37\\3 99 999 999'}/>; */}
                            
                            <div>
                            <Input type="tel" placeholder="Full name" style={{width: 170}}></Input>
                            <select id="country" name="country" style={{width: 20, position: "relative",left: 10}}>
                              <option value="australia">Moldova</option>
                              <option value="canada">Rusia</option>
                              <option value="usa">USA</option>
                            </select>
                            <Input placeholder="0000 0000 0000 0000"  inputMode="numeric" autoComplete="cc-number" 
                            onChange={(event) => {
                                const {value} = event.target
                                event.target.value = normalizeCardNumber(value)
                            }}></Input>
                            </div>
                            <InputLonger placeholder="Email address"/>
                            <InputLonger placeholder="Country"/>
                        </InputCont>
                        <H4>Privacy Policy</H4>
                        <Para>we know you care about how personal information is used and shared, so we take your privacy seriously</Para>
                        <Para color="#35a1ee">Expand privacy policy →</Para>
                    <Footer>
                    <Para color="#3988dd">← Back to the previous</Para> 
                        <Simplediv>
                            <Button color="#3988dd" backgroundColor="#edf7fd">Skip for now</Button> 
                            <Button color="white" backgroundColor="#35a1ee">Next stop→</Button>
                        </Simplediv>
                    </Footer>
                </Detailssecond>
            </DetailsCont>
        </ContMain>
    )
}
export default Details
