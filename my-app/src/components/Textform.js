import React, { useState } from 'react';

export default function Textform(props) {
  const [text, setText] = useState('');

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase!", "success");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase!", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      props.showAlert("Copied to Clipboard!", "success");
    } catch (err) {
      props.showAlert("Failed to copy!", "danger");
    }
  };

  const handleExtraSpace = () => {
    let newText = text.split(/\s+/).filter(Boolean).join(" ");
    setText(newText);
    props.showAlert("Extra spaces have been removed!", "success");
  };

  const handleClearClick = () => {
    setText("");
    props.showAlert("All text has been cleared!", "success");
  };

  const wordCount = text.trim().split(/\s+/).filter(element => element.length !== 0).length;

  return (
    <>
      <div className="container" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
        <h1 className= "mb-4">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            style={{
              backgroundColor: props.mode === 'dark' ? '#13466e' : 'white',
              color: props.mode === 'dark' ? 'white' : 'black'
            }}
          />
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick} disabled={text.length === 0}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick} disabled={text.length === 0}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleCopy} disabled={text.length === 0}>Copy Text</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpace} disabled={text.length === 0}>Remove Extra Space</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleClearClick} disabled={text.length === 0}>Clear Text</button>
      </div>
      <div className="container my-2" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
        <h1>Your Text Summary</h1>
        <p><b><i>{wordCount} words and {text.length} characters</i></b></p>
        <p>{(0.008 * wordCount).toFixed(2)} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to preview"}</p>
      </div>
    </>
  );
}
