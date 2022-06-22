
import {   SelectPara, SelectInput, RealEstate, Select , H3font, Header, ContMain, DetailsCont , H3, H5, Para, Detailssecond, Link, Footer, Button, Simplediv } from "./Preferences.style"
import SideBar from "../SideBar/SideBar"
import { useNavigate } from 'react-router-dom';

const changeUrlBack = () =>{
    window.history.pushState("hi", "Text", "http://localhost:3000/page2")}

    const changeUrl = () =>{
        window.history.pushState("hi", "Text", "http://localhost:3000/page4")}

const Preferences = () => {
    const navigate = useNavigate()

    const changeUrl = () => {
     navigate("/page4")
    }

    const changeUrlBack = () => {
        navigate("/page2")
    }

import {   SelectPara, SelectInput, RealEstate, Select , H3font, Header, SideBarContainer, ContMain, DetailsCont , H3, H5, Para, Detailssecond, Link, Footer, Button, Simplediv } from "./Preferences.style"
import PreferencesSideBar from "../Preferences/PreferencesSideBar"
import { useState } from "react"
import React, { useRef } from "react";


const Preferences = (props) => {
    const infoPreferences = [
        {
            family: "Single Family"
        },
        {
            multifamily: "Residential multifamily"
        }
        ]

        // const [checkboxes, setCheckboxes] = useState([{label: 'Single Family', value: true}, {label: 'Residential multifamily', value: false}])
    const info = []
    const afterClick = () => {
    }
    const checkboxRef = useRef();
    const innerText = useRef();
    const save = (event) => {
        if(checkboxRef.current.checked === true){
            console.log(checkboxRef.current.checked);
            info.push(event.target.innerText)
            console.log(info)
        }else if(checkboxRef.current.checked === false){
            info.shift(event.target.innerText)
            console.log(info)
        }
      }
    const handleClick = (event) => {
        console.log(event.target.innerText);    
    }
    // const onChange = (event, id) => {
    //     checkboxes.findIndex(item => {
    //         console.log(item.value)
    //       })
    //     console.log(id)
    // }
    return (
        <ContMain>
                <SideBarContainer><PreferencesSideBar/></SideBarContainer>
            <DetailsCont>
                <Detailssecond>
                    <Header>
                        <H5>STEP 3 OF 3</H5>
                        <Para>Lost or Have Troubles?<Link> Get Help  → </Link></Para>
                    </Header>
                        <H3>Investment Preferences</H3>
                        <Para>This will help us figure out what your investment options are so that we can show you only possibly intresting for your deals</Para>
                       
                        <H3font>What kind of real estate are u interested in?</H3font>
                        <Select>
                            {/* {
                                ['Single Family', 'Residential multifamily', 'Comercial retail', 'Comercial industrial', 'Comercial hospitality', 'Comercial werehousing', 'Comercial office', 'other'].map((name, idx)=><RealEstate><SelectInput onClick={!idx ? afterClick : ()=>{}} type="checkbox"></SelectInput><SelectPara>{name}</SelectPara></RealEstate>)
                            } */}
                            {/* {
                                checkboxes
                                .map(({label, value}, idx) => <RealEstate><SelectInput onChange={(item) => onChange(item = value)} onClick={!idx ? afterClick : ()=>{}} type="checkbox" checked={value}></SelectInput><SelectPara>{label}</SelectPara></RealEstate>)
                            } */}
                            <RealEstate className="container" onClick={afterClick}><SelectInput onClick={save} ref={checkboxRef} autoComplete="on" className="input" type="checkbox"></SelectInput><SelectPara onClick={handleClick} ref={innerText}>Family</SelectPara></RealEstate>
                            <RealEstate><SelectInput type="checkbox"></SelectInput><SelectPara>Residential multifamily</SelectPara></RealEstate>
                            <RealEstate><SelectInput type="checkbox"></SelectInput><SelectPara>Comercial retail</SelectPara></RealEstate>
                            <RealEstate><SelectInput type="checkbox"></SelectInput><SelectPara>Comercial industrial</SelectPara></RealEstate>
                            <RealEstate><SelectInput type="checkbox"></SelectInput><SelectPara>Comercial hospitality</SelectPara></RealEstate>
                            <RealEstate><SelectInput type="checkbox"></SelectInput><SelectPara>Comercial werehousing</SelectPara></RealEstate>
                            <RealEstate><SelectInput type="checkbox"></SelectInput><SelectPara>Comercial office</SelectPara></RealEstate>
                            <RealEstate><SelectInput type="checkbox"></SelectInput><SelectPara>other</SelectPara></RealEstate>
                        </Select>
                    <Footer>
                    <Para color="#3988dd" onClick={changeUrlBack} style={{ cursor: "pointer" }}>← Back to the previous</Para> 
                        <Simplediv>
                            <Button onClick={changeUrl} color="#3988dd" backgroundColor="#edf7fd">Skip for now</Button> 
                            <Button onClick={changeUrl} color="white" backgroundColor="#35a1ee">Next stop→</Button>
                        </Simplediv>
                    </Footer>
                </Detailssecond>
            </DetailsCont>
        </ContMain>
    )
}
export default Preferences
