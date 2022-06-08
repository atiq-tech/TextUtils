import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newtext = Text.toUpperCase();
    setText(newtext);
  };
  const handleLowClick = () => {
    let newtext = Text.toLowerCase();
    setText(newtext);
  };
  const handleClText = () => {
    let newtext = "";
    setText(newtext);
  };
  const handleCopy = () => {
    let Text = document.getElementById("MyBox");
    Text.select();
    navigator.clipboard.writeText(Text.value);
  };
  const handleRemovespace = () => {
    let newtext = Text.split(/[ ]+/);
    setText(newtext.join(" "));
  };
  const handleOnChange = (event) => {
    console.log("On Change");
    setText(event.target.value);
  };
  const [Text, setText] = useState(" ");

  return (
    <>
      <div className="container"style={{ color: props.mode === "dark" ? "white" : "black" }} >
    <h3>{props.heading}</h3>
      <div className="mb-3">
      <label for="MyBox" class="form-label">My Text box:</label>
    <textarea class="form-control" value={Text} onChange={handleOnChange} style={{ backgroundColor: props.mode === "dark" ? "grey" : "white",color: props.mode === "dark" ? "white" : "black", }} id="MyBox" rows="8"></textarea>
        </div>
    <button className="btn btn-success mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
    <button className="btn btn-info mx-2" onClick={handleLowClick}>Convert to LowerCase</button>
    <button className="btn btn-dark mx-2" onClick={handleClText}>Clear Text</button>
    <button className="btn btn-secondary mx-2"onClick={handleCopy}>Text the copy</button>
    <button className="btn btn-warning mx-2"onClick={handleRemovespace}>Remove Extra Space</button>
      </div>
      <div
        className="container my-3"style={{ color: props.mode === "dark" ? "white" : "black" }} >
        <h3>Text summery</h3>
        <p>{Text.split(" ").length} words and {Text.length} characters </p>
        <p>{0.008 * Text.split(" ").length} Minutes read</p>
        <h2>Preview Text</h2>
        <p>{Text.length>0?Text:"Enter something your choose"}</p>
      </div>
    </>
  );
}
