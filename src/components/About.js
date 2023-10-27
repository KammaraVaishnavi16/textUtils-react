import React, { useState } from "react";

export default function About(props) {
  // const [myStyle, setMyStyle] = useState({
  //   color: "navy",
  //   backgroundColor: "pink",
  //   text: "Enable Dark mode",
  // });
  // const toggleStyle = () => {
  //   if (myStyle.color === "white") {
  //     setMyStyle({
  //       color: "navy",
  //       backgroundColor: "pink",
  //       text: "Enable Dark mode",
  //     });
  //   } else {
  //     setMyStyle({
  //       color: "white",
  //       backgroundColor: "black",
  //       text: "Enable Light mode",
  //     });
  //   }
  // };
  let myStyle = {
    color: props.text === "Enable Light" ? "white" : "#021231",
    backgroundColor: props.text === "Enable Dark" ? "#021231" : "white",
  };
  return (
    <div className="container " style={myStyle}>
      <h2 className="my-4">About Us</h2>
      <div className="mb-3">
        <label
          htmlFor="exampleFormControlInput1"
          className="form-label"
          style={myStyle}
        >
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Example textarea
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>
      {/* <div className="container">
        <button className="btn btn-primary" onClick={toggleStyle}>
          {myStyle.text}
        </button>
      </div> */}
    </div>
  );
}
