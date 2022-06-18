import { InputLonger, InputCont, Header, ContMain, DetailsCont ,H4, H3, H5, Para, Detailssecond, Link, Footer, Button, Simplediv, Input } from "./Details.style"
import SideBar from "../SideBar/SideBar"
import { useForm } from "react-hook-form"

const normalizeCardNumber = (value) => {
    return value.replace(/\s/g,"").match(/.{1,4}/g)?.join(" ").substr(0,19) || ""
}

const Details = () => {
    return (
        <ContMain>
                <SideBar></SideBar>
            <DetailsCont>
                <Detailssecond>
                    <Header>
                        <H5>STEP 1 OF 3</H5>
                        <Para>Lost or Have Troubles?<Link> Get Help  → </Link></Para>
                    </Header>
                        <H3>Contact Details</H3>
                        <Para>welcome to United Properties, we are glad to see you! Let's get started by  letting us know a little</Para>
                        <InputCont>
                            {/* <InputMask classname="input" mask={'+37\\3 99 999 999'}/>; */}
                            <Input type="tel"></Input>
                            <Input placeholder="0000 0000 0000 0000" type="tel" inputMode="numeric" autoComplete="cc-number" 
                            onChange={(event) => {
                                const {value} = event.target
                                event.target.value = normalizeCardNumber(value)
                            }}></Input>
                            <InputLonger></InputLonger>
                            <InputLonger></InputLonger>
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
