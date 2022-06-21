import { ContMain, Header, SideBarContainer, Details, H4, Count, Input, Footer, Simplediv, Button,
    Label, H5, Para, Detailssecond, InputContainer, Slider, Link,
    AccreditContainer, AccreditContainer2, Accredit, AccreditInput } from "./Investment.style"
import MoneyProgressBar from "../MoneyProgressBar/MoneyProgressBar";
import InvestmentSideBar from "../Investment/InvestmentSideBar";

const Container2 = () => {
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
                    <Para>Let us know about your investment plans. This will help us get you to the right expert who will help u further</Para>
                    <Count>How much are you planning to invest in this year?</Count>
                    <InputContainer>
                    <Input placeholder="From"/>
                    <Input placeholder="To"/>
                    </InputContainer>
                    <Slider>
                        <MoneyProgressBar></MoneyProgressBar>
                    </Slider>
                    <Accredit>Are u an accredited investor?</Accredit>
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
                            <Button color="white" backgroundColor="#35a1ee">Next stop→</Button>
                        </Simplediv>
                    </Footer>
                </Detailssecond>
            </Details>
        </ContMain>
    )
}

export default Container2