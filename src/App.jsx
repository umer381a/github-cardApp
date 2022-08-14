import React, {useEffect, useState} from "react"
import "./App.css"
import Form from "./components/form/Form"
import CardList from "./components/card/CardList"

const App = ({title}) => {

  
  const [profiles, setProfiles] =useState([])
 
  const addNewProfile = (profileData) => {
  	setProfiles(prevState => [...prevState, profileData]);
  };
	
  	return (
    	<div className="App">
    	  <div className="header">{title}</div>
        <Form onSubmit={addNewProfile} />
        <CardList profiles={profiles} />
    	</div>
    );
  	
}



export default App