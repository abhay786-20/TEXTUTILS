import React, { useState }  from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';


 function App() {
  const[mode,setmode] = useState('light');
  const[alert,setalert] = useState(null);
  const showAlert =(message,type)=>{
    setalert({
      msg : message,
      type : type
    })
    setTimeout(()=>{
      setalert(null);
    },1500);
  }
  
  const toggleMode =()=>{
     if(mode ==='light'){
       setmode('dark');
       document.body.style.backgroundColor = 'grey';
       showAlert("Dark mode enabled","success");
      
     }else{
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode enabled","success");
     }
  }
  return (
  <>

  <Navbar title = "Textutils" about= "about" mode ={mode} toggleMode={toggleMode} />
  <Alert alert = {alert}/>
  <div className="container my-3">
 
 <TextForm heading ="Enter the text "mode ={mode} showAlert={showAlert}/>
         
          
      
  </div>

  
</>
  
  );
}

export default App;
