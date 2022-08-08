
import React, { useEffect, useState ,Component ,useRef} from "react";
import TopBanner from "./components/TopBanner";

import UserAddress from './components/UserAddress'
function App() {
   
 
 return (  
  <><TopBanner/>
    <div>
    <UserAddress name="IPv4"/>
    <UserAddress name="IPv6"/>
    </div>
  </> 

 );
}

export default App;
