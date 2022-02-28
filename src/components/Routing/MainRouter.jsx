import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import AppRouter from "./AppRouter";
 
function MainRouter() {
   console.log("main");
   return (
       <Suspense>
           <Routes>
               <Route path="/*" element={<AppRouter />} />
               {/* <Route path="/auth/" component={AuthRoute} /> */}
           </Routes>
       </Suspense>
   );
}
 
export default MainRouter;
