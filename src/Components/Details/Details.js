import {
  InputLonger,
  InputCont,
  Header,
  DetailsCont,
  H4,
  H3,
  H5,
  Para,
  Detailssecond,
  Link,
  Footer,
  Button,
  Simplediv,
  Input,
  Container,
} from "./Details.style";
import SideBar from "../SideBar/SideBar";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router"
import { useNavigate } from 'react-router-dom';
import {useEffect} from "react";

const normalizeCardNumber = (value) => {
    return (
      value
        .replace(/\s/g, "")
        .match(/.{1,4}/g)
        ?.join(" ")
        .substr(0, 19) || ""
    );
  };




export const Details = ( props ) => {
   console.log({hist: props.history});

  const navigate = useNavigate();

  const changeUrl = () => {
    navigate("/page2")
  }

  return <Container className="container" style={{}}>
      <SideBar></SideBar>
      <DetailsCont>
        <Detailssecond>
          <Header>
            <H5>STEP 1 OF 3</H5>
            <Para>
              Lost or Have Troubles?<Link> Get Help → </Link>
            </Para>
          </Header>
          <H3>Contact Details</H3>
          <Para>
            welcome to United Properties, we are glad to see you! Let's get
            started by letting us know a little
          </Para>
          <InputCont>
            {/* <InputMask classname="input" mask={'+37\\3 99 999 999'}/>; */}
            <Input type="tel"></Input>
            <Input
              placeholder="0000 0000 0000 0000"
              type="tel"
              inputMode="numeric"
              autoComplete="cc-number"
              onChange={(event) => {
                const { value } = event.target;
                event.target.value = normalizeCardNumber(value);
              }}
            ></Input>
            <InputLonger></InputLonger>
            <InputLonger></InputLonger>
          </InputCont>
          <H4>Privacy Policy</H4>
          <Para>
            we know you care about how personal information is used and shared,
            so we take your privacy seriously
          </Para>
          <Para color="#35a1ee">Expand privacy policy →</Para>
          <Footer>
            <Simplediv>
              <Button
                color="#3988dd" backgroundColor="#edf7fd" onClick={changeUrl} >
                Skip for now
              </Button>
              <Button type="submit" color="white" backgroundColor="#35a1ee" onClick={changeUrl}>
                Next stop→
              </Button>
            </Simplediv>
          </Footer>
        </Detailssecond>
      </DetailsCont>
    </Container>;
};
