import React,{useState} from 'react'
import axios from 'axios'
import "./form.css"

const Form = ({onSubmit}) => {
	const [userName, setUserName] = useState("");
	const handleSubmit = async (e) => {
  	e.preventDefault();
    const resp = await axios.get(`https://api.github.com/users/${userName}`);
    onSubmit(resp.data);
    setUserName("")
  };
	
  	return (
    	<form className='card-form' onSubmit={handleSubmit}>
    	  <input 
          type="text" 
          value={userName}
          onChange={e => setUserName(e.target.value )}
          placeholder="GitHub username" 
          required 
        />
        <button>Add card</button>
    	</form>
    );
  }


export default Form