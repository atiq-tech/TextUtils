import React, { useState } from 'react';
import './App.css';
import Alert from './Components/Alert';
//import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })

  }

 const toggoleMode=()=>{
    if(mode ==='light'){
      setMode ('dark');
      document.body.style.backgroundColor='#0b3a7e'
      showAlert("Dark mode has been enable","success")

    }
    else{
      setMode ('light');
      document.body.style.backgroundColor='white'
      showAlert("Light mode has been enable","success")
    }
  }
 
  return (
    <>
   {/*<Navbar title="MyFirstApp" home="MyHomePage"About="MyAboutPage"/>*/}
   {/* <Navbar/>*/}
   <Navbar title="MyFirstApp" mode={mode} toggoleMode={toggoleMode} />
   <Alert alert={alert}/>
   <div className="container my-3">
   {<TextForm heading="Enter the something message or text:" mode={mode}/>}
   {/*<About/>*/}
   <Alert/>
   </div>
    </>
  );
  
}

export default App;
