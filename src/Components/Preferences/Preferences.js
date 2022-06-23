import {   SelectPara, SelectInput, RealEstate, Select , H3font, Header, SideBarContainer, ContMain, DetailsCont , H3, H5, Para, Detailssecond, Link, Footer, Button, CustomDiv } from "./Preferences.style"
import PreferencesSideBar from "../Preferences/PreferencesSideBar"
import { useState } from "react"
import React, { useRef } from "react";
import {useNavigate} from "react-router-dom";

import {clickHandlerClass} from "./PrefrencesStyleFunction/PrefrencesStyleFunction";


const Preferences = (props) => {

    let navigate = useNavigate();
    // const [checkboxes, setCheckboxes] = useState([{label: 'Single Family', value: true, id: 1}, {label: 'Residential multifamily', value: false, id: 2}])
    // const info = []
    // const checkboxRef = useRef();
    // const save = (event) => {
    //     const inputValue = event.target.value
    //     if(checkboxRef.current.checked === true){
    //         info.push(inputValue)
    //         console.log(info)
    //     }else if(checkboxRef.current.checked === false){
    //         info.shift(inputValue)
    //         console.log(info)
    //     }
    // }
    // const handleClick = (event) => {
    //     console.log(event.target.innerText);
    // }
    // const afterClick = () => {
    //     console.log("yes")
    // }
    //    const onChange = (event, id) => {
    //     checkboxes.findIndex(item => {
    //       })
    //     if(checkboxes.value = true){
    //     }
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
                                .map(({label, value}, idx) => <RealEstate><SelectInput key={checkboxes.id} onChange={(item) => onChange(item = value)} onClick={!idx ? afterClick : ()=>{}} type="checkbox" checked={value}></SelectInput><SelectPara>{label}</SelectPara></RealEstate>)
                            } */}

                        <RealEstate className="borderFamily">
                            <SelectInput className="checkboxFamily" type="checkbox" value="Family" onClick={clickHandlerFamily}/>
                            <SelectPara className="paragraphFamily">Family</SelectPara>
                        </RealEstate>

                        <RealEstate className="borderMultifamily">
                            <SelectInput className="checkboxMultifamily" type="checkbox" value="Residential multifamily" onClick={clickHandlerMultifamily}/>
                            <SelectPara className="paragraphMultifamily">Residential multifamily</SelectPara>
                        </RealEstate>

                        <RealEstate className="borderRetail">
                            <SelectInput className="checkboxRetail" type="checkbox" value="Retail" onClick={clickHandlerRetail}/>
                            <SelectPara className="paragraphRetail">Comercial retail</SelectPara>
                        </RealEstate>

                        <RealEstate className="borderIndustrial">
                            <SelectInput className="checkboxIndustrial" type="checkbox"  value="Industrial" onClick={clickHandlerIndustrial}/>
                            <SelectPara className="paragraphIndustrial">Comercial industrial</SelectPara>
                        </RealEstate>

                        <RealEstate className="borderHospitality">
                            <SelectInput className="checkboxHospitality" type="checkbox" value="Hospitality" onClick={clickHandlerHospitality}/>
                            <SelectPara  className="paragraphHospitality">Comercial hospitality</SelectPara>
                        </RealEstate>

                        <RealEstate className="borderWarehousing">
                            <SelectInput className="checkboxWarehousing" type="checkbox" value="Warehousing" onClick={clickHandlerWarehousing}/>
                            <SelectPara className="paragraphWarehousing">Comercial werehousing</SelectPara>
                        </RealEstate>

                        <RealEstate className="borderOffice">
                            <SelectInput className="checkboxOffice" type="checkbox" value="Office" onClick={clickHandlerOffice}/>
                            <SelectPara className="paragraphOffice">Comercial office</SelectPara>
                        </RealEstate>

                        <RealEstate className="borderOther">
                            <SelectInput className="checkboxOther" type="checkbox" value="Other" onClick={clickHandlerOther(8, checkboxOther, borderOther, paragraphOther)}/>
                            <SelectPara className="paragraphOther">other</SelectPara>
                        </RealEstate>

                    </Select>
                    <Footer>
                        <Para color="#3988dd" onClick={() => {navigate("/page2")}}>← Back to the previous</Para>
                        <CustomDiv>
                            <Button color="#3988dd" backgroundColor="#edf7fd">Skip for now</Button>
                            <Button color="white" backgroundColor="#35a1ee">Next stop→</Button>
                        </CustomDiv>
                    </Footer>
                </Detailssecond>
            </DetailsCont>
        </ContMain>
    )
}
export default Preferences