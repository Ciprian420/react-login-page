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
    return (
        <ContMain>
                <SideBar></SideBar>
            <DetailsCont>
                <Detailssecond>
                    <Header>
                        <H5>STEP 1 OF 3</H5>
                        <Para>Lost or Have Troubles?<Link> Get Help  → </Link></Para>
                    </Header>
                        <H3>Investment Preferences</H3>
                        <Para>This will help us figure out what your investment options are so that we can show you only possibly intresting for your deals</Para>
                       
                        <H3font>What kind of real estate are u interested in?</H3font>
                        <Select>
                            <RealEstate><SelectInput type="checkbox"></SelectInput><SelectPara>Single Family</SelectPara></RealEstate>
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
