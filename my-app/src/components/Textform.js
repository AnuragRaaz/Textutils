import React, { useState } from 'react'

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase!", "success");
  }
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercasecase!", "success");
  }

  const handleOnChange = (event) => {
    setText(event.target.value);
  }
   const handleCopy = () =>{
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
     props.showAlert("Copied to Clipboard!", "success");
   }
   const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
     props.showAlert("Extraspaces has been removed!", "success");
   }
const handleClearClick = () => {
  setText("");
   props.showAlert("All text has been cleared!", "success");
};

  const [text, setText] = useState('');
  return (
    <>
    <div className="container">
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea 
          className="form-control" 
          value={text} 
          onChange={handleOnChange} 
          id="myBox" 
          rows="8">
        </textarea>
      </div>
      <button 
        className="btn btn-primary mx-1" 
        onClick={handleUpClick}>
        Convert to Uppercase
      </button>
       <button 
        className="btn btn-primary mx-1" 
        onClick={handleLoClick}>
        Convert to Lowercase
      </button>
      <button 
        className="btn btn-primary mx-1" 
        onClick={handleCopy}>
        Copy Text
      </button>
      <button 
        className="btn btn-primary mx-1" 
        onClick={handleExtraSpace}>
        Remove Extra Space
      </button>
      <button className="btn btn-primary mx-1" onClick={handleClearClick}>
        Clear Text
</button>

    </div>
    <div className="container my-2">
      <h1> Your text summary</h1>
      <p><b><i> {text.split (" ").length } words and {text.length} characters</i></b></p>
      <p> {0.008 * text.split(" ").length } Minutes read</p>
      <h2> preview</h2>
      <p> {text.length>0?text: "Enter something to preview it here"} </p>
    </div>
    </>
  )
}
