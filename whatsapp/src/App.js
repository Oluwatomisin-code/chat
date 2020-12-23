import React from "react";
import "./App.css";
import Chat from "./chat";
import Sidebar from "./sidebar";



function App(){
  
  return(
    <div className="App">
      <div className="app_body">
        <Sidebar />
        <Chat />
      </div>
      
       
    </div>
  );
}
export default App;