import {
    Lines,
    InvestmentLines,
    Container,
    Slogan,
    Properties,
    United,
    Image,
    ImageContainer,
    QuoteContainer,
    TextContainer,
    InvestmentPlansProgressBar,
    InvestmentPreferencesProgressBar,
    ProgressBar,
    CheckedPage,
    InvestmentPlansProgressText,
    InvestmentPreferencesProgressText,
    ProgressText,
    SloganContainer,
    ProgressBarContainer,
    ProgressTextContainer,
  } from "./DetailsSideBarStyle";
  
  const DetailsSideBar = (props) => {
    return (
      <Container>
        <SloganContainer>
          <Slogan>
            <United>UNITED</United>
            <Properties>PROPERITIES</Properties>
          </Slogan>
        </SloganContainer>
        <ProgressBarContainer>
          <div>
            <ProgressTextContainer>
              <ProgressBar>
                <CheckedPage></CheckedPage>
              </ProgressBar>
           <ProgressText>Contact Details</ProgressText>
            </ProgressTextContainer>
          </div>
          <Lines />
          <Lines />
          <div>
            <ProgressTextContainer>
              <InvestmentPlansProgressBar>
              </InvestmentPlansProgressBar>
              <InvestmentPlansProgressText>Investment Plans</InvestmentPlansProgressText>
            </ProgressTextContainer>
          </div>
          <InvestmentLines />
          <InvestmentLines />
          <div>
            <ProgressTextContainer>
              <InvestmentPreferencesProgressBar>
              </InvestmentPreferencesProgressBar>
              <InvestmentPreferencesProgressText>Investment Preferences</InvestmentPreferencesProgressText>
            </ProgressTextContainer>
          </div>
        </ProgressBarContainer>
        <QuoteContainer>
          <ImageContainer>
            <Image />
          </ImageContainer>
          <TextContainer>
            <p>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, eaque.{" "}
            </p>
            <h4>Lorem ipsum.</h4>
            <p>Lorem ipsum dolor sit amet.</p>
          </TextContainer>
        </QuoteContainer>
      </Container>
    );
  };
  
  export default DetailsSideBar;
  