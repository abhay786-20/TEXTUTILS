import React,{useState} from 'react'

export default function TextForm(props){
    const handleUpClick = ()=>{
      //  console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
      //  newText.setProperty('--red','yellow');
            setText(newText);
            props.showAlert("Uppercase converted","success");
    }
    const handleloClick = ()=>{
      //  console.log("Uppercase was clicked");
        let newText = text.toLowerCase();
      //  newText.setProperty('--red','yellow');
            setText(newText);
            props.showAlert("LowerCase converted","success");
        
    }
    const handleOnChange = (event)=>{
      
      //  console.log("On change");
         setText(event.target.value);

    }
    function countchar(text)
    {
      let newText2 = text.split(/\s/).length-1;

      let ans = text.length-newText2;
      return parseInt(ans);
    }
    const handleCopy = ()=>{
      
        var text = document.getElementById("myBox");
        text.select();
       navigator.clipboard.writeText(text.value);
       props.showAlert("Text Copied","success");
    }
    const handleStyle = ()=>{
     
      var text = document.getElementById("myBox");
       if(text.style.color==='red'){
       text.style.fontFamily='cursive';
       text.style.color ='yellow';
       }else{
        text.style.fontFamily='serif';
        text.style.color ='red';
       }
       props.showAlert("Style Changed","success");
    }


    const[text,setText] = useState('Enter text here');
  return (
    <>
   <div className="container" style ={{color : props.mode==='dark'?'white':'black'}}>
   <h1>{props.heading}</h1>
   <div className="mb-3">
  <label htmlFor="myBox" className="form-label"></label>
  <textarea className="form-control" id ="myBox"value={text} onChange={handleOnChange}  rows="8" style ={{backgroundColor : props.mode==='dark'?'#13466e':'white'}}></textarea>
 </div>
   <button className="btn btn-danger mx-2 my-2" onClick={handleUpClick}>Covert to uppercase</button>
   <button className="btn btn-danger mx-2 my-1" onClick={handleloClick}>Covert to lowercasecase</button>
   
   <button className="btn btn-danger mx-2 my-1" onClick={handleCopy}>Copy Text</button>
   
   <button className="btn btn-danger mx-2 my-1" onClick={handleStyle}>Change Style</button>
</div>
<div className="container my-3" style ={{color : props.mode==='dark'?'white':'black'}}>
  <h1>Your text summary</h1>
  <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words,{countchar(text)} chars</p>
  <p>{.0083*text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read, {.0083*text.split(" ").filter((element)=>{return element.length!==0}).length*60} seconds to read</p>
  <h3>Preview</h3>
  <p>{text}</p>
</div>
  </>
   ) 
} 

