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
import ConfirmationSideBar from "./ConfirmationSideBar"
const ConfirmationContainer = () => {
    return (
        <ContMain>
            <SideBarContainer><ConfirmationSideBar/></SideBarContainer>
            <Details>
                <Detailssecond>
                    <Header>
                        <H5>STEP 2 OF 3</H5>
                        <Para>Lost or Have Troubles?<Link> Get Help  → </Link></Para>
                    </Header>
                    <H4>Confirmation</H4>
                    <Para>Every property in this neighborhood has attracted more than $1,000,000. Investors are finally submitting offers like hotcakes!</Para>
                    <Bottom>
                    <LocationContainer>
                    <LocationImage></LocationImage>
                    <LocationInfo>
                        <LocationName>
                        St Regis Aspen Resort
                        </LocationName>
                        <LocationRegion>London • Residential</LocationRegion>
                            <LocationText>London prime residential assets portfolio via London digital bond fund</LocationText>
                            <Last>
                            <MinInvestment>
                            <MinInvestmentNum>$50,000</MinInvestmentNum>
                            <MinInvestmentText>Min. Investment</MinInvestmentText>
                            </MinInvestment>
                            <ProjectedReturn>
                            <ProjectedReturnNum>5,5 - 7,2%</ProjectedReturnNum>
                            <ProjectedReturnText>Projected return</ProjectedReturnText>
                            </ProjectedReturn>
                            </Last>
                    </LocationInfo>
                    </LocationContainer>
                    <ProjectContainer>
                        <TextSpace>
                        <ProjectPara>Full Name</ProjectPara>
                        <ProjectH5>------</ProjectH5>
                        </TextSpace>
                        <TextSpace>
                        <ProjectPara>Phone Number</ProjectPara>
                        <ProjectH5>---------</ProjectH5>
                        </TextSpace>
                        <TextSpace>
                        <ProjectPara>E-mail</ProjectPara>
                        <ProjectH5>----------</ProjectH5>
                        </TextSpace>
                        <TextSpace>
                        <ProjectPara>Country</ProjectPara>
                        <ProjectH5>----------</ProjectH5>
                        </TextSpace>
                        <TextSpace>
                        <ProjectPara>Soft cap - hard cap</ProjectPara>
                        <ProjectH5>$5,000,000 - 15,000,000</ProjectH5>
                        </TextSpace>
                        <TextSpace>
                        <ProjectPara>Preferences</ProjectPara>
                        <ProjectH5>-------------</ProjectH5>
                        </TextSpace>
                    </ProjectContainer>
                    </Bottom>
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

export default ConfirmationContainer