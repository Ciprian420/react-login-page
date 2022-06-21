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
  } from "./ConfirmationSideBarStyle";
  
  const ConfirmationSideBar = (props) => {
    return (
      <Container>
        <SloganContainer>
          <Slogan>
            <United>UNITED</United>
            <Properties>PROPERITIES</Properties>
          </Slogan>
        </SloganContainer>
        <ProgressBarContainer>
        </ProgressBarContainer>
        <QuoteContainer>
          <ImageContainer>
            <Image/>
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
  
  export default ConfirmationSideBar;
  