import { ContMain, Header, SideBar, Details, H4, H5, Para, Detailssecond, LocationContainer, LocationImage, LocationInfo, LocationName, LocationText, LocationRegion, MinInvestment, MinInvestmentNum, MinInvestmentText, ProjectedReturn, ProjectedReturnNum, ProjectedReturnText, Last} from "./CC.style"

const ConfirmationContainer = () => {
    return (
        <ContMain>
            <SideBar></SideBar>
            <Details>
                <Detailssecond>
                    <Header>
                    <H5>STEP 6 OF 6</H5>
                    </Header>
                    <H4>Confirmation</H4>
                    <Para>Every property in this neighborhood has attracted more than $1,000,000. Investors are finally submitting offers like hotcakes!</Para>
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
                </Detailssecond>
            </Details>
        </ContMain>
    )
}

export default ConfirmationContainer