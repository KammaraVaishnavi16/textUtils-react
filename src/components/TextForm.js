import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const handleOnUpClick = () => {
    setText(text.toUpperCase());
    console.log(text);
    props.showAlert("Converted to Uppercase", "success");
  };
  const handleOnLowClick = () => {
    setText(text.toLowerCase());
    props.showAlert("Converted to Lowercase", "success");
  };
  const handleOnWordLength = () => {
    const newText = text.split(" ");
    const modifiedText = newText.filter((e) => {
      return e.length !== 3;
    });
    console.log(modifiedText);
    setText(modifiedText.join(" "));
  };
  const handleOnClearText = () => {
    setText("");
    props.showAlert("cleared text", "success");
  };
  const handleCopy = () => {
    let copyText = document.getElementById("myBox");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
    document.getSelection().removeAllRanges();
    props.showAlert("text copied", "success");
  };

  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            placeholder="Enter you text"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
            rows="3"
          ></textarea>
          <button
            className="btn btn-primary mx-1 my-1"
            onClick={handleOnUpClick}
          >
            Convert to Uppercase
          </button>
          <button
            className="btn btn-primary mx-1 my-1"
            onClick={handleOnLowClick}
          >
            Convert to Lowercase
          </button>
          <button
            className="btn btn-primary mx-1 my-1"
            onClick={handleOnWordLength}
          >
            remove word length of 3
          </button>
          <button
            className="btn btn-primary mx-1 my-1"
            onClick={handleOnClearText}
          >
            clear text
          </button>
          <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>
            Copy text
          </button>
          {/* <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>
            Remove Extra spaces
          </button> */}
        </div>
      </div>
      <div className="container">
        <h2>
          <b>your text summary</b>
        </h2>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
          {/* {wordCount} words and {text.length} characters */}
        </p>
        <p> {0.008 * text.split(" ").length} minutes read</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the text box, to preview here..."}
        </p>
      </div>
    </>
  );
}
