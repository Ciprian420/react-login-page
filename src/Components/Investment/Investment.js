import { ContMain, Header, Details, H4, Count, Input,
    Label, H5, Para, Detailssecond, InputContainer, Slider,
    AccreditContainer, AccreditContainer2, Accredit, AccreditInput } from "./Investment.style"
import MoneyProgressBar from "../MoneyProgressBar/MoneyProgressBar";
import SideBar from "../SideBar/SideBar"

const Container2 = () => {
    return (
        <ContMain>
            <SideBar></SideBar>
            <Details>
                <Detailssecond>
                    <Header>
                    <H5>STEP 2 OF 3</H5>
                    </Header>
                    <H4>Investment Plans</H4>
                    <Para style={{}} >Let us know about your investment plans. This will help us get you to the right expert who will help u further</Para>
                    <Count>How much are you planning to invest in this year?</Count>
                    <InputContainer>
                        <Input placeholder="From"/>
                        <Input placeholder="To"/>
                    </InputContainer>
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
                </Detailssecond>
            </Details>
        </ContMain>
    )
}

export default Container2