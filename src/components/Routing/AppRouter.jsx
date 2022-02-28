import React, { Suspense, lazy } from "react";
import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
import Explore from "../screens/Explore";
import NewPassword from "../screens/modals/NewPassword";
import EnterName from "../screens/modals/EnterName";
import Congradulation from "../screens/modals/Congradulation";
import NewStudentData from "../screens/NewStudentData";
import LandingPage from "../screens/LandingPage";
import Video_page from "../screens/Video_page";
import ProfileModal from '../screens/modals/ProfileModal';
import ChooseProfile from "../screens/modals/ChooseProfile";

 
function AppRouter() {
   console.log("app router");
   return (
       <Container>
           {/* <HeaderModal/> */}
           <Routes>
               <Route path="/" element={<Explore />} />
               <Route path="/entername" element={<EnterName/>}/>
               <Route path="/enterpassword" element={<NewPassword />} />
               <Route path="/chooseprofile" element={<ChooseProfile/>}/>
               <Route path="/newstudentdata" element={<NewStudentData/>}/>
               <Route path="/congrats" element={<Congradulation/>}/>
               <Route path="/landing" element={<LandingPage/>}/>
               <Route path="/videopage" element={<Video_page/>}/>
               <Route path="/profile" element={<ProfileModal/>}/>

           </Routes>
       </Container>
   );
}
 
export default AppRouter;
 

const Container = styled.div``;