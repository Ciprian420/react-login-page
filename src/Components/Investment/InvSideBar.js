import {
    Lines,
    Container,
    Slogan,
    Properties,
    United,
    Image,
    ImageContainer,
    QuoteContainer,
    TextContainer,
    ProgressBar,
    CheckedPage,
    ProgressText,
    SloganContainer,
    ProgressBarContainer,
    ProgressBarIP,
    ProgressTextContainer,
    ProgressTextIP
  } from "./InvSideBar.style";
  
  const InvSideBar = () => {
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
              <ProgressBar>
                <CheckedPage></CheckedPage>
              </ProgressBar>
              <ProgressText>Investment Plans</ProgressText>
            </ProgressTextContainer>
          </div>
          <Lines />
          <Lines />
          <div>
            <ProgressTextContainer>
              <ProgressBarIP/>
              <ProgressTextIP>Investment Preferences</ProgressTextIP>
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
  
  export default InvSideBar;
  